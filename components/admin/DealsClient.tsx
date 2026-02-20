'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';

interface DealRow {
  id: string;
  clientName: string;
  partnerName: string;
  valueFormatted: string;
  dealStatus: string;
  createdAtString: string;
}

export default function DealsClient({ data }: { data: DealRow[] }) {
  const columns: Column<DealRow>[] = [
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
          accessor: (item: DealRow) => (
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

  const actions = (item: DealRow) => (
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
