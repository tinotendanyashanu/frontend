'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { completeOnboarding } from '@/lib/actions/partner'; 

const standardSteps = [
  {
    title: "Welcome to your Partner Dashboard",
    description: "This is your command center. Track your referrals, earnings, and progress all in one place.",
    target: "/partner/dashboard", 
  },
  {
    title: "Track Your Deals",
    description: "Register new leads and monitor their status in real-time under the 'Recent Deals' section.",
    target: "/partner/dashboard/deals", 
  },
  {
    title: "Partner Academy",
    description: "Level up your skills and unlock higher commission tiers by completing courses in the Academy.",
    target: "/partner/dashboard/academy",
  },
  {
    title: "Commission & Payouts",
    description: "View your earnings breakdown and payout history in the Earnings tab.",
    target: "/partner/dashboard/earnings",
  }
];

const creatorSteps = [
  {
    title: "Welcome Content Creator",
    description: "Your dashboard is optimized for content-driven growth. Track clicks, leads, and commissions.",
    target: "/partner/dashboard", 
  },
  {
    title: "Get Your Link",
    description: "Copy your unique referral link from the Overview page and start sharing it with your audience.",
    target: "/partner/dashboard", 
  },
  {
    title: "Track Leads",
    description: "See exactly who signed up through your link in the Leads tab.",
    target: "/partner/dashboard/leads", 
  },
  {
    title: "Academy & Resources",
    description: "Learn how to optimize your content for conversion in our Creator Academy.",
    target: "/partner/dashboard/academy", 
  }
];

export default function OnboardingTour({ userHasCompleted, partnerType = 'standard' }: { userHasCompleted: boolean, partnerType?: 'standard' | 'creator' }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  const steps = partnerType === 'creator' ? creatorSteps : standardSteps;

  useEffect(() => {
    setMounted(true);
    if (userHasCompleted) {
        localStorage.removeItem('tour_step');
        localStorage.removeItem('tour_active');
        return;
    }

    const savedStep = localStorage.getItem('tour_step');
    const isActive = localStorage.getItem('tour_active');

    if (savedStep) {
        setCurrentStep(parseInt(savedStep));
        setIsVisible(true);
    } else if (!isActive) {
        // Start tour if not explicitly dismissed/completed
        const timer = setTimeout(() => {
            setIsVisible(true);
            localStorage.setItem('tour_active', 'true');
        }, 1500);
        return () => clearTimeout(timer);
    }
  }, [userHasCompleted]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      localStorage.setItem('tour_step', nextStep.toString());
      router.push(steps[nextStep].target);
    } else {
      handleComplete();
    }
  };

  const handleComplete = async () => {
    setIsVisible(false);
    localStorage.removeItem('tour_step');
    localStorage.removeItem('tour_active');
    await completeOnboarding();
  };
  
  const handleDismiss = () => {
      setIsVisible(false);
      localStorage.removeItem('tour_step');
      localStorage.removeItem('tour_active');
      // We don't mark as complete on server, so it might reappear next session 
      // or we can mark complete if dismiss counts as "done"
      completeOnboarding(); 
  };

  if (!mounted || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div 
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
        >
             <div className="relative h-32 bg-purple-600 flex items-center justify-center">
                 <div className="absolute top-4 right-4 text-purple-200 hover:text-white cursor-pointer" onClick={handleDismiss}>
                     <X className="h-6 w-6" />
                 </div>
                 <div className="text-white text-center px-6">
                    <h3 className="text-2xl font-bold">{steps[currentStep].title}</h3>
                 </div>
             </div>
             
             <div className="p-8">
                 <p className="text-slate-600 text-lg leading-relaxed mb-8 text-center">{steps[currentStep].description}</p>
                 
                 <div className="flex items-center justify-between">
                     <div className="flex space-x-2">
                         {steps.map((_, idx) => (
                             <div 
                                key={idx} 
                                className={`h-2 w-2 rounded-full transition-colors ${idx === currentStep ? 'bg-purple-600 scale-125' : 'bg-slate-200'}`} 
                             />
                         ))}
                     </div>
                     <button 
                        onClick={handleNext}
                        className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center"
                     >
                         {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                         {currentStep === steps.length - 1 ? <Check className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                     </button>
                 </div>
             </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
