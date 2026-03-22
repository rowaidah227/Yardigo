'use client';

import Header from '@/components/Header';
import ListingCard from '@/components/ListingCard';
import { mockListings } from '@/lib/mockData';
import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<
    'my_listings' | 'saved' | 'drafts' | 'messages'
  >('my_listings');

  // Mock user data
  const myListingIds = ['1', '3', '7', '14'];
  const myListings = mockListings.filter((l) => myListingIds.includes(l.id));

  const savedListingIds = ['2', '6', '11', '18'];
  const savedListings = mockListings.filter((l) => savedListingIds.includes(l.id));

  const stats = [
    { label: 'Active listings', value: myListings.length },
    { label: 'Saved listings', value: savedListings.length },
    { label: 'Profile views', value: 47 },
    { label: 'Messages', value: 3 },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Dashboard
          </h1>
          <p className="text-slate-600">
            Manage your listings, saved items, and messages
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-slate-200 rounded p-4"
            >
              <p className="text-xs text-slate-600 font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white border border-slate-200 rounded">
          <div className="flex border-b border-slate-200">
            {[
              { id: 'my_listings', label: 'My Listings' },
              { id: 'saved', label: 'Saved' },
              { id: 'drafts', label: 'Drafts' },
              { id: 'messages', label: 'Messages' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* My Listings */}
            {activeTab === 'my_listings' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Your active listings
                  </h2>
                  <Link
                    href="/post"
                    className="px-4 py-2 bg-slate-900 text-white rounded text-sm font-medium hover:bg-slate-800"
                  >
                    Post new
                  </Link>
                </div>

                {myListings.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {myListings.map((listing) => (
                      <ListingCard key={listing.id} listing={listing} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-600 mb-4">No active listings yet</p>
                    <Link
                      href="/post"
                      className="inline-block px-4 py-2 bg-slate-900 text-white rounded font-medium hover:bg-slate-800"
                    >
                      Post a listing
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Saved Listings */}
            {activeTab === 'saved' && (
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-6">
                  Listings you&apos;ve saved
                </h2>

                {savedListings.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedListings.map((listing) => (
                      <ListingCard key={listing.id} listing={listing} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-600 mb-4">No saved listings yet</p>
                    <Link
                      href="/listings"
                      className="inline-block px-4 py-2 bg-slate-900 text-white rounded font-medium hover:bg-slate-800"
                    >
                      Browse listings
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Drafts */}
            {activeTab === 'drafts' && (
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-6">
                  Draft listings
                </h2>
                <div className="text-center py-12">
                  <p className="text-slate-600">
                    No draft listings. (Drafts feature not available in v0.1)
                  </p>
                </div>
              </div>
            )}

            {/* Messages */}
            {activeTab === 'messages' && (
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-6">
                  Messages
                </h2>
                <div className="text-center py-12">
                  <p className="text-slate-600">
                    No messages yet. (Messaging feature not available in v0.1)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
