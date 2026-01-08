import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 text-slate-800">
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="mb-8 text-slate-600">Could not find requested resource</p>
      <Link href="/" className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
        Return Home
      </Link>
    </main>
  )
}