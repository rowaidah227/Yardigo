'use client';

import { SearchFilters, ListingCategory } from '@/lib/types';
import { mockCategories, mockSubcategories } from '@/lib/mockData';
import { useState } from 'react';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
  onMobileClose?: () => void;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  onMobileClose,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    category: true,
    listingType: true,
    price: false,
    location: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category: ListingCategory) => {
    onFilterChange({
      ...filters,
      category: filters.category === category ? undefined : category,
      subcategory: undefined,
    });
  };

  const handleSubcategoryChange = (subcategory: string) => {
    onFilterChange({
      ...filters,
      subcategory:
        filters.subcategory === subcategory ? undefined : subcategory,
    });
  };

  const handleListingTypeChange = (type: string) => {
    onFilterChange({
      ...filters,
      listingType:
        filters.listingType === type
          ? undefined
          : (type as any),
    });
  };

  const subcategoryOptions = filters.category
    ? mockSubcategories[filters.category] || []
    : [];

  return (
    <div className="bg-white border-r border-slate-200 p-4 min-h-screen">
      <div className="flex items-center gap-2 mb-6">
        <Filter size={18} />
        <h2 className="font-semibold text-slate-900">Filters</h2>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-3 font-semibold text-slate-900 text-sm hover:text-slate-700"
        >
          Category
          <span>{expandedSections.category ? '−' : '+'}</span>
        </button>
        {expandedSections.category && (
          <div className="space-y-2 mb-4">
            {mockCategories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category === category}
                  onChange={() => handleCategoryChange(category as ListingCategory)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Subcategory Filter */}
      {filters.category && subcategoryOptions.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => toggleSection('subcategory')}
            className="flex items-center justify-between w-full mb-3 font-semibold text-slate-900 text-sm hover:text-slate-700"
          >
            Subcategory
            <span>{expandedSections.subcategory ? '−' : '+'}</span>
          </button>
          {expandedSections.subcategory && (
            <div className="space-y-2 mb-4">
              {subcategoryOptions.map((subcategory) => (
                <label
                  key={subcategory}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.subcategory === subcategory}
                    onChange={() => handleSubcategoryChange(subcategory)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-slate-700">{subcategory}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Listing Type Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('listingType')}
          className="flex items-center justify-between w-full mb-3 font-semibold text-slate-900 text-sm hover:text-slate-700"
        >
          Type
          <span>{expandedSections.listingType ? '−' : '+'}</span>
        </button>
        {expandedSections.listingType && (
          <div className="space-y-2 mb-4">
            {[
              'For Sale',
              'Wanted',
              'For Rent',
              'Service Available',
              'Service Needed',
            ].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.listingType === type}
                  onChange={() => handleListingTypeChange(type)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-slate-700">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full mb-3 font-semibold text-slate-900 text-sm hover:text-slate-700"
        >
          Price Range
          <span>{expandedSections.price ? '−' : '+'}</span>
        </button>
        {expandedSections.price && (
          <div className="space-y-3 mb-4">
            <div>
              <label className="text-xs text-slate-600">Min</label>
              <input
                type="number"
                value={filters.priceMin || ''}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    priceMin: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                placeholder="Min price"
                className="w-full px-2 py-1 border border-slate-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-600">Max</label>
              <input
                type="number"
                value={filters.priceMax || ''}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    priceMax: e.target.value ? Number(e.target.value) : undefined,
                  })
                }
                placeholder="Max price"
                className="w-full px-2 py-1 border border-slate-300 rounded text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* Clear Filters */}
      {(filters.category ||
        filters.listingType ||
        filters.priceMin ||
        filters.priceMax) && (
        <button
          onClick={() => {
            onFilterChange({});
            onMobileClose?.();
          }}
          className="w-full px-3 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
