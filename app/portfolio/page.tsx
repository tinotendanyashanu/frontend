'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, FolderGit2, Shield, Zap, Globe, Database, Code2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: "preciagro",
      title: "PreciAgro",
      category: "AI & Agriculture",
      whatItDoes: "Diagnoses crops, predicts yields, provides farming insights, and supports farmers using intelligent models.",
      impact: "Helped rural farmers make faster, smarter decisions.",
      icon: <Globe className="w-6 h-6 text-[#10B981]" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
      tags: ["Python", "TensorFlow", "React", "IoT"],
      featured: true
    },
    {
      id: "sanganai-events",
      title: "Sanganai Events",
      category: "Web Platform",
      whatItDoes: "Handles everything from ticket sales to security to fraud detection.",
      impact: "Made event operations faster, safer, and more efficient.",
      icon: <Zap className="w-6 h-6 text-[#0071e3]" />,
      color: "bg-blue-50 text-blue-700 border-blue-100",
      tags: ["Next.js", "Stripe", "PostgreSQL", "AI"],
      featured: true
    },
    {
      id: "blockchain-remittance",
      title: "Blockchain Remittance",
      category: "FinTech",
      whatItDoes: "Users send money like normal, but the backend uses blockchain for speed and low cost.",
      impact: "Enabled near-instant cross-border transfers.",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      color: "bg-indigo-50 text-indigo-700 border-indigo-100",
      tags: ["Solidity", "Node.js", "Web3.js", "React"]
    },
    {
      id: "crm-automation",
      title: "CRM & Automation",
      category: "Internal Tools",
      whatItDoes: "Helps businesses manage leads, communication, tasks, and team operations.",
      impact: "Increased productivity and reduced chaos.",
      icon: <FolderGit2 className="w-6 h-6 text-orange-500" />,
      color: "bg-orange-50 text-orange-700 border-orange-100",
      tags: ["Python", "Automation", "API Integration"]
    },
    {
      id: "security-tools",
      title: "Security Suite",
      category: "Cybersecurity",
      whatItDoes: "Monitors systems, prevents weaknesses, and automates defensive tasks.",
      impact: "Stronger security, less manual effort.",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      color: "bg-red-50 text-red-700 border-red-100",
      tags: ["Python", "Bash", "Network Security"]
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-30">
           <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Building ideas into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              digital reality.
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
            I experiment a lot. Some projects become real products. Some stay as prototypes. All of them teach me something. Here are some of the builds I’m proud of.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-md transform scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <h2 className="sr-only">Projects</h2>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Link href={`/portfolio/${project.id}`} className="group block h-full">
                  <div className="h-full bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col relative overflow-hidden">
                    
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3.5 rounded-2xl ${project.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                          {project.icon}
                        </div>
                        <div className="p-2 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
                          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{project.category}</p>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                        {project.whatItDoes}
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-slate-100">
                          <p className="text-sm text-slate-500">
                            <span className="font-semibold text-slate-900">Impact:</span> {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether it&apos;s an AI solution, a web platform, or a custom automation tool, I&apos;m ready to help you build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start a Conversation
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 border border-slate-200 bg-white rounded-full hover:bg-slate-50 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
