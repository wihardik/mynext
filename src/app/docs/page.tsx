import Link from 'next/link';
export const metadata = { title: 'Docs - Daytona' }
export default function Docs(){
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold">Documentation</h1>
      <p className="mt-2 text-zinc-700">Learn how to use Daytona.</p>
      <ul className="mt-4 space-y-2">
        <li><Link href="/docs/getting-started">Getting Started</Link></li>
      </ul>
    </div>
  )
}
