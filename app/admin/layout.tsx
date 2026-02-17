import { auth } from '@/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user || session.user.role !== 'admin') {
    redirect('/partner/login'); // Redirect unauthorized to login
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar user={session.user} />
      <div className="pl-64">
        <header className="bg-white shadow-sm border-b border-slate-200 h-16 flex items-center px-8 justify-between sticky top-0 z-10">
             <h1 className="text-xl font-semibold text-slate-800">Admin Control Center</h1>
        </header>
        <main className="p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
