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
    <section id="gallery" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">Factory gallery</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A closer look at the plant</h2>
<div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-4">
  {items.map((item) => (
    <div
      key={item.label}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.label}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-x-0 bottom-3 bg-black/30">
          <span className="rounded-full bg-white px-3 py-2 text-center text-sm font-semibold text-green-500 shadow">
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
