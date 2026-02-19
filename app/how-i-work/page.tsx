'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Box, Layers, Zap, Compass, BarChart } from 'lucide-react';

export default function EngagementModels() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section — Full-width image panel below headline */}
      <section className="pt-32 pb-0 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&q=85&auto=format&fit=crop"
            alt="Structured technology engagement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
          <div className="absolute inset-0 flex items-end p-10">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.05]">
              Precision-built systems. Structured execution. Long-term results.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mt-10">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
            How I Work
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-normal mb-10 max-w-3xl">
            Technology should create clarity, efficiency, and long-term growth. Every engagement is structured around measurable business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0071e3] rounded-full hover:bg-[#0077ED] transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="#models" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300"
            >
              Explore Engagement Models
            </a>
          </div>
        </div>

        {/* Hero Image Banner */}

      </section>

      {/* Engagement Models Container */}
      <div id="models" className="bg-slate-50/50 border-t border-slate-100 mt-16">
        
        {/* Section 1: Defined Projects */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Box className="w-8 h-8 text-[#0071e3]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Structured Projects With Clear Outcomes</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                For businesses that need a specific system designed and built with a defined goal and timeline. 
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">Automating internal operations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">Launching a new digital platform</span>
                </li>
                 <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">Building a scalable online system</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-[#0071e3] rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">Modernizing how a company operates</span>
                </li>
              </ul>
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
                 <h4 className="font-semibold text-slate-900 mb-2">How it works</h4>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Each project begins with clarity — defining what needs to be built, why it matters, and what success looks like. We establish a clear scope, defined deliverables, and structured milestones.
                 </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Project image */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop"
                  alt="Project planning and execution"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20" />
              </div>
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm flex flex-col justify-center">
                 <div className="space-y-8">
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 mb-3">01. Discovery & Definition</h3>
                     <p className="text-slate-600">We map out exactly what success looks like and the technical requirements to get there.</p>
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold text-slate-900 mb-3">02. Design & Architecture</h3>
                     <p className="text-slate-600">Constructing the blueprint before writing a single line of code to ensure scalability.</p>
                   </div>
                    <div>
                     <h3 className="text-xl font-semibold text-slate-900 mb-3">03. Build & Implementation</h3>
                     <p className="text-slate-600">Executing the plan with clean, maintainable code and regular progress updates.</p>
                   </div>
                    <div>
                     <h3 className="text-xl font-semibold text-slate-900 mb-3">04. Launch & Handoff</h3>
                     <p className="text-slate-600">Deploying the system and ensuring your team is ready to own it.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Ongoing Technology Partnership */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-slate-100">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 space-y-6">
               {/* Partnership image */}
               <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-md">
                 <Image
                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop"
                   alt="Long-term technology partnership"
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-amber-900/20" />
               </div>
               <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-sm">
                         <Zap className="w-6 h-6 text-amber-500 mb-3" />
                         <h4 className="font-semibold text-slate-900 mb-1">Continuous Improvement</h4>
                         <p className="text-sm text-slate-600">Iterative enhancements to keep systems efficient.</p>
                      </div>
                      <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-sm">
                         <BarChart className="w-6 h-6 text-emerald-500 mb-3" />
                         <h4 className="font-semibold text-slate-900 mb-1">Performance Evolution</h4>
                         <p className="text-sm text-slate-600">Optimizing for speed, scale, and reliability.</p>
                      </div>
                       <div className="bg-white p-5 rounded-xl border border-slate-200/50 shadow-sm sm:col-span-2">
                         <Layers className="w-6 h-6 text-purple-500 mb-3" />
                         <h4 className="font-semibold text-slate-900 mb-1">Long-Term System Strength</h4>
                         <p className="text-sm text-slate-600">Proactive architecture updates to support business growth.</p>
                      </div>
                  </div>
               </div>
             </div>
             <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                  <Zap className="w-8 h-8 text-amber-500" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Ongoing Technology Partnership</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  For organizations that see technology as a long-term advantage, not a one-time fix. This is a committed partnership focused on strengthening systems over time.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We move beyond &quot;maintenance&quot; into true strategic growth, ensuring your technology evolves as your business does.
                </p>
                <Link href="/contact" className="text-[#0071e3] font-medium hover:text-[#0077ED] inline-flex items-center">
                  Discuss a partnership <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
             </div>
           </div>
        </section>

        {/* Section 3: Strategic Direction */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Compass className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Strategic Technology Direction</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                For founders and business leaders who need clarity before building. This model focuses on reducing costly mistakes by designing before execution.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
               <div className="relative h-44 overflow-hidden">
                 <Image
                   src="https://images.unsplash.com/photo-1558403194-611308249627?w=600&q=80&auto=format&fit=crop"
                   alt="Architecture Planning"
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-blue-900/30" />
               </div>
               <div className="p-8">
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Architecture Planning</h3>
                 <p className="text-slate-600">Designing the technical foundation for scalable platforms and internal systems.</p>
               </div>
             </div>
             <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
               <div className="relative h-44 overflow-hidden">
                 <Image
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop"
                   alt="Growth Preparation"
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-emerald-900/30" />
               </div>
               <div className="p-8">
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Growth Preparation</h3>
                 <p className="text-slate-600">Evaluating current systems and preparing infrastructure for business scaling.</p>
               </div>
             </div>
             <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
               <div className="relative h-44 overflow-hidden">
                 <Image
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
                   alt="Technology Evaluation"
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-purple-900/30" />
               </div>
               <div className="p-8">
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Technology Evaluation</h3>
                 <p className="text-slate-600">Unbiased assessment of tools, platforms, and build-vs-buy decisions.</p>
               </div>
             </div>
          </div>
        </section>

        {/* Section 4: Complex Initiatives — with background image */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900 rounded-3xl text-white overflow-hidden relative">
           {/* Background image */}
           <div className="absolute inset-0 z-0">
             <Image
               src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=70&auto=format&fit=crop"
               alt="Multi-phase initiative"
               fill
               className="object-cover opacity-20"
             />
           </div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
           <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Multi-Phase Initiatives</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                For organizations undertaking larger transformations. Designed for those ready to operate at a higher level, involving discovery, structured blueprinting, phased implementation, and ongoing optimization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                    <span className="font-medium">Discovery & Assessment</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
                    <span className="font-medium">Structured Blueprint</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">3</div>
                    <span className="font-medium">Phased Implementation</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">4</div>
                    <span className="font-medium">Ongoing Optimization</span>
                 </div>
              </div>
           </div>
        </section>
        
        {/* Section 5: Investment & Value */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Investment & Value</h2>
            <div className="max-w-3xl mx-auto">
               <p className="text-xl text-slate-600 leading-relaxed mb-8">
                 Technology is positioned as an investment in operational strength and long-term growth. Every engagement is custom-shaped by scope, complexity, timeline, and strategic importance.
               </p>
               <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0071e3] rounded-full hover:bg-[#0077ED] transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Start a Conversation
                </Link>
            </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
