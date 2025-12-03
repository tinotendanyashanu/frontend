import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, FolderGit2, Shield, Zap, Globe, Database } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: "preciagro",
      title: "PreciAgro",
      category: "AI-powered agriculture system",
      whatItDoes: "Diagnoses crops, predicts yields, provides farming insights, and supports farmers using intelligent models.",
      impact: "Helped rural farmers make faster, smarter decisions.",
      icon: <Globe className="w-6 h-6 text-green-500" />,
      color: "bg-green-50 text-green-700 border-green-200"
    },
    {
      id: "sanganai-events",
      title: "Sanganai Events Platform",
      category: "Event management, ticketing, QR access, AI chat support",
      whatItDoes: "Handles everything from ticket sales to security to fraud detection.",
      impact: "Made event operations faster, safer, and more efficient.",
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      id: "blockchain-remittance",
      title: "Blockchain Remittance System",
      category: "Crypto backend, fiat frontend",
      whatItDoes: "Users send money like normal, but the backend uses blockchain for speed and low cost.",
      impact: "Enabled near-instant cross-border transfers.",
      icon: <Database className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "crm-automation",
      title: "CRM & Automation Systems",
      category: "Custom internal tools",
      whatItDoes: "Helps businesses manage leads, communication, tasks, and team operations.",
      impact: "Increased productivity and reduced chaos.",
      icon: <FolderGit2 className="w-6 h-6 text-orange-500" />,
      color: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      id: "security-tools",
      title: "Security Tools & Automation Scripts",
      category: "Cybersecurity utilities",
      whatItDoes: "Monitors systems, prevents weaknesses, and automates defensive tasks.",
      impact: "Stronger security, less manual effort.",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      color: "bg-red-50 text-red-700 border-red-200"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Things I’ve Built
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            I experiment a lot. Some projects become real products. Some stay as prototypes. All of them teach me something. Here are some of the builds I’m proud of.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link href={`/portfolio/${project.id}`} key={index} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl ${project.color} border`}>
                  {project.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wide">{project.category}</p>
              
              <div className="space-y-4 flex-grow">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">What It Does</h4>
                  <p className="text-slate-600 leading-relaxed">{project.whatItDoes}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Impact</h4>
                  <p className="text-slate-900 font-medium">{project.impact}</p>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Want something like this?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#4C8BFF] rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all duration-200">
            Let’s build it
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
