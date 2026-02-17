import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, BarChart, Globe } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 font-display">
              Build with specific <span className="text-emerald-600">purpose</span>.<br />
              Grow with <span className="text-blue-600">leverage</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the Leo Systems Partner Network. Earn generous commissions, access enterprise-grade resources, and deliver exceptional tech solutions to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/partner/signup" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-200"
              >
                Apply
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/partner/login" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-200"
              >
                Partner Login
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[600px] -z-0 opacity-30 pointer-events-none">
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-emerald-200 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-50px] right-[-100px] w-[400px] h-[400px] bg-blue-200 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <BarChart className="h-8 w-8 text-emerald-600" />,
                title: "Structured Commission",
                description: "Earn transparent, tiered commissions on every deal you register. Track everything in real-time."
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-600" />,
                title: "Global Reach",
                description: "Offer world-class tech solutions to clients anywhere. We handle the delivery; you own the relationship."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Enterprise Resources",
                description: "Access a library of white-label sales decks, case studies, and technical guides to close deals faster."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Partner Tiers</h2>
            <p className="text-lg text-slate-600">Grow your revenue as you scale your impact.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Referral */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-emerald-500 transition-colors duration-300">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 font-medium text-sm mb-6">Referral Partner</span>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-slate-900">10%</span>
                <span className="ml-2 text-slate-500">commission</span>
              </div>
              <p className="text-slate-600 mb-8 pb-8 border-b border-slate-100">For individuals and consultants referring occasional projects.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700">
                   <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> No minimum commit
                </li>
                <li className="flex items-center text-slate-700">
                   <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Basic resources
                </li>
              </ul>
            </div>

            {/* Agency */}
            <div className="p-8 rounded-3xl border-2 border-emerald-500 bg-white relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">Most Popular</div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-medium text-sm mb-6">Agency Partner</span>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-slate-900">15%</span>
                <span className="ml-2 text-slate-500">commission</span>
              </div>
              <p className="text-slate-600 mb-8 pb-8 border-b border-slate-100">For agencies integrating our services into their offering.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700">
                   <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Priority Support
                </li>
                <li className="flex items-center text-slate-700">
                   <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Co-branded materials
                </li>
                <li className="flex items-center text-slate-700">
                   <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Deal Registration
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-3xl border border-slate-200 bg-slate-900 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 font-medium text-sm mb-6">Enterprise</span>
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">20%</span>
                <span className="ml-2 text-slate-400">commission</span>
              </div>
              <p className="text-slate-400 mb-8 pb-8 border-b border-slate-800">For strategic alliances and high-volume connectors.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                   <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" /> Dedicated Account Manager
                </li>
                <li className="flex items-center text-slate-300">
                   <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" /> Custom Integrations
                </li>
                <li className="flex items-center text-slate-300">
                   <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" /> Joint Go-to-Market
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to scale?</h2>
          <p className="text-lg text-slate-600 mb-10">Join the network of professionals building the future with Leo Systems.</p>
          <Link 
            href="/partner/signup" 
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-200"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
