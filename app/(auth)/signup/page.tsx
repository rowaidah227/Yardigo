'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import FormInput from '@/components/FormInput';
import FormSelect from '@/components/FormSelect';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Create account
            </h1>
            <p className="text-slate-600 mb-8">
              Join Yardigo to post and find construction surplus
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-green-900 text-sm font-medium">
                  ✓ Account created (this is a mock)
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <FormInput
                label="Full name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />

              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com"
                required
              />

              <FormSelect
                label="Type"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                options={[
                  { value: 'contractor', label: 'Contractor' },
                  { value: 'supplier', label: 'Supplier' },
                  { value: 'crew', label: 'Crew' },
                  { value: 'yard', label: 'Yard' },
                  { value: 'owner_operator', label: 'Owner-Operator' },
                  { value: 'individual', label: 'Individual' },
                ]}
                required
              />

              <FormInput
                label="Company (optional)"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
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
                Create Account
              </button>
            </form>

            <div className="text-center text-sm">
              <p className="text-slate-600 mb-4">Already have an account?</p>
              <Link
                href="/auth/signin"
                className="text-slate-900 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                By creating an account, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
