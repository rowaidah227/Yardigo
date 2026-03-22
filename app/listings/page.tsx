'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import ListingCard from '@/components/ListingCard';
import { mockListings } from '@/lib/mockData';
import { SearchFilters } from '@/lib/types';
import { X } from 'lucide-react';

export default function ListingsPage() {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent');

  const filteredAndSortedListings = useMemo(() => {
    let results = mockListings;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (listing) =>
          listing.title.toLowerCase().includes(query) ||
          listing.description.toLowerCase().includes(query) ||
          listing.subcategory.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category) {
      results = results.filter((listing) => listing.category === filters.category);
    }

    // Subcategory filter
    if (filters.subcategory) {
      results = results.filter((listing) => listing.subcategory === filters.subcategory);
    }

    // Listing type filter
    if (filters.listingType) {
      results = results.filter((listing) => listing.listingType === filters.listingType);
    }

    // Price filter
    if (filters.priceMin !== undefined) {
      results = results.filter(
        (listing) => listing.price === null || listing.price >= filters.priceMin
      );
    }
    if (filters.priceMax !== undefined) {
      results = results.filter(
        (listing) => listing.price === null || listing.price <= filters.priceMax
      );
    }

    // Sorting
    if (sortBy === 'price_low') {
      results.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'price_high') {
      results.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === 'distance') {
      results.sort((a, b) => (a.distance || 999) - (b.distance || 999));
    }

    return results;
  }, [filters, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <SearchBar
        onSearch={setSearchQuery}
        onFiltersClick={() => setMobileFiltersOpen(true)}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 shadow-sm">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Sort and count */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  {filteredAndSortedListings.length}
                </span>{' '}
                listings
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-slate-300 rounded text-sm bg-white"
              >
                <option value="recent">Most Recent</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="distance">Distance</option>
              </select>
            </div>

            {/* Listings Grid */}
            {filteredAndSortedListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded border border-slate-200 p-12 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  No listings found
                </h3>
                <p className="text-slate-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setFilters({});
                    setSearchQuery('');
                  }}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h2 className="font-semibold text-slate-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 hover:bg-slate-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onMobileClose={() => setMobileFiltersOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
