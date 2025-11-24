'use client'
import React from 'react';
import Button from './Button';
import Image from 'next/image';

export default function Hero(){
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold">Daytona — Secure infrastructure for running AI-generated code</h1>
        <p className="mt-4 text-lg text-zinc-700">Deploy AI code with confidence — 90ms environment creation, stateful operations and enterprise grade security.</p>
        <div className="mt-6 flex gap-4">
          <Button onClick={() => window.location.href = '/contact'}>Get Started</Button>
          <Button variant="secondary" onClick={() => window.location.href = '/docs'}>View Docs</Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full h-56 md:h-80 rounded-lg bg-zinc-100 flex items-center justify-center">
          <Image src="/window.svg" alt="illustration" width={320} height={200} />
        </div>
      </div>
    </section>
  )
}
