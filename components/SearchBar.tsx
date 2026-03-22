'use client';

import { SearchFilters } from '@/lib/types';
import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFiltersClick?: () => void;
}

export default function SearchBar({ onSearch, onFiltersClick }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search listings... (e.g., 'fill dirt', 'concrete crew')"
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 text-sm"
            />
          </div>
          <button
            type="button"
            onClick={onFiltersClick}
            className="md:hidden px-4 py-2 bg-slate-100 text-slate-900 rounded font-medium text-sm hover:bg-slate-200"
          >
            Filters
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-slate-900 text-white rounded font-medium text-sm hover:bg-slate-800"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
