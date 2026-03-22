'use client';

import { Listing } from '@/lib/types';
import { MapPin, Clock, AlertCircle, Zap } from 'lucide-react';
import Link from 'next/link';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.id}`}>
      <div className="bg-white border border-slate-200 rounded hover:shadow-md transition-shadow cursor-pointer h-full">
        {/* Image placeholder */}
        <div className="bg-slate-100 h-40 flex items-center justify-center">
          <div className="text-slate-400 text-sm">Image</div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-slate-900 text-sm leading-snug flex-1">
              {listing.title}
            </h3>
            {listing.urgency && (
              <div
                className={`shrink-0 px-2 py-1 text-xs font-semibold rounded whitespace-nowrap ${
                  listing.urgency === 'urgent'
                    ? 'bg-red-100 text-red-700'
                    : listing.urgency === 'today'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {listing.urgency === 'urgent' && '🔥 Urgent'}
                {listing.urgency === 'today' && '⚡ Today'}
                {listing.urgency === 'this_week' && '📅 This Week'}
              </div>
            )}
          </div>

          {/* Category & Subcategory */}
          <div className="flex gap-2 mb-3">
            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
              {listing.category}
            </span>
            <span className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded">
              {listing.subcategory}
            </span>
          </div>

          {/* Price */}
          {listing.price !== null && (
            <div className="mb-3">
              <div className="text-lg font-bold text-slate-900">
                ${listing.price.toLocaleString()}
              </div>
            </div>
          )}

          {/* Quantity & Unit */}
          {listing.quantity && (
            <div className="text-sm text-slate-600 mb-3">
              {listing.quantity} {listing.unit}
            </div>
          )}

          {/* Location & Time */}
          <div className="flex flex-col gap-2 text-xs text-slate-600 mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{listing.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>{listing.postedTime}</span>
            </div>
          </div>

          {/* Seller Type */}
          <div className="text-xs font-medium text-slate-700 bg-slate-50 px-2 py-1 rounded inline-block">
            {listing.sellerType.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
          </div>
        </div>
      </div>
    </Link>
  );
}
