'use client';

import Link from 'next/link';
import CategoryGrid from '@/components/CategoryGrid';
import ListingCard from '@/components/ListingCard';
import Header from '@/components/Header';
import { mockListings } from '@/lib/mockData';

export default function Home() {
  const featuredListings = mockListings.slice(0, 6);

  const handleCategoryClick = (category: string) => {
    // In a real app, this would navigate with the category pre-selected
    // For now, just link to browse
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Move surplus fast
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Construction marketplace for contractors, crews, suppliers, and yards. Post extra dirt, concrete, equipment, or labor. Find material near your jobsite.
            </p>
            <div className="flex gap-3">
              <Link
                href="/listings"
                className="px-6 py-3 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100"
              >
                Browse Listings
              </Link>
              <Link
                href="/post"
                className="px-6 py-3 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 border border-slate-600"
              >
                Post Listing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded border border-slate-200">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast & Organized</h3>
              <p className="text-sm text-slate-600">
                No more buried listings. Structured categories and filters help you find exactly what you need.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-slate-200">
              <div className="text-2xl mb-3">🔍</div>
              <h3 className="font-semibold text-slate-900 mb-2">Built for Construction</h3>
              <p className="text-sm text-slate-600">
                Tailored for contractors, crews, suppliers, and owner-operators. Real construction use cases.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-slate-200">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="font-semibold text-slate-900 mb-2">Get It Gone Today</h3>
              <p className="text-sm text-slate-600">
                Post urgency tags. Find what you need this week or today. Move material fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            What are you looking for?
          </h2>
          <CategoryGrid onCategoryClick={handleCategoryClick} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How it works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Browse', desc: 'Search by category, location, urgency' },
              { num: '2', title: 'Post', desc: 'Create structured listings in 2 min' },
              { num: '3', title: 'Contact', desc: 'Reach out to sellers or buyers' },
              { num: '4', title: 'Move It', desc: 'Close deals and move material' },
            ].map((step) => (
              <div key={step.num} className="bg-white p-6 rounded border border-slate-200 text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {step.num}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Recently posted
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/listings"
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded font-semibold hover:bg-slate-800"
            >
              View All Listings
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to post or find material?</h2>
          <p className="text-slate-300 mb-8">
            Get started in seconds. No complicated forms, just what contractors actually need.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/post"
              className="px-6 py-3 bg-white text-slate-900 rounded font-semibold hover:bg-slate-100"
            >
              Post a Listing
            </Link>
            <Link
              href="/listing"
              className="px-6 py-3 bg-slate-700 text-white rounded font-semibold hover:bg-slate-600 border border-slate-600"
            >
              Browse
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="font-bold text-white">Yardigo</div>
            <div className="text-sm">
              <p>Construction marketplace for contractors and crews</p>
              <p className="mt-2 text-slate-500">v0.1.0 • Mock data only</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
