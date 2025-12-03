import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PhysicsZone from '@/components/PhysicsZone';
import { ArrowRight, Code2, BrainCircuit, ShieldCheck, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <PhysicsZone />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pointer-events-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C8BFF] to-[#A26BFA]">Leo The Tech Guy.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 font-light">
              I’m just a normal guy obsessed with technology. I build software, explore AI, test gadgets, break things, fix them, and share the journey with you. I create real products, solve real problems, and help people turn ideas into powerful tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-[#4C8BFF] rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all duration-200">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all duration-200">
                See My Work
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400">AI</div>
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400">Dev</div>
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400">Sec</div>
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Real tech, real builds, real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">Trusted by innovators and teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             <div className="text-xl font-bold text-slate-400">ACME Corp</div>
             <div className="text-xl font-bold text-slate-400">TechFlow</div>
             <div className="text-xl font-bold text-slate-400">InnovateX</div>
             <div className="text-xl font-bold text-slate-400">FutureScale</div>
             <div className="text-xl font-bold text-slate-400">DataMind</div>
          </div>
        </div>
      </section>

      {/* Mini Intro */}
      <section className="relative z-10 py-20 bg-slate-50/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-3xl text-slate-800 leading-relaxed font-light">
            I’m a tech geek at heart. I dive into <span className="font-semibold text-[#A26BFA]">AI</span>, <span className="font-semibold text-[#4C8BFF]">software engineering</span>, <span className="font-semibold text-emerald-500">cybersecurity</span>, automation, and anything that sparks curiosity. I also build startups and tackle problems I believe technology can solve. If you’re into building, learning, and creating cool things, welcome.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "AI & Automation",
              desc: "I build smart systems that automate work, save time, and power businesses.",
              icon: <BrainCircuit className="w-8 h-8 text-[#A26BFA]" />
            },
            {
              title: "Software Development",
              desc: "Clean, modern, scalable applications built with care.",
              icon: <Code2 className="w-8 h-8 text-[#4C8BFF]" />
            },
            {
              title: "Cybersecurity",
              desc: "Security breakdowns, best practices, and helping founders protect what matters.",
              icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />
            },
            {
              title: "Tech Mentorship",
              desc: "Guiding creators and founders who want to build something meaningful.",
              icon: <Lightbulb className="w-8 h-8 text-amber-500" />
            }
          ].map((service, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4 p-3 bg-slate-50 rounded-xl w-max group-hover:bg-blue-50 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{service.desc}</p>
              <Link href="/services" className="text-sm font-medium text-[#4C8BFF] hover:text-blue-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How I Work</h2>
            <p className="text-lg text-slate-600">Simple, transparent, and focused on results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>
            
            {[
              { step: "01", title: "Discovery Call", desc: "We discuss your idea, goals, and feasibility. No pressure, just clarity." },
              { step: "02", title: "Plan & Proposal", desc: "I create a technical roadmap and a clear proposal with timeline and budget." },
              { step: "03", title: "Build & Deliver", desc: "I build your product with regular updates, then launch it to the world." }
            ].map((item, i) => (
              <div key={i} className="text-center bg-white">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-3xl font-bold text-slate-300">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-all duration-200">
              Book a 15-minute call
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Teaser */}
      <section className="relative z-10 py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/background/bg-particles.json')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            I’ve built AI systems, event platforms, blockchain remittance tools, CRMs, and automation systems from scratch.
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Every project starts with curiosity and ends with something real.
          </p>
          <Link href="/portfolio" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all duration-200">
            Explore My Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#4C8BFF]/10 to-[#A26BFA]/10 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-blue-100">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Validate your AI idea before building.</h2>
            <p className="text-lg text-slate-600 mb-8">
              Don&apos;t waste time and money on the wrong features. Get my free 10-point checklist to see if your project is ready for AI.
            </p>
            <ul className="space-y-3 mb-8">
              {['Save thousands in dev costs', 'Identify technical risks early', 'Clarify your MVP scope'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            <form className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 rounded-lg border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none" />
              <button className="px-6 py-3 bg-[#4C8BFF] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap">
                Get the Checklist
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* Placeholder for Lead Magnet Image */}
            <div className="w-64 h-80 bg-white shadow-2xl rounded-lg border border-slate-100 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-slate-400 font-medium">PDF Mockup</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative z-10 py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden relative">
               {/* Placeholder for an image or graphic */}
               <span className="text-slate-400 font-medium z-10">Leo&apos;s Portrait</span>
               {/* <Image src="/images/about/leo-portrait.jpg" alt="Leo" fill className="object-cover" /> */}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              I’m not trying to be perfect or pretend to be someone I’m not.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              I learn, experiment, build, break, fix, and share. I use technology to solve problems and help people turn ideas into real products.
            </p>
            <Link href="/about" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-[#4C8BFF] bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-200">
              About Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Call-to-Action */}
      <section className="relative z-10 py-24 bg-[#4C8BFF] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to build something?</h2>
          <p className="text-xl text-blue-100 mb-10">Let’s create something meaningful.</p>
          <Link href="/contact" className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-[#4C8BFF] bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Work With Me
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
