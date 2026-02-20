'use client';

import { Eye, Check, Shield, Trash2 } from 'lucide-react';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';
import { updatePartnerStatus, deletePartner } from '@/lib/actions/admin';

interface PartnerRow {
  id: string;
  name: string;
  email: string;
  status: string;
  tier: string;
  revenueFormatted: string;
  createdAtString: string;
}

export default function PartnersClient({ data }: { data: PartnerRow[] }) {
  const columns: Column<PartnerRow>[] = [
      {
          header: 'Partner',
          accessor: (item: PartnerRow) => (
              <div>
                  <div className="font-medium text-slate-900">{item.name}</div>
                  <div className="text-slate-400 text-xs">{item.email}</div>
              </div>
          )
      },
      {
          header: 'Status',
          accessor: (item: PartnerRow) => (
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                  ${item.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 
                    item.status === 'suspended' ? 'bg-red-100 text-red-800' :
                    'bg-amber-100 text-amber-800'}`}>
                  {item.status}
              </span>
          )
      },
      {
          header: 'Tier',
          accessor: (item: PartnerRow) => (
             <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs border border-slate-200 capitalize">
                {item.tier}
            </span>
          )
      },
       {
          header: 'Revenue',
          accessor: 'revenueFormatted'
      },
      {
          header: 'Joined',
          accessor: 'createdAtString'
      }
  ];

  const actions = (item: PartnerRow) => (
      <div className="flex items-center justify-end space-x-2">
          <Link href={`/admin/partners/${item.id}`} className="p-1 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded" title="View Details">
              <Eye className="h-4 w-4" />
          </Link>
          {item.status === 'pending' && (
              <form action={updatePartnerStatus.bind(null, item.id, 'active', item.tier)}>
                  <button type="submit" className="p-1 text-emerald-600 hover:bg-emerald-50 rounded" title="Approve">
                      <Check className="h-4 w-4" />
                  </button>
              </form>
          )}
          {item.status === 'active' && (
              <form action={updatePartnerStatus.bind(null, item.id, 'suspended', item.tier)}>
                  <button type="submit" className="p-1 text-red-600 hover:bg-red-50 rounded" title="Suspend">
                      <Shield className="h-4 w-4" />
                  </button>
              </form>
          )}
          <form action={deletePartner.bind(null, item.id)}>
              <button type="submit" className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded" title="Delete">
                  <Trash2 className="h-4 w-4" />
              </button>
          </form>
      </div>
  );

  return (
    <DataTable 
        data={data} 
        columns={columns} 
        searchKeys={['name', 'email', 'status', 'tier']}
        actions={actions}
    />
  );
}
