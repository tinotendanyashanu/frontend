'use client';

import { Eye, Check, Shield, Trash2 } from 'lucide-react';
import Link from 'next/link';
import DataTable from '@/components/admin/DataTable';
import { updatePartnerStatus, deletePartner } from '@/lib/actions/admin';

export default function PartnersClient({ data }: { data: any[] }) {
  const columns = [
      {
          header: 'Partner',
          accessor: (item: any) => (
              <div>
                  <div className="font-medium text-slate-900">{item.name}</div>
                  <div className="text-slate-400 text-xs">{item.email}</div>
              </div>
          )
      },
      {
          header: 'Status',
          accessor: (item: any) => (
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
          accessor: (item: any) => (
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

  const actions = (item: any) => (
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
