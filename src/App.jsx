import { lazy, Suspense } from 'react'
import Hero from './components/Hero'

const StickySection = lazy(() => import('./components/StickySection'))
const ProductGrid = lazy(() => import('./components/ProductGrid'))
const Lookbook = lazy(() => import('./components/Lookbook'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <main className="min-h-screen bg-concrete-light text-concrete-darkest">
      <Hero />
      <Suspense fallback={null}>
        <StickySection />
        <ProductGrid />
        <Lookbook />
        <Footer />
      </Suspense>
    </main>
  )
}
