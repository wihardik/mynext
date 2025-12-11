'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function TopNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full border-b bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Top navigation">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Home">
            <div className="flex items-center gap-2">
              <Image src="/brand.svg" alt="Brand" width={36} height={36} />
              <span className="font-semibold">Runable</span>
            </div>
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm">Home</Link>
          <Link href="/templates" className="text-sm">Templates</Link>
          <Link href="#" className="text-sm">Pricing</Link>
          <Link href="#" className="text-sm">Docs</Link>
          <Link href="#" className="ml-2 rounded-full bg-foreground px-4 py-2 text-sm text-background">Sign in</Link>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="flex flex-col px-6 py-4">
            <Link href="/" className="py-2">Home</Link>
            <Link href="/templates" className="py-2">Templates</Link>
            <Link href="#" className="py-2">Pricing</Link>
            <Link href="#" className="py-2">Docs</Link>
            <Link href="#" className="mt-2 rounded-full bg-foreground px-4 py-2 text-sm text-background inline-block w-max">Sign in</Link>
          </div>
        </div>
      )}
    </header>
  )
}
