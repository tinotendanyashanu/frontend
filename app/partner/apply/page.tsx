'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Loader2, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PartnerApply() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      companyName: formData.get('companyName'),
      website: formData.get('website'),
      partnershipType: formData.get('partnershipType'),
    };

    try {
      const res = await fetch('/api/partner/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <main className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4 py-24">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Application Received</h1>
            <p className="text-gray-500 mb-8 text-lg">
              Thanks for applying to the Partner Network. We'll review your application and get back to you shortly.
            </p>
            <Link href="/" className="inline-flex justify-center items-center px-6 py-3 text-base font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-3xl mx-auto">
        <Link href="/partner" className="inline-flex items-center text-gray-500 hover:text-emerald-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Partner Overview
        </Link>
        
        <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Partner Application</h1>
            <p className="text-gray-500 text-lg">Join the network. Scale your business. Build with Leo Systems.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white">
          
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center border border-red-200">
              <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Work Email</label>
                    <input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="jane@company.com" />
                </div>
            </div>

            <div>
                <label htmlFor="companyName" className="block text-sm font-bold text-slate-900 mb-2">Company Name</label>
                <input type="text" name="companyName" id="companyName" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Acme Inc." />
            </div>

            <div>
                <label htmlFor="website" className="block text-sm font-bold text-slate-900 mb-2">Website (Optional)</label>
                <input type="url" name="website" id="website" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="https://..." />
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Partnership Model</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="cursor-pointer">
                        <input type="radio" name="partnershipType" value="referral" className="peer sr-only" required />
                        <div className="p-4 rounded-lg border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 hover:bg-gray-50 transition-all text-center">
                            <span className="block font-bold text-slate-900">Referral</span>
                            <span className="text-xs text-gray-500">For connectors</span>
                        </div>
                    </label>
                    <label className="cursor-pointer">
                        <input type="radio" name="partnershipType" value="agency" className="peer sr-only" required />
                        <div className="p-4 rounded-lg border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 hover:bg-gray-50 transition-all text-center">
                            <span className="block font-bold text-slate-900">Agency</span>
                            <span className="text-xs text-gray-500">For teams</span>
                        </div>
                    </label>
                    <label className="cursor-pointer">
                        <input type="radio" name="partnershipType" value="enterprise" className="peer sr-only" required />
                        <div className="p-4 rounded-lg border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 hover:bg-gray-50 transition-all text-center">
                            <span className="block font-bold text-slate-900">Enterprise</span>
                            <span className="text-xs text-gray-500">Strategic</span>
                        </div>
                    </label>
                </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
                type="submit" 
                disabled={loading}
                className="w-full flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    'Submit Application'
                )}
            </button>
            <p className="text-center text-sm text-gray-400 mt-4">
                By submitting, you agree to our terms of service and privacy policy.
            </p>
          </div>

        </form>
      </div>

      <Footer />
    </main>
  );
}
