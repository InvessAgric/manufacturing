import { facilityMainImage } from '../assets/assetRegistry'

// FacilitySection: explains the manufacturing plant and highlights the key operational strengths.
export default function FacilitySection() {
  return (
    <section id="manufacturing" className="bg-primary/20 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative h-96 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-sm">
            <img src={facilityMainImage} alt="Manufacturing plant" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
          </div>

          <div className="lg:pl-6">
            <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">About our facility</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Modern production, local roots</h2>
            <p className="mt-3 max-w-l text-slate-600 leading-relaxed">
              Our manufacturing plant combines precision blending technology with locally-sourced expertise — producing fertilizers tailored to Ghanaian soil and crop requirements.
            </p>

            <div className="mt-5 flex flex-col gap-4 w-full">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">Precision blending systems</h3>
                <p className="mt-2 text-slate-600 text-xs">
                  Automated ribbon blenders ensure consistent nutrient ratios across every batch.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">Reliable local supply</h3>
                <p className="mt-2 text-slate-600 text-xs">
                  Reduces import lead times and supports Ghanaian agricultural productivity year-round.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">Traceable from source</h3>
                <p className="mt-2 text-slate-600 text-xs">
                  Every batch is logged from raw material intake through final packaging and dispatch.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">Local agronomic support</h3>
                <p className="mt-2 text-slate-600 text-xs">
                  We pair manufacturing expertise with advisory services to help farmers get the most from every application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
