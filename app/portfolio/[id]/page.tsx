import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or database
const projects = [
  {
    id: "preciagro",
    title: "PreciAgro",
    category: "AI-powered agriculture system",
    heroImage: "bg-green-600", // Placeholder for real image
    description: "Diagnoses crops, predicts yields, provides farming insights, and supports farmers using intelligent models.",
    challenge: "Rural farmers lack access to real-time agricultural expertise, leading to crop loss and inefficient resource usage.",
    solution: "We built an AI-driven mobile platform that allows farmers to scan crops for diseases, get weather-based advice, and optimize fertilizer usage.",
    techStack: ["React Native", "TensorFlow Lite", "Node.js", "MongoDB"],
    outcome: "Helped 500+ farmers increase yield by 30% in the first season.",
    features: [
      "Offline-first architecture for remote areas",
      "Real-time disease detection via camera",
      "Localized voice support for accessibility",
      "Market price integration"
    ]
  },
  {
    id: "sanganai-events",
    title: "Sanganai Events Platform",
    category: "Event management, ticketing, QR access",
    heroImage: "bg-purple-600",
    description: "Handles everything from ticket sales to security to fraud detection.",
    challenge: "Existing event platforms were expensive and lacked robust fraud prevention for local markets.",
    solution: "A comprehensive event management suite with secure QR ticketing, real-time analytics, and AI-powered support chat.",
    techStack: ["Next.js", "PostgreSQL", "Stripe Connect", "Redis"],
    outcome: "Processed over $100k in ticket sales with zero reported fraud incidents.",
    features: [
      "Dynamic QR code generation",
      "Real-time attendance tracking",
      "Automated payouts to organizers",
      "AI chatbot for attendee queries"
    ]
  },
  {
    id: "blockchain-remittance",
    title: "Blockchain Remittance System",
    category: "FinTech / Web3",
    heroImage: "bg-blue-600",
    description: "Users send money like normal, but the backend uses blockchain for speed and low cost.",
    challenge: "Cross-border transfers were slow (3-5 days) and expensive (7-10% fees).",
    solution: "A hybrid fiat-crypto bridge that settles transactions on the blockchain while keeping the user experience purely fiat.",
    techStack: ["Solidity", "React", "Node.js", "Web3.js"],
    outcome: "Reduced transaction fees to <1% and settlement time to seconds.",
    features: [
      "Instant settlement",
      "KYC/AML compliance integration",
      "Multi-currency support",
      "Transparent audit trail"
    ]
  },
  {
    id: "crm-automation",
    title: "CRM & Automation Systems",
    category: "Internal Tools",
    heroImage: "bg-orange-600",
    description: "Helps businesses manage leads, communication, tasks, and team operations.",
    challenge: "The client was drowning in spreadsheets and manual data entry, missing leads and delaying follow-ups.",
    solution: "A custom CRM tailored to their specific workflow, with automated email sequences and task assignment.",
    techStack: ["Vue.js", "Firebase", "Zapier", "SendGrid"],
    outcome: "Increased lead conversion by 40% and saved the team 15 hours/week.",
    features: [
      "Drag-and-drop pipeline",
      "Automated email sequences",
      "Team performance analytics",
      "Calendar integration"
    ]
  },
  {
    id: "security-tools",
    title: "Security Tools & Automation",
    category: "Cybersecurity",
    heroImage: "bg-red-600",
    description: "Monitors systems, prevents weaknesses, and automates defensive tasks.",
    challenge: "Manual security audits were too infrequent to catch rapidly evolving threats.",
    solution: "A suite of automated scripts and monitoring tools that continuously scan for vulnerabilities and suspicious activity.",
    techStack: ["Python", "Bash", "Docker", "Elasticsearch"],
    outcome: "Detected and blocked 99.9% of automated attacks in real-time.",
    features: [
      "Automated vulnerability scanning",
      "Real-time intrusion detection",
      "Log analysis and alerting",
      "Automated patch management"
    ]
  }
];

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = React.use(props.params);
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto`}>
        <div className="mb-8">
            <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#4C8BFF] transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
            </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                    {project.title}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className={`aspect-video rounded-2xl ${project.heroImage} flex items-center justify-center shadow-2xl`}>
                <span className="text-white/50 text-2xl font-bold">Project Screenshot / Demo</span>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                    <p className="text-slate-600 leading-relaxed">
                        {project.challenge}
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h2>
                    <p className="text-slate-600 leading-relaxed">
                        {project.solution}
                    </p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#4C8BFF] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Outcome</h2>
                <p className="text-xl text-slate-600 mb-12">
                    {project.outcome}
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#4C8BFF] rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all duration-200">
                    Start a Project Like This
                    <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
            </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
