'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';

export default function SignInPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white border border-slate-200 rounded p-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Sign in</h1>
            <p className="text-slate-600 mb-8">
              Sign in to manage your listings and messages
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-green-900 text-sm font-medium">
                  ✓ Login successful (this is a mock)
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <FormInput
                label="Email"
                type="email"
                placeholder="you@company.com"
                required
              />
              <FormInput
                label="Password"
                type="password"
                placeholder="••••••••"
                required
              />

              <button
                type="submit"
                className="w-full px-4 py-2 bg-slate-900 text-white rounded font-semibold hover:bg-slate-800 mt-6"
              >
                Sign In
              </button>
            </form>

            <div className="text-center text-sm">
              <p className="text-slate-600 mb-4">Don&apos;t have an account?</p>
              <Link
                href="/auth/signup"
                className="text-slate-900 font-semibold hover:underline"
              >
                Create account
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                This is a mock authentication page. No login required for this MVP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
