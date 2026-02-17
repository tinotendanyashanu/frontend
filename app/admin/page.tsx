import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import Deal from '@/models/Deal';
import Payout from '@/models/Payout';
import { 
  Users, 
  Briefcase, 
  CreditCard,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

async function getAdminStats() {
  await dbConnect();
  
  const partnerCount = await Partner.countDocuments({ role: 'partner' });
  const pendingPartners = await Partner.countDocuments({ status: 'pending' });
  
  const dealCount = await Deal.countDocuments();
  const pendingDeals = await Deal.countDocuments({ dealStatus: 'registered' });
  
  const totalPayouts = await Payout.aggregate([
      { $match: { status: 'paid' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
  ]);

  const recentPartners = await Partner.find({ role: 'partner' }).sort({ createdAt: -1 }).limit(5).lean();

  return {
    partnerCount,
    pendingPartners,
    dealCount,
    pendingDeals,
    totalPayouts: totalPayouts[0]?.total || 0,
    recentPartners
  };
}

export default async function AdminDashboard() {
  const stats = await getAdminStats();

  const cards = [
    {
      name: 'Total Partners',
      value: stats.partnerCount,
      sub: `${stats.pendingPartners} pending approval`,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Deals',
      value: stats.dealCount,
      sub: `${stats.pendingDeals} new registrations`,
      icon: Briefcase,
      color: 'bg-purple-500',
    },
    {
      name: 'Total Payouts',
      value: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(stats.totalPayouts),
      sub: 'Lifetime paid',
      icon: CreditCard,
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((car) => (
          <div key={car.name} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
               <div className={`p-3 rounded-lg ${car.color} bg-opacity-10`}>
                  <car.icon className={`h-6 w-6 ${car.color.replace('bg-', 'text-')}`} />
               </div>
               {car.sub.includes('pending') && parseInt(car.sub) > 0 && (
                   <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                       <AlertCircle className="h-3 w-3 mr-1" /> Action Needed
                   </span>
               )}
            </div>
            <p className="text-sm font-medium text-slate-500">{car.name}</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">{car.value}</p>
            <p className="text-sm text-slate-400 mt-1">{car.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Partners */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-900">Newest Partners</h3>
            <Link href="/admin/partners" className="text-sm text-purple-600 hover:text-purple-700 font-medium">Manage All &rarr;</Link>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Joined</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {stats.recentPartners.map((partner: any) => (
                        <tr key={partner._id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900">{partner.name}</td>
                            <td className="px-6 py-4">{partner.email}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                                    ${partner.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 
                                      partner.status === 'suspended' ? 'bg-red-100 text-red-800' :
                                      'bg-amber-100 text-amber-800'}`}>
                                    {partner.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-slate-400">{new Date(partner.createdAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4">
                                <Link href={`/admin/partners?id=${partner._id}`} className="text-purple-600 hover:underline">Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
