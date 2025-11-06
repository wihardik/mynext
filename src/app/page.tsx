import Hero from '@/components/Hero';

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">Trusted by teams running AI workloads</h2>
        <p className="mt-4 text-zinc-700">Daytona provides fast, secure, and scalable environments to run AI-generated code.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Fast Environments</h3>
            <p className="mt-2 text-sm text-zinc-600">Create environments in ~90ms for rapid iteration.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Stateful Operations</h3>
            <p className="mt-2 text-sm text-zinc-600">Preserve state across runs for reproducibility.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Enterprise Security</h3>
            <p className="mt-2 text-sm text-zinc-600">Security controls and isolation by default.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
