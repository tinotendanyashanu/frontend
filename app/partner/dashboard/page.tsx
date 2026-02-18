export const dynamic = 'force-dynamic';

import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import Deal from '@/models/Deal';
import Course from '@/models/Course';
import { 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Clock,
  GraduationCap,
  ArrowRight,
  Shield,
  Settings,
  PlusCircle,
  Megaphone,
  Sparkles,
  CalendarCheck,
  Star
} from 'lucide-react';
import Link from 'next/link';

async function getDashboardData(email: string) {
  await dbConnect();
  const partner = await Partner.findOne({ email }).lean() as any;
  
  if (!partner) return null;

  const deals = await Deal.find({ partnerId: partner._id })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  // Fetch course progress
  const courses = await Course.find({ published: true }).lean();
  const progressList = partner.partnerProgress || [];
  const totalCourses = courses.length;
  const completedCourses = progressList.filter((p: any) => p.isCompleted).length;
    
  return { partner, deals, totalCourses, completedCourses };
}

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.email) return null;

  const data = await getDashboardData(session.user.email);
  if (!data) return <div>Partner not found</div>;

  const { partner, deals, totalCourses, completedCourses } = data;

  const stats = [
    {
      name: 'Total Revenue Referred',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.totalReferredRevenue),
      icon: TrendingUp,
      color: 'bg-blue-500',
      href: '/partner/dashboard/deals'
    },
    {
      name: 'Lifetime Commission',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.totalCommissionEarned),
      icon: DollarSign,
      color: 'bg-emerald-500',
      href: '/partner/dashboard/earnings'
    },
    {
      name: 'Pending Commission',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.pendingCommission),
      icon: Clock,
      color: 'bg-amber-500',
      href: '/partner/dashboard/earnings'
    },
    {
      name: 'Academy Progress',
      value: `${completedCourses}/${totalCourses} Courses`,
      icon: GraduationCap,
      color: 'bg-indigo-500',
      href: '/partner/dashboard/academy'
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-end">
        <div>
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            <p className="text-slate-500">Welcome back, {partner.name}. Here's what's happening today.</p>
        </div>
        <Link href="/partner/dashboard/deals/register" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            + Register Deal
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href} className="group block bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100">
            <div className="flex items-start justify-between mb-6">
               <div className={`p-4 rounded-2xl ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
               </div>
               <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="h-4 w-4 text-slate-400" />
               </div>
            </div>
            <div>
                <p className="text-3xl font-bold text-slate-900 tracking-tight mb-1">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-500">{stat.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/partner/dashboard/deals/register"
              className="flex items-center p-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors group"
            >
              <div className="p-2 bg-emerald-500 rounded-lg mr-3">
                <PlusCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold">Register New Deal</span>
              <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/partner/dashboard/academy"
              className="flex items-center p-3 rounded-xl bg-indigo-50 text-indigo-800 hover:bg-indigo-100 transition-colors group"
            >
              <div className="p-2 bg-indigo-500 rounded-lg mr-3">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold">View Academy</span>
              <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/partner/dashboard/rules"
              className="flex items-center p-3 rounded-xl bg-slate-50 text-slate-800 hover:bg-slate-100 transition-colors group"
            >
              <div className="p-2 bg-slate-800 rounded-lg mr-3">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold">Program Rules</span>
              <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/partner/dashboard/settings"
              className="flex items-center p-3 rounded-xl bg-slate-50 text-slate-800 hover:bg-slate-100 transition-colors group"
            >
              <div className="p-2 bg-slate-600 rounded-lg mr-3">
                <Settings className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold">Settings</span>
              <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        {/* Announcements */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8">
          <div className="flex items-center mb-4">
            <Megaphone className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="text-lg font-bold text-slate-900">Program Announcements</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-50/50 border border-emerald-100">
              <div className="p-2 bg-emerald-500 rounded-lg mr-4 mt-0.5 flex-shrink-0">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">New Academy Courses Available</p>
                <p className="text-xs text-slate-500 mt-1">5 new courses have been added to the Partner Academy — including &quot;Advanced Closing Techniques&quot; and &quot;Understanding Our Tech Stack&quot;. Complete them to sharpen your skills.</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">Feb 2026</p>
              </div>
            </div>
            <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-50/50 border border-blue-100">
              <div className="p-2 bg-blue-500 rounded-lg mr-4 mt-0.5 flex-shrink-0">
                <Star className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Tier Upgrades Are Automatic</p>
                <p className="text-xs text-slate-500 mt-1">Reminder: your partner tier automatically upgrades when your lifetime referred revenue crosses $10K (Agency) or $50K (Enterprise). No application needed.</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">Feb 2026</p>
              </div>
            </div>
            <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-amber-50 to-amber-50/50 border border-amber-100">
              <div className="p-2 bg-amber-500 rounded-lg mr-4 mt-0.5 flex-shrink-0">
                <CalendarCheck className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Payout Schedule Update</p>
                <p className="text-xs text-slate-500 mt-1">Commissions are now processed within 14 business days of client payment clearing. Make sure your bank details are up to date in Settings.</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">Jan 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity / Deals */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold text-slate-900">Recent Deals</h3>
                <p className="text-sm text-slate-500">Latest opportunities registered.</p>
            </div>
            <Link href="/partner/dashboard/deals" className="text-sm text-emerald-600 hover:text-emerald-700 font-bold px-4 py-2 bg-emerald-50 rounded-full transition-colors">View All &rarr;</Link>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-white text-slate-500 font-bold uppercase text-xs tracking-wider">
                    <tr>
                        <th className="px-8 py-6 border-b border-slate-50">Client</th>
                        <th className="px-8 py-6 border-b border-slate-50">Value</th>
                        <th className="px-8 py-6 border-b border-slate-50">Status</th>
                        <th className="px-8 py-6 border-b border-slate-50">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {deals.length > 0 ? (
                        deals.map((deal: any) => (
                            <tr key={deal._id} className="group hover:bg-slate-50/80 transition-colors">
                                <td className="px-8 py-5 font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{deal.clientName}</td>
                                <td className="px-8 py-5 font-medium">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(deal.finalValue || deal.estimatedValue)}
                                </td>
                                <td className="px-8 py-5">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold capitalize 
                                        ${deal.dealStatus === 'approved' ? 'bg-emerald-100 text-emerald-700' : 
                                          deal.dealStatus === 'closed' ? 'bg-blue-100 text-blue-700' :
                                          deal.dealStatus === 'rejected' ? 'bg-red-100 text-red-700' :
                                          'bg-amber-100 text-amber-700'}`}>
                                        {deal.dealStatus.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-slate-400 font-medium">{new Date(deal.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-8 py-16 text-center text-slate-400 font-medium">
                                No deals registered yet. <Link href="/partner/dashboard/deals" className="text-emerald-600 hover:underline">Register your first deal</Link>.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
