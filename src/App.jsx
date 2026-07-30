import Hero from './components/Hero'
import StickySection from './components/StickySection'
import ProductGrid from './components/ProductGrid'
import Lookbook from './components/Lookbook'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-concrete-light text-concrete-darkest">
      <div className="grain-overlay" />
      <Hero />
      <StickySection />
      <ProductGrid />
      <Lookbook />
      <Footer />
    </main>
  )
}
