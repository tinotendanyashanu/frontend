"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Service, getServiceIcon } from '@/data/services';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown } from 'lucide-react';

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

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function ServiceDetailClient({ service }: { service: Service }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const IconComponent = getServiceIcon(service.icon);

  return (
    <main className="min-h-screen bg-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 px-6 lg:px-8 overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </FadeIn>

          <FadeIn delay={100}>
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${service.lightBg} border border-white/20 text-sm font-medium ${service.color} mb-8`}>
              <IconComponent className="w-5 h-5" />
              <span>{service.title}</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
              {service.subtitle}
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mb-12">
              {service.longDescription}
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-[#4C8BFF] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1">
                {service.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/book" className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 backdrop-blur-md transition-all duration-300">
                Book a Call
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

      {/* What's Included */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">What&apos;s Included</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to {service.outcome.toLowerCase()}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.offerings.map((offering, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className={`p-6 rounded-2xl border ${service.border} ${service.bg} hover:shadow-lg transition-all duration-300 h-full`}>
                  <CheckCircle2 className={`w-6 h-6 ${service.color} mb-4`} />
                  <p className="font-semibold text-slate-900">{offering}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Why This Matters</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The real impact this service brings to your business
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl ${service.lightBg} ${service.color} flex items-center justify-center mb-6`}>
                    <span className="text-xl font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">How It Works</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A clear, proven process from start to finish
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative">
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2" />
                  )}
                  <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className={`text-5xl font-bold ${service.color} opacity-30 mb-4`}>{step.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      {service.technologies && (
        <section className="py-24 px-6 lg:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Tools & Technologies</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  The technologies I use to deliver results
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                {service.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Common Questions</h2>
              <p className="text-xl text-slate-600">
                Got questions? I&apos;ve got answers.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === i}
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to get started with <br />
              <span className={service.color}>{service.title}?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold text-white bg-[#4C8BFF] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1">
                Start Your Project
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
              <Link href="/services" className="inline-flex justify-center items-center px-10 py-5 text-lg font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition-all duration-300">
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
