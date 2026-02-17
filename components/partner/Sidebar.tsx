'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  DollarSign, 
  Briefcase, 
  Award, 
  BookOpen, 
  LogOut,
  Settings
} from 'lucide-react';
import { handleSignOut } from '@/lib/actions/auth';
import Image from 'next/image';

const navigation = [
  { name: 'Overview', href: '/partner/dashboard', icon: LayoutDashboard },
  { name: 'Deals', href: '/partner/dashboard/deals', icon: Briefcase },
  { name: 'Earnings', href: '/partner/dashboard/earnings', icon: DollarSign },
  { name: 'Tier Progress', href: '/partner/dashboard/tier', icon: Award },
  { name: 'Resources', href: '/partner/dashboard/resources', icon: BookOpen },
];

export default function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-slate-900 border-r border-slate-800 h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-white font-semibold text-lg">Partner Portal</span>
        </div>
        
        <div className="px-4 py-3 bg-slate-800 rounded-lg mb-6">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Signed in as</p>
            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
            <p className="text-xs text-emerald-400 mt-1 capitalize">{user?.tier} Partner</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <form action={handleSignOut}>
            <button 
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-400 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
                type="submit"
            >
                <LogOut className="mr-3 h-5 w-5" />
                Sign Out
            </button>
        </form>
      </div>
    </div>
  );
}
