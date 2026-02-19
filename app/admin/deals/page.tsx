import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Deal from '@/models/Deal';
import Link from 'next/link';
import DealsClient from '@/components/admin/DealsClient';

async function getDeals() {
  await dbConnect();
  return Deal.find({}).populate('partnerId', 'name email').sort({ createdAt: -1 }).lean();
}

export default async function AdminDealsPage() {
  const deals = await getDeals();

  const tableData = deals.map((deal: any) => ({
      ...deal,
      id: deal._id.toString(),
      _id: deal._id.toString(),
      partnerName: deal.partnerId?.name || 'Unknown',
      valueFormatted: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(deal.estimatedValue),
      createdAtString: new Date(deal.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Deal Pipeline</h2>
          <p className="text-slate-500">Manage registered deals and process commissions.</p>
        </div>
      </div>

      <DealsClient data={tableData} />
    </div>
  );
}
