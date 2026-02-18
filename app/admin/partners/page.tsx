import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import Link from 'next/link';
import { updatePartnerStatus, deletePartner } from '@/lib/actions/admin';
import { Search, Filter, MoreVertical, Check, X, Shield, Trash2 } from 'lucide-react';

async function getPartners(query: string, status: string) {
  await dbConnect();
  const filter: any = { role: 'partner' };
  
  if (status && status !== 'all') {
      filter.status = status;
  }
  
  if (query) {
      filter.$or = [
          { name: { $regex: query, $options: 'i' } },
          { email: { $regex: query, $options: 'i' } }
      ];
  }
  
  return Partner.find(filter).sort({ createdAt: -1 }).lean();
}

export default async function AdminPartnersPage(props: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q || '';
  const status = searchParams.status || 'all';
  const partners = await getPartners(query, status);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Partner Management</h2>
          <p className="text-slate-500">Approve applications and manage partner accounts.</p>
        </div>
        <div className="flex space-x-2">
            {/* Could add Export button here */}
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
                    placeholder="Search by name or email..." 
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input type="hidden" name="status" value={status} />
              </form>
          </div>
          <div className="flex space-x-2">
              {['all', 'pending', 'active', 'suspended'].map((s) => (
                  <Link 
                    key={s} 
                    href={`?status=${s}&q=${query}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                        status === s 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                      {s}
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
                        <th className="px-6 py-4">Partner</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Tier</th>
                        <th className="px-6 py-4">Revenue</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {partners.length > 0 ? (
                        partners.map((partner: any) => (
                            <tr key={partner._id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-900">{partner.name}</div>
                                    <div className="text-slate-400 text-xs">{partner.email}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                                        ${partner.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 
                                          partner.status === 'suspended' ? 'bg-red-100 text-red-800' :
                                          'bg-amber-100 text-amber-800'}`}>
                                        {partner.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 capitalize">
                                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs border border-slate-200">
                                        {partner.tier}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(partner.stats.totalReferredRevenue)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end space-x-2">
                                        {partner.status === 'pending' && (
                                            <form action={updatePartnerStatus.bind(null, partner._id.toString(), 'active', partner.tier)}>
                                                <button type="submit" className="p-1 text-emerald-600 hover:bg-emerald-50 rounded" title="Approve">
                                                    <Check className="h-4 w-4" />
                                                </button>
                                            </form>
                                        )}
                                        {partner.status === 'active' && (
                                            <form action={updatePartnerStatus.bind(null, partner._id.toString(), 'suspended', partner.tier)}>
                                                <button type="submit" className="p-1 text-red-600 hover:bg-red-50 rounded" title="Suspend">
                                                    <Shield className="h-4 w-4" />
                                                </button>
                                            </form>
                                        )}
                                        <form action={deletePartner.bind(null, partner._id.toString())}>
                                            <button type="submit" className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded" title="Delete">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                No partners found matching current filters.
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
