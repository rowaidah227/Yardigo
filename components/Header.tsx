'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-slate-900">Yardigo</div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/listings" className="text-slate-600 hover:text-slate-900 font-medium text-sm">
              Browse
            </Link>
            <Link href="/post" className="text-slate-600 hover:text-slate-900 font-medium text-sm">
              Post
            </Link>
            <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 font-medium text-sm">
              Dashboard
            </Link>
            <Link
              href="/auth/signin"
              className="px-4 py-2 bg-slate-900 text-white rounded text-sm font-medium hover:bg-slate-800"
            >
              Sign In
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-3">
            <Link href="/listings" className="block text-slate-600 font-medium">
              Browse
            </Link>
            <Link href="/post" className="block text-slate-600 font-medium">
              Post
            </Link>
            <Link href="/dashboard" className="block text-slate-600 font-medium">
              Dashboard
            </Link>
            <Link href="/auth/signin" className="block text-slate-600 font-medium">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
