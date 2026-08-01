import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'

const StickySection = lazy(() => import('./components/StickySection'))
const ProductGrid = lazy(() => import('./components/ProductGrid'))
const BrandStory = lazy(() => import('./components/BrandStory'))
const Lookbook = lazy(() => import('./components/Lookbook'))
const Newsletter = lazy(() => import('./components/Newsletter'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <main className="min-h-screen bg-concrete-light text-concrete-darkest">
      <Navigation />
      <Hero />
      <Suspense fallback={null}>
        <FeaturedCollection />
        <StickySection />
        <ProductGrid />
        <BrandStory />
        <Lookbook />
        <Newsletter />
        <Footer />
      </Suspense>
    </main>
  )
}
