'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: February 19, 2026</p>
        
        <div className="prose prose-slate prose-lg max-w-none space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              At Leo Systems ("LeoTheTechGuy", "we", "us", or "our"), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [leothetechguy.com], use our services, or join our Partner Network.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">A. Personal Data</h3>
                <p className="text-slate-600 leading-relaxed">
                  We may collect personally identifiable information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mt-2 text-slate-600 space-y-1">
                  <li>Register for the Partner Network (Name, Email, Phone Number, Payment Details).</li>
                  <li>Submit a form on our Contact page.</li>
                  <li>Subscribe to our newsletter or download resources.</li>
                  <li>Book a consultation or strategy session.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">B. Usage Data</h3>
                <p className="text-slate-600 leading-relaxed">
                  We verify usage data automatically when you visit the site. This may include your IP address, browser type, operating system, referring URLs, device information, and pages visited. We use this data to analyze trends and improve the user experience.
                </p>
              </div>

              <div>
                 <h3 className="text-lg font-semibold text-slate-800 mb-2">C. Cookies and Tracking Technologies</h3>
                 <p className="text-slate-600 leading-relaxed">
                   We use cookies and similar tracking technologies to track the activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                 </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>To provide and maintain our Service, including monitoring the usage of our Service.</li>
              <li>To manage your account: to manage your registration as a user of the Service or Partner Network.</li>
              <li>To contact you: regarding updates, informative communications related to functionalities, products, or contracted services.</li>
              <li>To provide you with news, special offers, and general information about other goods, services, and events which we offer.</li>
              <li>To manage your requests: To attend and manage your requests to us.</li>
              <li>For business transfers: We may use your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Security of Your Data</h2>
            <p className="text-slate-600 leading-relaxed">
              The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Partner Network Specifics</h2>
            <p className="text-slate-600 leading-relaxed">
              If you join our Partner Network, we collect additional information required for tax and payment purposes (e.g., Bank Account details, Tax ID). This information is stored securely and is only used to process commission payouts and comply with financial regulations. We do not share this sensitive financial data with third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Data Protection Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <p className="font-semibold text-slate-900">Email: <a href="mailto:contact@leothetechguy.com" className="text-blue-600 hover:text-blue-800">contact@leothetechguy.com</a></p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
