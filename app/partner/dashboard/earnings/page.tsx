import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Payout from '@/models/Payout';
import Partner from '@/models/Partner';
import { DollarSign, Clock, CheckCircle } from 'lucide-react';

async function getEarningsData(userId: string) {
  await dbConnect();
  const partner = await Partner.findById(userId).lean();
  const payouts = await Payout.find({ partnerId: userId }).sort({ createdAt: -1 }).lean();
  return { partner, payouts };
}

export default async function EarningsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const { partner, payouts } = await getEarningsData(session.user.id);

  if (!partner) return null;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Earnings & Payouts</h2>
        <p className="text-slate-500">Track your commissions and payment history.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
           <div className="flex items-center space-x-3 mb-2">
               <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                   <DollarSign className="h-5 w-5" />
               </div>
               <p className="text-sm font-medium text-slate-500">Total Earned</p>
           </div>
           <p className="text-2xl font-bold text-slate-900">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.totalCommissionEarned)}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
           <div className="flex items-center space-x-3 mb-2">
               <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                   <CheckCircle className="h-5 w-5" />
               </div>
               <p className="text-sm font-medium text-slate-500">Paid Out</p>
           </div>
           <p className="text-2xl font-bold text-slate-900">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.paidCommission)}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
           <div className="flex items-center space-x-3 mb-2">
               <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                   <Clock className="h-5 w-5" />
               </div>
               <p className="text-sm font-medium text-slate-500">Pending</p>
           </div>
           <p className="text-2xl font-bold text-slate-900">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.pendingCommission)}</p>
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Payout History</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">Reference ID</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Method</th>
                        <th className="px-6 py-4">Date Processed</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {payouts.length > 0 ? (
                        payouts.map((payout: any) => (
                            <tr key={payout._id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs">{payout.reference || payout._id.toString().slice(-8)}</td>
                                <td className="px-6 py-4 font-medium text-slate-900">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payout.amount)}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                                        ${payout.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 
                                          payout.status === 'failed' ? 'bg-red-100 text-red-800' :
                                          'bg-blue-100 text-blue-800'}`}>
                                        {payout.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 capitalize">{payout.method.replace('_', ' ')}</td>
                                <td className="px-6 py-4 text-slate-400">
                                    {payout.processedAt ? new Date(payout.processedAt).toLocaleDateString() : '-'}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                No payouts recorded yet.
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
