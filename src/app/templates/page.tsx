import FeatureGrid from '../../components/FeatureGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Templates - Runable (clone)',
  description: 'Browse templates',
}

export default function Templates() {
  return (
    <main role="main" className="min-h-screen bg-background">
      <div className="pt-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 rounded-lg border bg-white p-6">
            <h2 className="text-lg font-semibold">Sign in to see more templates</h2>
            <p className="mt-2 text-sm text-zinc-600">This is a static clone. Sign-in is not implemented.</p>
          </div>
        </div>
        <FeatureGrid />
      </div>
    </main>
  )
}
