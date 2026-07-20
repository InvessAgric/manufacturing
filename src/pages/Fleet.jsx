import { useState, useEffect } from 'react'
import {
  facilityMainImage,
  fleetBg,
  truckImage,
  truckImage1,
  truckImage2,
  truckImage3,
  truckImage4,
  truckImage5,
  truckImage6,
  truckImage7,
  truckImage8,
  truckImage9,
  truckImage10
} from '../assets/assetRegistry'

const carouselImages = [
  truckImage,
  truckImage1,
  truckImage2,
  truckImage3,
  truckImage4
]

export default function Fleet() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000) // Changes image every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const highlights = [
    { value: '100', label: 'Trucks in operation' },
    { value: '6', label: 'Commodity lines hauled' },
    { value: 'Ghana + Burkina Faso', label: 'Routes covered' },
    { value: 'GPS-Tracked', label: 'Every trip, every truck' }
  ]

  const services = [
    { title: 'Port-to-Warehouse Fertilizer Haulage', text: 'Moving fertilizer from Tema Port directly into Invess warehouses for processing and distribution.' },
    { title: 'Ghana Regional Fertilizer Distribution', text: 'Getting blended fertilizer from our plant to distributors and farms across the country.' },
    { title: 'Burkina Faso Cross-Border Haulage', text: 'Dedicated cross-border runs delivering fertilizer into Burkina Faso, with fast turnaround so trucks get back on the road quickly.' },
    { title: 'Cement Haulage', text: 'Supporting cement distribution across Ghana with the same fleet reliability.' },
    { title: 'Cocoa Bean Haulage to Tema', text: 'Moving cocoa beans to Tema for export, keeping Ghana’s cocoa supply chain moving.' },
    { title: 'Third-Party Contract Haulage', text: 'Available for contracted haulage operations beyond our own products.' }
  ]

  const reasons = [
    'No dependence on external transporters — dispatch decisions are ours, not a third party’s.',
    'Faster turnaround — trucks moving into Burkina Faso return without waiting for return cargo, so they’re back on the road sooner.',
    'Full dispatch control — we schedule around planting seasons and farmer demand, not someone else’s booking calendar.',
    'Built-in flexibility — during lower-fertilizer periods, the same fleet moves cement, cocoa, and third-party cargo instead of sitting idle.'
  ]

  const controls = [
    'GPS tracking on every vehicle — full visibility of location and route in real time.',
    'Trip sheets & dispatch controls — every haulage run is logged and accounted for.',
    'Fuel card system — controlled fuel allocation reduces leakage and keeps costs predictable.',
    'Preventive maintenance program — trucks are maintained on schedule, not just when something breaks.',
    'Comprehensive insurance — full motor insurance and goods-in-transit cover on every load.',
    'Dedicated documentation team — for smooth, fast cross-border clearance into Burkina Faso.'
  ]

  const routes = [
    'Tema Port → Invess Manufacturing Plant',
    'Invess Plant → Regional distribution points across Ghana',
    'Ghana → Burkina Faso (fertilizer haulage corridor)',
    'Cocoa collection points → Tema (export haulage)',
    'Cement distribution routes, Ghana-wide'
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header Banner */}
      <section
        className="relative overflow-hidden px-6 py-24 pt-28 text-white sm:py-28 sm:pt-32"
        style={{ backgroundImage: `linear-gradient(rgba(2, 44, 34, 0.78), rgba(2, 44, 34, 0.82)), url(${fleetBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/90">Invess Logistics &amp; Haulage</p>
          <h1 className="mt-3 max-w-4xl text-2xl font-semibold leading-tight sm:text-3xl">
            Moving Ghana&apos;s fertilizer, cement, and cocoa — on our own fleet
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-100/95 sm:text-base">
            From Tema Port to farms across Ghana and into Burkina Faso, our haulage fleet keeps fertilizer moving on time, every season — because we don&apos;t just manufacture crop nutrition, we deliver it ourselves.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href="/contact" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
              Request Haulage Quote
            </a>
            <a href="#fleet-overview" className="rounded-full border border-emerald-400/40 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-white">
              View Our Fleet
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section id="fleet-overview" className="px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-3 text-center">
                <p className="text-xl font-semibold text-emerald-700">{item.value}</p>
                <p className="mt-1 text-xs text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Core Layout */}
      <section className="px-6 py-3">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:items-start">
          
          {/* Column 1: What we haul */}
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/80">What we haul</p>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">A fleet built for six kinds of cargo — not just one.</h2>
            <p className="mt-3 leading-7 text-sm text-slate-600">
              Our trucks move more than fertilizer. The fleet is built to run efficiently across multiple commodities, so trucks stay working instead of sitting idle between fertilizer seasons.
            </p>

            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">{service.title}</p>
                  <p className="mt-1 leading-6 text-slate-600">{service.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Auto-Changing Carousel Container & Fleet Ownership Details */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Auto-Changing Carousel Image Card */}
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/11]">
                {carouselImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Invess haulage truck ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
                
                {/* Visual Indicators/Dots */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'w-4 bg-emerald-600' : 'w-1.5 bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Why Invess runs its own fleet Container */}
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/80">Fleet Ownership</p>
              <h2 className="mt-2 text-xl font-semibold">Because fertilizer can&apos;t wait — and neither can farmers.</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                {reasons.map((reason) => (
                  <li key={reason} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Routes Map Section */}
      <section className="px-6 py-3">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/80">Routes we cover</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <div key={route} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700">
                {route}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management and Fleet Controls */}
      <section className="px-6 pb-12 pt-3">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/80">Reliability &amp; fleet controls</p>
              <h2 className="mt-1 text-xl font-semibold sm:text-2xl">Every truck tracked. Every trip accounted for.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="/contact" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {controls.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}