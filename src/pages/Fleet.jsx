import {

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

const fleetImages = [
  { src: truckImage, alt: 'Invess haulage truck' },
  { src: truckImage1, alt: 'Invess fleet vehicle' },
  { src: truckImage2, alt: 'Invess logistics truck' },
  { src: truckImage3, alt: 'Invess cargo truck' },
  { src: truckImage4, alt: 'Invess transport logistics' },
  { src: truckImage5, alt: 'Invess fleet operations' },
  { src: truckImage6, alt: 'Invess haulage support vehicle' },
  { src: truckImage7, alt: 'Invess distribution truck' },
  { src: truckImage8, alt: 'Invess truck on route' },
  { src: truckImage9, alt: 'Invess delivery truck' },
  { src: truckImage10, alt: 'Invess truck fleet view' }
]

export default function Fleet() {
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
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f5f5f4_0%,_#e8ece8_100%)] text-slate-800">
      <section
        className="relative flex min-h-[88vh] items-center overflow-hidden px-6 py-24 text-white sm:px-8 lg:px-10"
        style={{ backgroundImage: `linear-gradient(rgba(2, 44, 34, 0.78), rgba(2, 44, 34, 0.82)), url(${fleetBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.22),_transparent_40%)]" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-200/90">Invess Logistics &amp; Haulage</p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Moving Ghana&apos;s fertilizer, cement, and cocoa — on our own fleet
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-100/95 sm:text-[15px] lg:text-base">
              From Tema Port to farms across Ghana and into Burkina Faso, our haulage fleet keeps fertilizer moving on time, every season — because we don&apos;t just manufacture crop nutrition, we deliver it ourselves.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href="/contact" className="rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Request Haulage Quote
              </a>
              <a href="#fleet-overview" className="rounded-full border border-emerald-400/40 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-white">
                View Our Fleet
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet-overview" className="px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-3 rounded-[1.5rem] border border-slate-800/10 bg-[linear-gradient(135deg,_rgba(17,24,39,0.95)_0%,_rgba(15,23,42,0.92)_100%)] p-4 shadow-lg shadow-slate-900/20 grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-sm">
                <p className="text-xl font-semibold text-emerald-300">{item.value}</p>
                <p className="mt-1 text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-3">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[1.5rem] border border-slate-800/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.96)_0%,_rgba(17,24,39,0.94)_100%)] p-5 text-slate-100 shadow-lg shadow-slate-900/20 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/90">What we haul</p>
            <h2 className="mt-2 text-lg font-semibold sm:text-xl">A fleet built for six kinds of cargo — not just one.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Our trucks move more than fertilizer. The fleet is built to run efficiently across multiple commodities, so trucks stay working instead of sitting idle between fertilizer seasons.
            </p>

            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.title} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-slate-200 shadow-sm shadow-slate-950/20">
                  <p className="font-semibold text-white">{service.title}</p>
                  <p className="mt-1 leading-6 text-slate-300">{service.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm">
              <img src={truckImage4} alt="Invess fleet operations" className="h-48 w-full object-cover object-center sm:h-56" loading="lazy" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm">
                <img src={truckImage} alt="Invess haulage truck" className="h-32 w-full object-cover object-center sm:h-36" loading="lazy" />
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/80 p-4 shadow-sm shadow-emerald-100/80">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-700/80">Operational reach</p>
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-700">From port handling to cross-border routes, every leg is planned around service reliability.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">Tema</span>
                  <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">Burkina Faso</span>
                  <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/90">Why Invess runs its own fleet</p>
              <h2 className="mt-2 text-lg font-semibold sm:text-xl">Because fertilizer can&apos;t wait — and neither can farmers.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Fertilizer movement is time-sensitive. It&apos;s tied directly to planting seasons, port evacuation schedules, and farmer demand. A delay in haulage is a delay in planting — and that&apos;s a risk we don&apos;t outsource.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-4 shadow-sm shadow-slate-950/20 backdrop-blur-sm">
              <ul className="space-y-2 text-sm leading-6 text-slate-200">
                {reasons.map((reason) => (
                  <li key={reason} className="rounded-xl border border-white/10 bg-slate-900/40 px-3 py-2">{reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-3">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/90">Routes we cover</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {routes.map((route) => (
              <div key={route} className="rounded-2xl border border-white/10 bg-slate-900/50 px-3 py-3 text-sm text-slate-200 shadow-sm shadow-slate-950/20">
                {route}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 pt-3">
        <div className="mx-auto max-w-6xl rounded-[1.5rem] border border-slate-800/10 bg-[linear-gradient(135deg,_rgba(15,23,42,0.97)_0%,_rgba(17,24,39,0.94)_100%)] p-6 text-slate-100 shadow-lg shadow-slate-900/20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-300/90">Reliability &amp; fleet controls</p>
              <h2 className="mt-1 text-lg font-semibold sm:text-xl">Every truck tracked. Every trip accounted for.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="/contact" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Request a Quote
              </a>
              <a href="/contact" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/20">
                Talk to Our Logistics Team
              </a>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {controls.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/50 p-3 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
