import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Deal from '@/models/Deal';
import Link from 'next/link';
import { Plus } from 'lucide-react';

async function getDeals(userId: string) {
  await dbConnect();
  return Deal.find({ partnerId: userId }).sort({ createdAt: -1 }).lean();
}

export default async function DealsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const deals = await getDeals(session.user.id);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Deals</h2>
          <p className="text-slate-500">Manage your registered opportunities.</p>
        </div>
        <Link 
          href="/partner/dashboard/deals/register" 
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200"
        >
          <Plus className="mr-2 h-4 w-4" />
          Register New Deal
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Est. Value</th>
                        <th className="px-6 py-4">Commission %</th>
                        <th className="px-6 py-4">Potential Earnings</th>
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
                                <td className="px-6 py-4">{(deal.commissionRate * 100).toFixed(0)}%</td>
                                <td className="px-6 py-4 font-medium text-emerald-600">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(deal.estimatedValue * deal.commissionRate)}
                                </td>
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
                            <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                No deals found. Register your first deal to start earning.
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
