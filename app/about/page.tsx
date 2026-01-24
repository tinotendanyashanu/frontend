'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Heart, Briefcase, Zap, Terminal, Cpu, Globe, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Coffee Consumed", value: "∞" }
  ];

  const skills = [
    "React & Next.js", "TypeScript", "Node.js", "Python", "AI & ML", "Cybersecurity", "Cloud Architecture", "UI/UX Design"
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-30">
           <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
              <User className="w-4 h-4" />
              <span>Who I Am</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Technologist, Builder, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Problem Solver.
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-normal max-w-lg">
              I&apos;m Leo The Tech Guy. I don&apos;t just write code; I build solutions. From AI systems to secure web platforms, I&apos;m obsessed with using technology to solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
              <Image 
                src="/images/Leo's Portrait.png" 
                alt="Leo The Tech Guy" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full blur-2xl opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 py-12">
          {stats.map((stat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="text-center"
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Story & Timeline */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* My Story */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Story So Far</h2>
              <p className="text-slate-600 leading-relaxed">
                LeoTheTechGuy is a technologist driven by one core principle: technology must work in the real world.
                Rather than chasing trends or titles, he focuses on understanding problems deeply and building systems designed to last. His work is rooted in execution turning ideas into reliable, scalable digital solutions.
              </p>
              <p className="text-slate-600 leading-relaxed mt-6">
                From early concepts to production-ready platforms, LeoTheTechGuy approaches every project with intention, precision, and a long-term mindset. The goal is never just to build something impressive, but something that performs under real conditions and continues to deliver value as it grows.
              </p>
              <p className="text-slate-600 leading-relaxed mt-6">
                He represents a new generation of builders adaptable, disciplined, and not limited by tools, technologies, or trends. Just continuous learning, thoughtful engineering, and results that speak for themselves.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="pt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-10">My Journey</h3>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200">
                    {[
                    { year: "2015", title: "The Beginning", desc: "Wrote my first lines of code. Built simple web apps and fell in love with the logic and creativity of programming.", icon: <Terminal className="w-5 h-5 text-white" /> },
                    { year: "2020", title: "Freelancing & Startups", desc: "Started working with early-stage founders. Learned how to translate business requirements into technical reality.", icon: <Briefcase className="w-5 h-5 text-white" /> },
                    { year: "2022", title: "Deep Tech Focus", desc: "Dove deep into AI, Machine Learning, and Cybersecurity. Realized that the future belongs to intelligent, secure systems.", icon: <Cpu className="w-5 h-5 text-white" /> },
                    { year: "Present", title: "Leo The Tech Guy", desc: "Now I help businesses and founders build world-class technology, scaling products from zero to one and beyond.", icon: <Globe className="w-5 h-5 text-white" /> }
                    ].map((item, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="relative flex items-start group"
                    >
                        <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-900 shadow-md z-10">
                            {item.icon}
                        </div>
                        <div className="ml-16 pt-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mt-2 sm:mt-0">{item.year}</span>
                            </div>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Column: Philosophy & Skills */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Philosophy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Core Values</h2>
              </div>
              <div className="space-y-4">
                {[
                  "Technology should simplify, not complicate.",
                  "Clean code is a sign of a clear mind.",
                  "Curiosity is the engine of innovation.",
                  "Always leave the codebase better than you found it.",
                  "Impact over output."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <p className="text-slate-700 font-medium leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Tech Arsenal</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden"
            >
               <h3 className="text-xl font-bold text-blue-900 mb-4 relative z-10">Let&apos;s Connect</h3>
               <p className="text-blue-700 mb-6 relative z-10">
                 I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
               </p>
               <Link href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 relative z-10">
                 Get in Touch
               </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            From concept to deployment, I&apos;m here to help you build technology that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Work With Me
              <Award className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 border border-slate-200 bg-white rounded-full hover:bg-slate-50 transition-all duration-300"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
