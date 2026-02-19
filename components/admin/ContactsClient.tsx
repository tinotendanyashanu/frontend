'use client';

import { Eye } from 'lucide-react';
import Link from 'next/link';
import DataTable from '@/components/admin/DataTable';

export default function ContactsClient({ data }: { data: any[] }) {
  const columns = [
      {
          header: 'Name',
          accessor: (item: any) => (
              <div>
                  <div className="font-medium text-slate-900">{item.name}</div>
                  <div className="text-slate-400 text-xs">{item.email}</div>
              </div>
          )
      },
      {
          header: 'Project Type',
          accessor: 'project'
      },
      {
          header: 'Budget',
          accessor: (item: any) => (
             <span className="text-slate-600 text-sm">
                {item.budget || '-'}
            </span>
          )
      },
      {
          header: 'Timeline',
          accessor: (item: any) => (
             <span className="text-slate-600 text-sm">
                {item.timeline || '-'}
            </span>
          )
      },
      {
          header: 'Submitted',
          accessor: 'createdAtString'
      }
  ];

  const actions = (item: any) => (
      <div className="flex items-center justify-end space-x-2">
          <Link href={`/admin/contacts/${item.id}`} className="p-1 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded" title="View Details">
              <Eye className="h-4 w-4" />
          </Link>
      </div>
  );

  return (
      <DataTable 
          data={data} 
          columns={columns} 
          searchKeys={['name', 'email', 'project', 'message']}
          actions={actions}
      />
  );
}
