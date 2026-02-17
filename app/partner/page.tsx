import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Check, TrendingUp, Shield, Lock, Layers, Zap, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: "Partner Network | Leo Systems",
  description: "Collaborate with a premium engineering team. Build recurring revenue.",
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* ⬛ HERO SECTION (Square Structure + Brand Colors) */}
      <section className="pt-32 pb-20 px-6 lg:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 animate-fade-in-up">
                  <div className="inline-block px-3 py-1 mb-6 border border-emerald-200 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-100 transition-colors cursor-default">
                      Partner Network
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.05]">
                      Build business. <br />
                      <span className="text-gray-400">Together.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                      Help your clients deploy enterprise-grade infrastructure while unlocking new revenue streams.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                      <Link href="/contact?subject=Partner Application" className="inline-flex items-center justify-center px-8 py-5 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-all text-lg w-full sm:w-auto shadow-lg shadow-emerald-200">
                          Become a Partner
                      </Link>
                      <Link href="#models" className="inline-flex items-center justify-center px-8 py-5 border border-gray-200 text-slate-900 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all text-lg w-full sm:w-auto">
                          View Models
                      </Link>
                  </div>
              </div>
              
              {/* Abstract Visual - Geometric Modular with Colors */}
              <div className="flex-1 w-full relative h-[400px] md:h-[600px] hidden md:block">
                   <div className="absolute inset-0 bg-slate-50 rounded-2xl overflow-hidden">
                       <div className="absolute top-10 left-10 right-10 bottom-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold mt-4 text-slate-900">Revenue Growth</h3>
                                </div>
                                <div className="text-4xl font-mono font-bold text-gray-200">01</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                     <div className="h-full w-3/4 bg-blue-600"></div>
                                </div>
                                <div className="h-2 w-2/3 bg-gray-100 rounded-full overflow-hidden">
                                     <div className="h-full w-1/2 bg-emerald-500"></div>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-gray-400 mt-2">
                                     <span>Commission</span>
                                     <span className="text-emerald-600 font-bold">30%</span>
                                </div>
                            </div>
                       </div>
                       
                       {/* Floating Element */}
                       <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
                       <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-600 rounded-full opacity-10 blur-3xl"></div>
                   </div>
              </div>
          </div>
      </section>

      {/* ⬜ FEATURES (Modular Columns with Brand Colors) */}
      <section className="py-24 px-6 lg:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                  {/* Feature 1 - Emerald for Money */}
                  <div className="group">
                      <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                          <TrendingUp className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Recurring Revenue</h3>
                      <p className="text-lg text-gray-500 leading-relaxed mb-6">
                          Earn significant commissions on closed deals and long-term residuals on infrastructure retainers.
                      </p>
                      <Link href="/contact" className="inline-flex items-center text-emerald-600 font-bold hover:underline">
                          See rates <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                  </div>

                  {/* Feature 2 - Blue for Tech/Trust */}
                  <div className="group">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Reliable Fulfillment</h3>
                      <p className="text-lg text-gray-500 leading-relaxed mb-6">
                          We execute the engineering. You maintain the client relationship. Zero technical debt for you.
                      </p>
                      <Link href="/services" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                          View Capabilities <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                  </div>

                  {/* Feature 3 - Slate/Dark for Private */}
                  <div className="group">
                      <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                          <Layers className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Sales Enablement</h3>
                      <p className="text-lg text-gray-500 leading-relaxed mb-6">
                          Access private white-label documents, technical scopes, and strategic guides to close deals.
                      </p>
                      <div className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed">
                          Private Access Only <Lock className="ml-2 w-3 h-3" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* ⬛ MODELS (Structured Cards) */}
      <section id="models" className="py-24 px-6 lg:px-12 bg-slate-50">
          <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl mb-16">
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-slate-900">Partnership Models</h2>
                  <p className="text-xl text-gray-500">Choose the structure that fits your business model.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-white p-8 lg:p-10 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col">
                      <div className="mb-8">
                          <h3 className="text-2xl font-bold mb-2 text-slate-900">Referral</h3>
                          <p className="text-gray-500">For individuals & connectors.</p>
                      </div>
                      <div className="w-full h-px bg-gray-100 mb-8"></div>
                      <ul className="space-y-4 mb-10 flex-grow">
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
                              <span className="text-gray-600">10-15% Commission</span>
                          </li>
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
                              <span className="text-gray-600">Simple Introduction</span>
                          </li>
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
                              <span className="text-gray-600">No Technical Req.</span>
                          </li>
                      </ul>
                      <Link href="/contact?subject=Referral" className="w-full py-4 text-center border-2 border-slate-100 hover:border-emerald-600 hover:text-emerald-700 rounded-lg font-bold transition-all text-slate-700">
                          Apply Referral
                      </Link>
                  </div>

                  {/* Card 2 - Featured (Blue) */}
                  <div className="bg-blue-600 text-white p-8 lg:p-10 rounded-xl shadow-xl shadow-blue-900/20 flex flex-col transform md:-translate-y-4 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-6 opacity-10">
                           <Shield className="w-32 h-32 text-white" />
                       </div>
                       <div className="mb-8 relative z-10">
                          <div className="flex justify-between items-start">
                              <div>
                                  <h3 className="text-2xl font-bold mb-2">Agency</h3>
                                  <p className="text-blue-100">For teams & studios.</p>
                              </div>
                              <span className="bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded">POPULAR</span>
                          </div>
                      </div>
                      <div className="w-full h-px bg-blue-500 mb-8 relative z-10"></div>
                      <ul className="space-y-4 mb-10 flex-grow relative z-10">
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-white flex-shrink-0" />
                              <span className="text-blue-50">15-25% Revenue Share</span>
                          </li>
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-white flex-shrink-0" />
                              <span className="text-blue-50">White Label Delivery</span>
                          </li>
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-white flex-shrink-0" />
                              <span className="text-blue-50">Dedicated Project Manager</span>
                          </li>
                           <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-white flex-shrink-0" />
                              <span className="text-blue-50">Integrated Workflow</span>
                          </li>
                      </ul>
                      <Link href="/contact?subject=Agency" className="relative z-10 w-full py-4 text-center bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-bold transition-all">
                          Apply Agency
                      </Link>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-8 lg:p-10 rounded-xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex flex-col">
                      <div className="mb-8">
                          <h3 className="text-2xl font-bold mb-2 text-slate-900">Enterprise</h3>
                          <p className="text-gray-500">For advisors & consultants.</p>
                      </div>
                      <div className="w-full h-px bg-gray-100 mb-8"></div>
                      <ul className="space-y-4 mb-10 flex-grow">
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-600">20-30% Share + Retainer</span>
                          </li>
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-600">Strategic Advisory Role</span>
                          </li>
                          <li className="flex items-start">
                              <Check className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-600">Priority Support</span>
                          </li>
                      </ul>
                      <Link href="/contact?subject=Enterprise" className="w-full py-4 text-center border-2 border-slate-100 hover:border-blue-600 hover:text-blue-700 rounded-lg font-bold transition-all text-slate-700">
                          Apply Enterprise
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* ⬜ PROCESS (Horizontal Steps) */}
      <section className="py-24 px-6 lg:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-medium mb-16 max-w-xl text-slate-900">How it works. <br /><span className="text-gray-400">Simple, transparent, fast.</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                   {/* Line Connector for Desktop */}
                   <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-200 -z-10"></div>
                   
                   {[
                       { step: "01", title: "Apply", desc: "Submit your details." },
                       { step: "02", title: "Review", desc: "We evaluate fit." },
                       { step: "03", title: "Access", desc: "Get the dashboard." },
                       { step: "04", title: "Grow", desc: "Close & earn." }
                   ].map((item, i) => (
                       <div key={i} className="bg-white pr-4 group">
                           <div className="w-16 h-16 bg-white border-2 border-gray-100 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors rounded-lg flex items-center justify-center text-xl font-bold mb-6 text-slate-900">
                               {item.step}
                           </div>
                           <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                           <p className="text-gray-500">{item.desc}</p>
                       </div>
                   ))}
              </div>
          </div>
      </section>

      {/* ⬛ CTA (Banner) */}
      <section className="py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-2xl p-12 md:p-24 text-center text-white relative overflow-hidden">
               <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-medium mb-8">Ready to start?</h2>
                   <Link href="/contact?subject=Partner Application" className="inline-block px-10 py-5 bg-emerald-600 text-white font-bold text-xl rounded-lg hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20">
                       Create Partner Account
                   </Link>
                   <p className="mt-8 text-slate-400 text-sm">No credit card required for application.</p>
               </div>
               
               {/* Decorative Circles */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-900 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl"></div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
