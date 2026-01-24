"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BrainCircuit, Code2, ShieldCheck, Lightbulb, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Simple hook for intersection observer animations
function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Services() {
  const services = [
    {
      id: "ai-automation",
      title: "AI & Intelligent Automation",
      subtitle: "Smarter Systems, Less Work",
      description: "I build AI tools that automate tasks, analyze data, and bring intelligence into everyday operations. From prediction engines to chatbots to custom models, if it’s powered by AI, I’m interested.",
      offerings: [
        "Custom LLM Integration (GPT-4, Claude)",
        "Automated Workflows & Agents",
        "Predictive Analytics Engines",
        "Intelligent Chatbots & Support Systems",
        "Computer Vision Solutions"
      ],
      outcome: "Systems that think, learn, and save you 20+ hours a week.",
      cta: "Automate Your Business",
      icon: <BrainCircuit className="w-8 h-8 text-[#10B981]" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
      border: "border-[#10B981]/20",
      lightBg: "bg-emerald-50"
    },
    {
      id: "software-dev",
      title: "Full-Stack Engineering",
      subtitle: "Clean, Modern Software Built With Care",
      description: "I build applications that feel smooth, work fast, and scale. Whether it's a platform, dashboard, API, or full system, I make sure it’s elegant, efficient, and future-ready.",
      offerings: [
        "High-Performance Web Apps (Next.js)",
        "Scalable SaaS Platforms",
        "Custom API Development",
        "Real-time Dashboards",
        "Complex System Architecture"
      ],
      outcome: "Technology that actually works, and works beautifully.",
      cta: "Start Building",
      icon: <Code2 className="w-8 h-8 text-[#4C8BFF]" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
      color: "text-[#4C8BFF]",
      bg: "bg-[#4C8BFF]/10",
      border: "border-[#4C8BFF]/20",
      lightBg: "bg-blue-50"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Defense",
      subtitle: "Protect What Matters",
      description: "I break things to understand them, then secure them so nobody else can break them. I help founders keep their systems safe from day one.",
      offerings: [
        "Vulnerability Assessments",
        "Secure Architecture Design",
        "Penetration Testing",
        "Security Automation",
        "Compliance & Best Practices"
      ],
      outcome: "Peace of mind knowing your product is bulletproof.",
      cta: "Secure Your System",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      lightBg: "bg-emerald-50"
    },
    {
      id: "mentorship",
      title: "Tech Mentorship & Strategy",
      subtitle: "Helping You Build Something Real",
      description: "If you have an idea but don’t know how to execute it, I’ll help you plan it, break it down, and turn it into a working product.",
      offerings: [
        "Technical Roadmap Planning",
        "MVP Strategy & Scope",
        "Code Reviews & Guidance",
        "CTO-as-a-Service",
        "Hiring & Team Building Support"
      ],
      outcome: "Clarity, confidence, and a real path forward.",
      cta: "Get Expert Guidance",
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2940&auto=format&fit=crop",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      lightBg: "bg-amber-50"
    }
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-blue-500/30">
      <Navbar />
      {/* Hero Section - Dark to match Home Page Hero */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6 lg:px-8 overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Tech Background" 
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-300 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Premium Engineering Services</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              I build technology that <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4C8BFF] to-[#10B981]">drives real growth.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-2xl mb-12">
              Stop wrestling with technical debt and complex integrations. I deliver world-class engineering solutions that scale with your ambition.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#4C8BFF] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#services" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 backdrop-blur-md transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
        
        {/* Curve Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section id="services" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className="w-full lg:w-1/2 relative group">
              <FadeIn delay={200}>
                <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl shadow-slate-200 border border-slate-100">
                  <div className={`absolute inset-0 bg-linear-to-br ${service.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Icon Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-2xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${service.lightBg} border border-slate-100 ${service.color}`}>
                        {service.icon}
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Outcome</p>
                        <p className="text-slate-900 font-semibold text-sm sm:text-base">{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${service.lightBg} border border-slate-200 text-sm font-medium ${service.color} mb-6`}>
                  {service.icon}
                  <span>{service.title}</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {service.subtitle}
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.offerings.map((item, i) => (
                    <div key={i} className="flex items-center text-slate-700 group/item">
                      <CheckCircle2 className={`w-5 h-5 mr-4 ${service.color} opacity-70 group-hover/item:opacity-100 transition-opacity`} />
                      <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href={`/services/${service.id}`} className={`group inline-flex items-center text-lg font-semibold ${service.color} hover:opacity-80 transition-opacity`}>
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center text-lg font-semibold text-slate-500 hover:text-slate-700 transition-colors">
                    {service.cta}
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">How We Win Together</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">No fluff, no hidden fees, just a straight line to results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We dig deep into your problem. I don't write a single line of code until we know exactly what success looks like." },
              { step: "02", title: "Agile Development", desc: "I build in rapid sprints. You see progress every week, not just at the end. We iterate based on real feedback." },
              { step: "03", title: "Launch & Scale", desc: "I handle the deployment, security, and optimization. You get a product that's ready for the real world." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="text-6xl font-bold text-slate-100 mb-6 group-hover:text-blue-50 transition-colors">{item.step}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to build something <br />
              <span className="text-[#4C8BFF]">extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              My schedule fills up fast. If you&apos;re serious about your project, let&apos;s talk and see if we&apos;re a good fit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-white bg-[#4C8BFF] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              <Link href="/portfolio" className="inline-flex justify-center items-center px-10 py-5 text-lg font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full hover:bg-slate-200 transition-all duration-300">
                View My Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
