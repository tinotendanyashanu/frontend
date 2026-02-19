'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import DataTable from '@/components/admin/DataTable';

export default function DealsClient({ data }: { data: any[] }) {
  const columns = [
      {
          header: 'Client',
          accessor: 'clientName',
          className: 'font-medium text-slate-900'
      },
      {
          header: 'Partner',
          accessor: 'partnerName'
      },
      {
          header: 'Value',
          accessor: 'valueFormatted'
      },
      {
          header: 'Status',
          accessor: (item: any) => (
             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize 
                ${item.dealStatus === 'approved' ? 'bg-emerald-100 text-emerald-800' : 
                  item.dealStatus === 'closed' ? 'bg-blue-100 text-blue-800' :
                  item.dealStatus === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-amber-100 text-amber-800'}`}>
                {(item.dealStatus || '').replace('_', ' ')}
            </span>
          )
      },
      {
          header: 'Date',
          accessor: 'createdAtString'
      }
  ];

  const actions = (item: any) => (
      <Link href={`/admin/deals/${item.id}`} className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm">
          <Eye className="h-4 w-4 mr-1" /> View
      </Link>
  );

  return (
      <DataTable 
          data={data} 
          columns={columns} 
          searchKeys={['clientName', 'partnerName', 'dealStatus']}
          actions={actions}
      />
  );
}
