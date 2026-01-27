"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Prism from '@/components/Prism';
import { BrainCircuit, Code2, ShieldCheck, Lightbulb, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Service data
const services = [
  {
    id: "ai-automation",
    title: "AI & Intelligent Automation",
    headline: "Smarter Systems.",
    subheadline: "Less Work.",
    description: "Transform your operations with AI that actually works. From prediction engines to intelligent chatbots, I build systems that think, learn, and save you time.",
    offerings: [
      "Custom LLM Integration (GPT-4, Claude)",
      "Automated Workflows & Agents",
      "Predictive Analytics Engines",
      "Intelligent Chatbots & Support",
      "Computer Vision Solutions"
    ],
    outcome: "Save 20+ hours per week",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    accentColor: "#10B981",
    lightBg: "bg-emerald-50"
  },
  {
    id: "software-dev",
    title: "Full-Stack Engineering",
    headline: "Beautiful Code.",
    subheadline: "Scalable Systems.",
    description: "I build applications that feel smooth, work fast, and grow with you. From platforms to dashboards to APIs—elegant, efficient, future-ready.",
    offerings: [
      "High-Performance Web Apps (Next.js)",
      "Scalable SaaS Platforms",
      "Custom API Development",
      "Real-time Dashboards",
      "Complex System Architecture"
    ],
    outcome: "Ship faster, scale easier",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    gradient: "from-blue-500/20 via-transparent to-transparent",
    accentColor: "#4C8BFF",
    lightBg: "bg-blue-50"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Defense",
    headline: "Protect Everything.",
    subheadline: "Trust Nothing.",
    description: "I break systems to understand them, then secure them so nobody else can. Enterprise-grade security from day one.",
    offerings: [
      "Vulnerability Assessments",
      "Secure Architecture Design",
      "Penetration Testing",
      "Security Automation",
      "Compliance & Best Practices"
    ],
    outcome: "Peace of mind, bulletproof systems",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    accentColor: "#10B981",
    lightBg: "bg-emerald-50"
  },
  {
    id: "mentorship",
    title: "Tech Mentorship & Strategy",
    headline: "Build Smarter.",
    subheadline: "Move Faster.",
    description: "Got an idea but not sure how to execute? I'll help you plan it, break it down, and turn it into a real product.",
    offerings: [
      "Technical Roadmap Planning",
      "MVP Strategy & Scope",
      "Code Reviews & Guidance",
      "CTO-as-a-Service",
      "Hiring & Team Building"
    ],
    outcome: "Clarity and a path forward",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2940&auto=format&fit=crop",
    gradient: "from-amber-500/20 via-transparent to-transparent",
    accentColor: "#F59E0B",
    lightBg: "bg-amber-50"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }
  }
};

// Service Section Component
const ServiceSection = React.memo(function ServiceSection({ service, index }: { service: typeof services[0], index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const IconComponent = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={sectionRef}
      id={service.id}
      className="relative min-h-screen flex items-center py-24 lg:py-32 overflow-hidden content-visibility-auto"
    >
      {/* Background gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 shadow-2xl will-change-transform`}
        style={{ 
          background: `radial-gradient(ellipse at ${isEven ? '20%' : '80%'} 50%, ${service.accentColor}15, transparent 60%)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
          
          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Service badge */}
            <motion.div variants={fadeInUp}>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium"
                style={{ 
                  backgroundColor: `${service.accentColor}10`,
                  borderColor: `${service.accentColor}30`,
                  color: service.accentColor
                }}
              >
                <IconComponent className="w-4 h-4" />
                <span>{service.title}</span>
              </div>
            </motion.div>

            {/* Headlines */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                {service.headline}<br />
                <span style={{ color: service.accentColor }}>{service.subheadline}</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-slate-600 leading-relaxed max-w-xl"
            >
              {service.description}
            </motion.p>

            {/* Offerings */}
            <motion.div variants={fadeInUp} className="space-y-3">
              {service.offerings.slice(0, 4).map((offering, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 
                    className="w-5 h-5 shrink-0" 
                    style={{ color: service.accentColor }}
                  />
                  <span className="text-lg">{offering}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Link 
                href={`/services/${service.id}`}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: service.accentColor }}
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 will-change-transform"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleIn}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              {/* Glow effect */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl will-change-opacity"
                style={{ backgroundColor: `${service.accentColor}20` }}
              />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200/50 shadow-2xl">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Floating outcome card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-5 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg will-change-transform">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Expected Outcome</p>
                        <p className="text-lg font-bold text-slate-900">{service.outcome}</p>
                      </div>
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${service.accentColor}15` }}
                      >
                        <IconComponent className="w-6 h-6" style={{ color: service.accentColor }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

// Sticky Navigation Dots
function ServiceNav({ activeIndex }: { activeIndex: number }) {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
      {services.map((service, i) => (
        <Link
          key={service.id}
          href={`#${service.id}`}
          className="group flex items-center gap-3"
        >
          <div 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === i 
                ? 'scale-125' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            style={activeIndex === i ? { backgroundColor: service.accentColor } : {}}
          />
          <span 
            className={`text-sm font-medium transition-all duration-300 ${
              activeIndex === i 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
            }`}
            style={activeIndex === i ? { color: service.accentColor } : { color: '#64748b' }}
          >
            {service.title.split(' ')[0]}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export default function Services() {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  // Track active section based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = services.findIndex(s => s.id === entry.target.id);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );
    
    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white selection:bg-blue-500/30">
      <Navbar />
      
      {/* Sticky Navigation */}
      <ServiceNav activeIndex={activeSection} />

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900"
        style={{ opacity: heroOpacity }}
        suppressHydrationWarning
      >
        {/* Prism Background Effect */}
        <div className="absolute inset-0 z-0 opacity-60">
           <Prism
             animationType="hover"
             timeScale={0.3}
             height={3.5}
             baseWidth={5.5}
             scale={3.6}
             hueShift={3.2} // Tuned for Blue/Cyan spectrum (approx PI radians)
             colorFrequency={0.5}
             noise={0.1}
             glow={0.8}
             suspendWhenOffscreen={true}
           />
        </div>

        {/* Animated gradient background overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-slate-900" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
              Technology that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C8BFF] to-[#10B981]">
                drives growth.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Premium engineering services for founders and businesses who demand excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold text-white bg-[#4C8BFF] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="#ai-automation" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 backdrop-blur-md transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Process Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">How We Win Together</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A proven process. No surprises. Just results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery", 
                desc: "We dig deep into your problem. I don't write code until we know exactly what success looks like.",
                color: "#4C8BFF"
              },
              { 
                step: "02", 
                title: "Build", 
                desc: "Rapid sprints with weekly progress. You see results every week, not just at the end.",
                color: "#10B981"
              },
              { 
                step: "03", 
                title: "Launch", 
                desc: "Deployment, security, optimization. A product ready for the real world.",
                color: "#F59E0B"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-10 rounded-3xl bg-white border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div 
                  className="text-7xl font-bold mb-6 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to build something<br />
              <span className="text-[#4C8BFF]">extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Let's talk about your project and see if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-white bg-[#4C8BFF] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Book a Free Strategy Call
                <ArrowUpRight className="ml-2 w-6 h-6" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex justify-center items-center px-10 py-5 text-lg font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full hover:bg-slate-200 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
