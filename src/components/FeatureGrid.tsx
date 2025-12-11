import FeatureCard from './FeatureCard'
import { features } from '../data/features'

export default function FeatureGrid() {
  return (
    <section aria-label="Templates" className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {features.map((f) => (
        <FeatureCard key={f.id} feature={f} />
      ))}
    </section>
  )
}
