import { Link } from 'react-router-dom'
import { fleetBg } from '../assets/assetRegistry'

// FleetSection: highlights the transport and distribution support behind delivery operations.
export default function FleetSection() {
  const fleetHighlights = [
    { title: '100 Trucks', text: 'Dedicated haulage moving cargo across Ghana and Burkina Faso.' },
    { title: '6 Cargo Types', text: 'Fertilizer, cement, and cocoa moved with disciplined standards.' },
    { title: 'GPS-Tracked', text: 'Real-time transit monitoring for total control and visibility.' },
    { title: 'Our Timetable', text: 'We coordinate around farm demand, not a third-party calendar.' }
  ]

  return (
    <section id="fleet" className="min-h-screen border-t border-slate-200 bg-white py-12 text-slate-900 flex flex-col justify-center">
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Text & Micro-cards */}
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700/80">Our Haulage Fleet</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl tracking-tight leading-tight">
                We Don&apos;t Just Manufacture — We Deliver It Ourselves
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Our own distribution network manages time-sensitive port evacuation and regional supply routes directly, removing dependence on external transporters.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/fleet/quote"
                className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-500"
              >
                Request Haulage Quote
              </Link>
              <Link
                to="/fleet"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white"
              >
                View Our Fleet
              </Link>
            </div>

            {/* Structured Compact Grid */}
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              {fleetHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-normal">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image Container with Blended Green Overlay */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 h-50 sm:h-96 lg:h-[480px] shadow-sm">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={fleetBg}
                alt="Fleet dispatch and distribution support"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              
              {/* Green Overlay */}
              <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
            </div>
            
            {/* Context Floating Card */}
            <div className="absolute inset-x-0 bottom-0 p-4 z-10">
              <div className="rounded-2xl border border-white/10 bg-white/90 p-4 shadow-md backdrop-blur-md">
                <p className="text-xs font-semibold text-slate-900">Reliable haulage across every route</p>
                <p className="mt-1 text-xs text-slate-600 leading-normal">
                  From Tema Port to cross-border regional corridors, our fleet keeps supply chains moving with absolute precision.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}