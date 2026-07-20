import { Link } from 'react-router-dom'
import { fleetBg } from '../assets/assetRegistry'

// FleetSection: highlights the transport and distribution support behind delivery operations.
export default function FleetSection() {
  const fleetHighlights = [
    {
      title: '100 Trucks',
      text: 'A dedicated haulage fleet moving product across Ghana and into Burkina Faso.'
    },
    {
      title: '6 Cargo Types',
      text: 'Fertilizer, cement, and cocoa are moved with the same disciplined handling standards.'
    },
    {
      title: 'GPS-Tracked',
      text: 'Every trip is monitored in real time for visibility, accountability, and control.'
    },
    {
      title: 'On Our Schedule',
      text: 'We move cargo on our own timetable, not someone else’s.'
    }
  ]

  return (
    <section id="fleet" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
              Our Haulage Fleet
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              We Don&apos;t Just Manufacture Fertilizer — We Deliver It Ourselves
            </h2>

            <p className="max-w-lg text-sm leading-relaxed text-white/70">
              A 100-truck fleet moving fertilizer, cement, and cocoa from Tema Port to farms across Ghana and into Burkina Faso — fully GPS-tracked, on our own schedule, not someone else&apos;s.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/fleet/quote"
                className="rounded-full border border-emerald-400/60 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Request Haulage Quote
              </Link>
              <Link
                to="/fleet"
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
              >
                View Our Fleet
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {fleetHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm backdrop-blur"
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 shadow-2xl">
            <img
              src={fleetBg}
              alt="Fleet dispatch and distribution support"
              className="h-full min-h-[320px] w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">Reliable haulage across every route</p>
                <p className="mt-1 text-sm text-white/80">
                  From Tema Port to farms and regional corridors, our fleet keeps goods moving with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}