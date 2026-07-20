import { galleryImageOne, galleryImageTwo, galleryImageThree, heroBackground } from '../assets/assetRegistry'

// GallerySection: presents a visual overview of the plant and production environment.
export default function GallerySection() {
  const items = [
    { label: 'Factory exterior', img: galleryImageOne },
    { label: 'Mixing area', img: galleryImageTwo },
    { label: 'Packing line', img: galleryImageThree },
    { label: 'Warehouse', img: heroBackground },
  ]

  return (
    <section id="gallery" className="relative overflow-hidden bg-slate-950 py-16 text-white">
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-emerald-900/90 to-green-950/95" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/90">Factory gallery</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          A closer look at the plant
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-x-0 bottom-3 px-3">
                  <span className="block rounded-full bg-white/95 px-3 py-2 text-center text-sm font-semibold text-emerald-700 shadow">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
