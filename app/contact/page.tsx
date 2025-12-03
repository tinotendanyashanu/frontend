import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Linkedin, Github, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Let’s Talk
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a project in mind? Want to collaborate? Need guidance? Or just want to discuss an idea? I’m open to it. I reply fast, and I’m easy to talk to.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">What do you want to build?</label>
                <input type="text" id="project" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none transition-all" placeholder="Web App, AI Tool, Automation..." />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Budget (optional)</label>
                  <select id="budget" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none transition-all">
                    <option value="">Select a range</option>
                    <option value="small">&lt; $1k</option>
                    <option value="medium">$1k - $5k</option>
                    <option value="large">$5k - $10k</option>
                    <option value="enterprise">$10k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">Timeline</label>
                  <select id="timeline" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none transition-all">
                    <option value="">When do you need it?</option>
                    <option value="asap">ASAP</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">1-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#4C8BFF] focus:ring-2 focus:ring-[#4C8BFF]/20 outline-none transition-all resize-none" placeholder="Tell me more about your project..."></textarea>
              </div>

              <button type="submit" className="w-full inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-[#4C8BFF] rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all duration-200">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>

            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-12 lg:pt-12">
            
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <a href="mailto:tinotendanyash@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-[#4C8BFF] transition-colors">
                    <Mail className="w-6 h-6 text-[#4C8BFF] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
                    <p className="text-lg text-slate-900 font-semibold">tinotendanyash@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
                    <p className="text-lg text-slate-900 font-semibold">Warsaw, Poland</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Socials</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white text-slate-400 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-black hover:border-black hover:text-white text-slate-400 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white text-slate-400 transition-all duration-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Before you message...</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">What is your typical budget range?</h3>
              <p className="text-slate-600">Most projects start at $5k. Small tools can be less, large platforms are more.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">How fast can you start?</h3>
              <p className="text-slate-600">I usually book 2-3 weeks in advance. Message me to check current availability.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
