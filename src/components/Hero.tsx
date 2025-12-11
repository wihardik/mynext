import Link from 'next/link'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center sm:text-left">
        <h1 className="text-3xl font-bold leading-tight">Ask Runable for research</h1>
        <p className="mt-4 text-lg text-zinc-600">Templates and tools to help you ship better content, faster — browse templates to get started.</p>
        <div className="mt-6 flex justify-center sm:justify-start">
          <Link href="/templates" aria-label="View templates" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-95">Browse templates</Link>
        </div>
      </div>
    </section>
  )
}
