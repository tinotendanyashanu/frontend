import { auth } from '@/auth';
import Sidebar from '@/components/partner/Sidebar';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect('/partner/login');
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar user={session.user} />
      <div className="pl-64">
        <header className="bg-white shadow-sm border-b border-slate-200 h-16 flex items-center px-8 justify-between sticky top-0 z-10">
             <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
             <div className="flex items-center space-x-4">
                 {/* Notifications or secondary actions could go here */}
                 <div className="text-sm text-slate-500">
                     {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                 </div>
             </div>
        </header>
        <main className="p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
