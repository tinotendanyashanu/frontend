import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import Deal from '@/models/Deal';
import { 
  DollarSign, 
  Briefcase, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import Link from 'next/link';

async function getDashboardData(email: string) {
  await dbConnect();
  const partner = await Partner.findOne({ email }).lean();
  
  if (!partner) return null;

  const deals = await Deal.find({ partnerId: partner._id })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();
    
  return { partner, deals };
}

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.email) return null;

  const data = await getDashboardData(session.user.email);
  if (!data) return <div>Partner not found</div>;

  const { partner, deals } = data;

  const stats = [
    {
      name: 'Total Revenue Referred',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.totalReferredRevenue),
      icon: TrendingUp,
      color: 'bg-blue-500',
    },
    {
      name: 'Lifetime Commission',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.totalCommissionEarned),
      icon: DollarSign,
      color: 'bg-emerald-500',
    },
    {
      name: 'Pending Commission',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.pendingCommission),
      icon: Clock,
      color: 'bg-amber-500',
    },
    {
      name: 'Active Deals',
      value: deals.filter(d => ['registered', 'under_review', 'approved'].includes(d.dealStatus)).length,
      icon: Briefcase,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <p className="text-slate-500">Welcome back, {partner.name}. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
               <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
               </div>
            </div>
            <p className="text-sm font-medium text-slate-500">{stat.name}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity / Deals */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-900">Recent Deals</h3>
            <Link href="/partner/dashboard/deals" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View All &rarr;</Link>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Value</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Date</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {deals.length > 0 ? (
                        deals.map((deal: any) => (
                            <tr key={deal._id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{deal.clientName}</td>
                                <td className="px-6 py-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(deal.estimatedValue)}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                                        ${deal.dealStatus === 'approved' ? 'bg-emerald-100 text-emerald-800' : 
                                          deal.dealStatus === 'closed' ? 'bg-blue-100 text-blue-800' :
                                          deal.dealStatus === 'rejected' ? 'bg-red-100 text-red-800' :
                                          'bg-amber-100 text-amber-800'}`}>
                                        {deal.dealStatus.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-400">{new Date(deal.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-6 py-12 text-center text-slate-400">
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
