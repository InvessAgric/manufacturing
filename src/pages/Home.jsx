// Home page: composes the landing experience from the main marketing sections.
import { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import AdCarousel from '../components/AdCarousel'
import StatsSection from '../components/StatsSection'
import {
  adCoacofertImage,
  adNpkImage,
  adTomatoesImage,
  adUreaImage,
} from '../assets/assetRegistry'

const FacilitySection = lazy(() => import('../components/FacilitySection'))
const EquipmentSection = lazy(() => import('../components/EquipmentSection'))
const FleetSection = lazy(() => import('../components/FleetSection'))
const ProductSection = lazy(() => import('../components/ProductSection'))
const GallerySection = lazy(() => import('../components/GallerySection'))
const QualitySection = lazy(() => import('../components/QualitySection'))

const homeAds = [
  {
    src: adTomatoesImage,
    alt: 'Tomatoes campaign ad',
    title: 'Tomatoes campaign',
    caption: 'Crop-specific nutrition messaging for stronger fruit set and harvest quality.',
  },
  {
    src: adNpkImage,
    alt: 'NPK fertilizer ad',
    title: 'NPK blends',
    caption: 'Balanced inputs for improved rooting, growth and yield performance.',
  },
  {
    src: adCoacofertImage,
    alt: 'Coacofert campaign ad',
    title: 'Coacofert support',
    caption: 'Promotional creative focused on cocoa nutrition and field-ready supply.',
  },
  {
    src: adUreaImage,
    alt: 'Urea fertilizer ad',
    title: 'Urea solutions',
    caption: 'Nitrogen-driven crop support for fast visible growth response.',
  },
]

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
    <div className="min-h-screen pt-8 sm:pt-10">
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
      
      {/* <AdCarousel
        eyebrow="Campaign highlights"
        title="Fresh ad visuals across the site"
        description="A rotating set of campaign images now appears on the landing page so visitors see current promotions right away."
        images={homeAds}
      /> */}
    </div>
  )
}

export default Home
