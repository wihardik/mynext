import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main role="main">
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}
