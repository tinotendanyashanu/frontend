'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Last Updated: February 19, 2026</p>
        
        <div className="prose prose-slate prose-lg max-w-none space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using this website [leothetechguy.com] (the "Site") and any services provided by Leo Systems ("Company", "we", "us", or "our"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Offered</h2>
            <p className="text-slate-600 leading-relaxed">
              Leo Systems provides technology consulting, software development, and digital infrastructure services to businesses and individuals. We also operate a Partner Network that allows individuals and entities to earn commissions by referring clients to our services.
            </p>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Partner Program Terms</h2>
             <p className="text-slate-600 leading-relaxed mb-4">
                 Users who register for the Leo Systems Partner Network agree to the following additional terms:
             </p>
             <div className="pl-6 border-l-4 border-slate-200 space-y-6">
                 <div>
                     <h3 className="text-lg font-bold text-slate-800">A. Independent Contractor Relationship</h3>
                     <p className="text-slate-600">
                         Partners are independent contractors, not employees. Participation in the Partner Network does not create a partnership, joint venture, agency, or employment relationship between you and Leo Systems. You are responsible for all taxes associated with your commission earnings.
                     </p>
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-slate-800">B. Commission Structure</h3>
                     <p className="text-slate-600 mb-2">Commissions are paid based on the finalized deal value for referred projects:</p>
                     <ul className="list-disc pl-6 text-slate-600 space-y-1">
                         <li><strong>Referral Partner:</strong> 10% commission on registered deals.</li>
                         <li><strong>Agency Partner:</strong> 15% commission on registered deals (requires approval).</li>
                         <li><strong>Enterprise Partner:</strong> 20% commission on registered deals (requires approval).</li>
                     </ul>
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-slate-800">C. Payouts</h3>
                     <p className="text-slate-600">
                         Payouts are processed on a Net-30 basis after the client has paid their invoice. A minimum threshold of $50 USD (or equivalent) in earnings is required for a payout to be triggered.
                     </p>
                 </div>
             </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Leo Systems and its licensors. The Service is protected by copyright, trademark, and other laws of both Zimbabwe and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Leo Systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              In no event shall Leo Systems, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. Partner accounts found to be engaging in fraudulent referrals will be terminated immediately and any pending commissions forfeited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <p className="font-semibold text-slate-900">Email: <a href="mailto:contact@leothetechguy.com" className="text-blue-600 hover:text-blue-800">contact@leothetechguy.com</a></p>
            </div>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200">
            <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
            </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
