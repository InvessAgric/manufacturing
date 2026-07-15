import { facilityHopperImage, facilityConveyorImage, facilityFeedersImage } from '../assets/assetRegistry'

// EquipmentSection: showcases the plant equipment used in the manufacturing process.
export default function EquipmentSection() {
  return (
    <section id="equipment" className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">Manufacturing equipment</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">The machinery behind every bag</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${facilityHopperImage})` }}></div>
            <div className="relative min-h-[240px] bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold text-white">Storage Hopper</h3>
              <p className="mt-3 text-slate-200">
                Horizontal double-ribbon agitator for uniform multi-nutrient blending at scale.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${facilityConveyorImage})` }}></div>
            <div className="relative min-h-[240px] bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold text-white">Conveyor systems</h3>
              <p className="mt-3 text-slate-200">
                Enclosed belt conveyors move raw materials and finished product with minimal dust loss.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${facilityFeedersImage})` }}></div>
            <div className="relative min-h-[240px] bg-slate-950/40 p-6">
              <h3 className="text-xl font-semibold text-white">Feeders</h3>
              <p className="mt-3 text-slate-200">
                Automated net-weight filler and stitcher for 25 kg and 50 kg polypropylene bags.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
