'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Home','/'],
    ['Docs','/docs'],
    ['Pricing','/pricing'],
    ['Customers','/customers'],
    ['Contact','/contact'],
    ['About','/about'],
    ['Careers','/careers'],
    ['Partner','/partner'],
  ];

  return (
    <header className="w-full border-b bg-white/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">Daytona</Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-zinc-700 hover:text-black">
              {label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 rounded-md border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-zinc-700 py-2">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
