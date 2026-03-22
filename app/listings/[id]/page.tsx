'use client';

import { mockListings } from '@/lib/mockData';
import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';
import { MapPin, Clock, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = mockListings.find((l) => l.id === params.id);
  const [isSaved, setIsSaved] = useState(false);

  if (!listing) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Listing not found
          </h1>
          <Link href="/listings" className="text-blue-600 hover:underline">
            Back to listings
          </Link>
        </div>
      </div>
    );
  }

  const relatedListings = mockListings
    .filter(
      (l) =>
        l.category === listing.category &&
        l.id !== listing.id
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <Link
          href="/listings"
          className="text-slate-600 hover:text-slate-900 text-sm font-medium mb-6 inline-block"
        >
          ← Back to listings
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Image placeholder */}
            <div className="bg-slate-200 rounded h-80 flex items-center justify-center">
              <div className="text-slate-400 text-lg">Image</div>
            </div>

            {/* Title and badges */}
            <div>
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                  {listing.category}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                  {listing.subcategory}
                </span>
                {listing.urgency && (
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded ${
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
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                {listing.title}
              </h1>

              {/* Price */}
              {listing.price !== null && (
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-slate-900">
                    ${listing.price.toLocaleString()}
                  </span>
                  {listing.priceType === 'negotiable' && (
                    <span className="text-sm text-slate-600">• Negotiable</span>
                  )}
                  {listing.priceType === 'contact' && (
                    <span className="text-sm text-slate-600">• Contact for pricing</span>
                  )}
                </div>
              )}
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded border border-slate-200">
              {listing.quantity && (
                <div>
                  <p className="text-xs text-slate-600 font-medium uppercase">
                    Quantity
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    {listing.quantity} {listing.unit}
                  </p>
                </div>
              )}
              {listing.condition && (
                <div>
                  <p className="text-xs text-slate-600 font-medium uppercase">
                    Condition
                  </p>
                  <p className="text-lg font-semibold text-slate-900 capitalize">
                    {listing.condition}
                  </p>
                </div>
              )}
              {listing.availability && (
                <div className="col-span-2">
                  <p className="text-xs text-slate-600 font-medium uppercase">
                    Availability
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    {listing.availability}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded border border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Details
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded border border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Location
              </h2>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-slate-400 shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">
                    {listing.location}
                  </p>
                  <p className="text-sm text-slate-600">{listing.postalCode}</p>
                  {listing.distance && (
                    <p className="text-xs text-slate-500 mt-1">
                      {listing.distance} km away
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact / Seller Info */}
          <div className="space-y-4">
            {/* Contact Card */}
            <div className="bg-white border border-slate-200 rounded p-6 sticky top-20">
              <div className="text-sm text-slate-600 mb-4">
                Posted{' '}
                <span className="font-medium text-slate-900">
                  {listing.postedTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {listing.sellerName}
              </h3>
              <p className="text-xs text-slate-600 mb-4 capitalize">
                {listing.sellerType.split('_').join(' ')}
              </p>

              <div className="space-y-3 mb-6">
                <button className="w-full px-4 py-3 bg-slate-900 text-white rounded font-semibold hover:bg-slate-800">
                  Contact Seller
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-full px-4 py-3 rounded font-semibold border ${
                    isSaved
                      ? 'bg-slate-100 text-slate-900 border-slate-300'
                      : 'bg-white text-slate-900 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {isSaved ? '❤️ Saved' : '🤍 Save'}
                </button>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-600 mb-2">Share this listing</p>
                <button className="w-full px-3 py-2 border border-slate-300 rounded text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-xs text-blue-900">
                <span className="font-semibold">💡 Tip:</span> Always verify details and meet safely in person before exchanging payment.
              </p>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        {relatedListings.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Related in {listing.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedListings.map((related) => (
                <ListingCard key={related.id} listing={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
