'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { registerPartner } from '@/lib/actions/auth';
import Link from 'next/link';
import Image from 'next/image';

const initialState = {
  message: '',
  errors: {},
};

export default function SignupPage() {
  const [state, dispatch] = useActionState(registerPartner, initialState);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
       {/* Left Side - Form */}
       <div className="flex items-center justify-center p-8 bg-white text-slate-900">
        <div className="w-full max-w-sm">
          <Link href="/partner" className="text-slate-400 text-sm hover:text-slate-900 transition-colors mb-8 block">&larr; Back to Partner Home</Link>
          <h1 className="text-3xl font-bold mb-2">Apply for Partnership</h1>
          <p className="text-slate-500 mb-8">Join the network and start earning. Applications are reviewed within 48 hours.</p>
          
          <form action={dispatch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="John Doe"
              />
              {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company Name <span className="text-slate-400 font-normal">(Optional)</span></label>
              <input 
                type="text" 
                name="companyName" 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="you@company.com"
              />
              {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                name="password" 
                required 
                minLength={6}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                placeholder="••••••••"
              />
              {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>}
            </div>
            
            {/* Success/Error Message */}
            {state?.message && (
                <div className={`p-3 rounded-lg text-sm ${state.success ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                    {state.message}
                </div>
            )}

            <SignupButton />
            
            <p className="text-center text-sm text-slate-500 mt-6">
              Already have an account? <Link href="/partner/login" className="text-emerald-600 hover:text-emerald-700 font-medium">Log in</Link>
            </p>
          </form>
        </div>
      </div>

       {/* Right Side - Visual */}
       <div className="hidden md:flex flex-col justify-center p-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
            <Image 
                src="/images/partner-signup.png" 
                alt="Partner collaboration" 
                fill
                className="object-cover"
                priority
            />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent" />

        <div className="relative z-10 max-w-md mt-auto">
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-md">Build with us.</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-emerald-100 drop-shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mr-4 text-white font-bold shadow-lg">1</span>
                Submit your application
            </li>
            <li className="flex items-center text-emerald-100 drop-shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mr-4 text-white font-bold shadow-lg">2</span>
                Get approved within 48h
            </li>
            <li className="flex items-center text-emerald-100 drop-shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mr-4 text-white font-bold shadow-lg">3</span>
                Access dashboard & resources
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-slate-900 text-white py-2.5 rounded-lg hover:bg-slate-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Submitting Application...' : 'Submit Application'}
    </button>
  );
}
