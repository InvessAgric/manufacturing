// Home page: composes the landing experience from the main marketing sections.
import { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'

const FacilitySection = lazy(() => import('../components/FacilitySection'))
const EquipmentSection = lazy(() => import('../components/EquipmentSection'))
const FleetSection = lazy(() => import('../components/FleetSection'))
const ProductSection = lazy(() => import('../components/ProductSection'))
const GallerySection = lazy(() => import('../components/GallerySection'))
const QualitySection = lazy(() => import('../components/QualitySection'))

function SectionFallback() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="h-6 w-56 rounded-md bg-slate-200/70 skeleton" />
      <div className="mt-4 h-4 w-full rounded bg-slate-200/60 skeleton" />
      <div className="mt-3 h-4 w-4/5 rounded bg-slate-200/60 skeleton" />
    </div>
  )
}

function Home() {
  return (
    <div className="min-h-screen">
      {/* Landing hero remains visually prominent, while the rest of the page uses neutral surfaces. */}
      <Hero />
      <StatsSection />

      <Suspense fallback={<SectionFallback />}>
        <FacilitySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <EquipmentSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FleetSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProductSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <QualitySection />
      </Suspense>
    </div>
  )
}

export default Home
