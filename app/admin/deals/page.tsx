import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Deal from '@/models/Deal';
import Partner from '@/models/Partner';
import Link from 'next/link';
import { Search, Filter, Eye } from 'lucide-react';

async function getDeals(query: string, status: string) {
  await dbConnect();
  const filter: any = {};
  
  if (status && status !== 'all') {
      filter.dealStatus = status;
  }
  
  if (query) {
      filter.$or = [
          { clientName: { $regex: query, $options: 'i' } },
      ];
      // Note: Searching by Partner Name requires aggregation or population, keeping simple for now
  }
  
  return Deal.find(filter).populate('partnerId', 'name email').sort({ createdAt: -1 }).lean();
}

export default async function AdminDealsPage({
  searchParams,
}: {
  searchParams: { q?: string; status?: string };
}) {
  const query = searchParams.q || '';
  const status = searchParams.status || 'all';
  const deals = await getDeals(query, status);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Deal Pipeline</h2>
          <p className="text-slate-500">Manage registered deals and process commissions.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <form>
                <input 
                    name="q" 
                    defaultValue={query} 
                    placeholder="Search by client name..." 
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input type="hidden" name="status" value={status} />
              </form>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-1 md:pb-0">
              {['all', 'registered', 'under_review', 'approved', 'closed', 'commission_paid'].map((s) => (
                  <Link 
                    key={s} 
                    href={`?status=${s}&q=${query}`}
                    className={`px-3 py-2 rounded-lg text-sm font-medium capitalize whitespace-nowrap transition-colors ${
                        status === s 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                      {s.replace('_', ' ')}
                  </Link>
              ))}
          </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-slate-500 font-medium uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Partner</th>
                        <th className="px-6 py-4">Value</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {deals.length > 0 ? (
                        deals.map((deal: any) => (
                            <tr key={deal._id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-slate-900">{deal.clientName}</td>
                                <td className="px-6 py-4">
                                    <div className="text-slate-900">{deal.partnerId?.name || 'Unknown'}</div>
                                </td>
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
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/admin/deals/${deal._id}`} className="inline-flex items-center text-purple-600 hover:underline">
                                        <Eye className="h-4 w-4 mr-1" /> View
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                                No deals found.
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
