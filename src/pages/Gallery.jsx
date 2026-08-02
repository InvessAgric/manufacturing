import { Link } from 'react-router-dom'
import {
  akuseOfficeImage,
  conveyorSystemRawImage,
  dzorwuluOfficeImage,
  dzorwuluOfficeImageTwo,
  feederWithConveyorImage,
  feedersRawImage,
  hopperTopViewImage,
  industrialSewingSystemImage,
  storageWarehouseImage,
  warehouseImage,
  warehouseInsideImage,
  warehouseOutsideImage,
} from '../assets/assetRegistry'

const sections = [
  {
    title: 'Warehouse',
    description: 'Storage, bag handling, and dispatch zones that keep inventory moving safely and efficiently.',
    items: [
      { label: 'Warehouse exterior facade', image: warehouseOutsideImage, span: 'md:col-span-2 md:row-span-2' },
      { label: 'Warehouse interior storage', image: warehouseInsideImage, span: 'md:col-span-1 md:row-span-2' },
      { label: 'Loading yard view', image: warehouseImage, span: 'md:col-span-1 md:row-span-1' },
      { label: 'Dispatch yard area', image: storageWarehouseImage, span: 'md:col-span-1 md:row-span-1' },
    ],
  },
  {
    title: 'Machines',
    description: 'Core production equipment and process lines that power blending and packaging operations.',
    items: [
      { label: 'Conveyor system', image: conveyorSystemRawImage, span: 'md:col-span-2 md:row-span-2' },
      { label: 'Feeders line', image: feedersRawImage, span: 'md:col-span-1 md:row-span-1' },
      { label: 'Feeders with conveyor', image: feederWithConveyorImage, span: 'md:col-span-1 md:row-span-2' },
      { label: 'Hopper top view', image: hopperTopViewImage, span: 'md:col-span-1 md:row-span-1' },
      { label: 'Industrial sewing system', image: industrialSewingSystemImage, span: 'md:col-span-1 md:row-span-1' },
    ],
  },
  {
    title: 'Offices',
    description: 'Planning, quality coordination, and team spaces supporting daily plant operations.',
    items: [
      { label: 'Akuse office', image: akuseOfficeImage, span: 'md:col-span-2 md:row-span-2' },
      { label: 'Dzorwulu office', image: dzorwuluOfficeImage, span: 'md:col-span-1 md:row-span-1' },
      { label: 'Dzorwulu office area 2', image: dzorwuluOfficeImageTwo, span: 'md:col-span-1 md:row-span-1' },
    ],
  },
]

export default function Gallery() {
  return (
    <section className="bg-slate-50 px-6 pb-16 pt-20 text-slate-900 sm:pt-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-100 sm:p-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-700">Invess Gallery</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">More views from our operations</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Explore more visuals from our warehouse zones, machinery lines, and office-support functions that keep production and delivery on track.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              Back to home
            </Link>
          </div>
        </header>

        {sections.map((section) => {
          return (
          <section key={section.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{section.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[150px]">
              {section.items.map((item) => (
                <article
                  key={item.label}
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm ${item.span}`}
                >
                  <div className="relative h-full min-h-[220px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-3 px-3">
                      <span className="inline-block rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow sm:text-sm">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          )
        })}
      </div>
    </section>
  )
}
