import React from 'react';
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="w-full border-t mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="text-lg font-semibold">Daytona</Link>
          <p className="mt-2 text-sm text-zinc-600">Secure infrastructure for running AI-generated code.</p>
        </div>
        <div>
          <h4 className="font-medium">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/customers">Customers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/partner">Partner</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/docs">Docs</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-zinc-500">© {new Date().getFullYear()} Daytona. All rights reserved.</div>
      </div>
    </footer>
  )
}
