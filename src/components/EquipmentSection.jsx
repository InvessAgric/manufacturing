import { 
  facilityHopperImage, 
  facilityConveyorImage, 
  facilityFeedersImage 
} from '../assets/assetRegistry'

// EquipmentSection: showcases the plant equipment used in the manufacturing process.
export default function EquipmentSection() {
  const equipment = [
    {
      image: facilityHopperImage,
      title: "Storage Hopper",
      text: "Horizontal double-ribbon agitator for uniform multi-nutrient blending at scale."
    },
    {
      image: facilityConveyorImage,
      title: "Conveyor Systems",
      text: "Enclosed belt conveyors move raw materials and finished product with minimal dust loss."
    },
    {
      image: facilityFeedersImage,
      title: "Feeders",
      text: "Automated net-weight filler and stitcher for 25 kg and 50 kg polypropylene bags."
    }
  ]

  return (
    <section id="equipment" className="bg-slate-50 py-5 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-green-700/70">
          Manufacturing equipment
        </p>

        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          The machinery behind every bag
        </h2>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {equipment.map((item) => (
            <div
              key={item.title}
              className="group relative h-36 overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-slate-950/50"></div>

              <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-200">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}