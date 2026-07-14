import galleryExterior from '../assets/images/aboutimage1.jpg'
import galleryMixing from '../assets/images/aboutimage2.jpg'
import galleryPacking from '../assets/images/aboutimage3.jpg'
import galleryWarehouse from '../assets/images/bg.jpg'

// GallerySection: update titles to reflect factory zones or add image cards later
export default function GallerySection() {
  const items = [
    { label: 'Factory exterior', img: galleryExterior },
    { label: 'Mixing area', img: galleryMixing },
    { label: 'Packing line', img: galleryPacking },
    { label: 'Warehouse', img: galleryWarehouse },
  ]

  return (
    <section id="gallery" className="bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">Factory gallery</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A closer look at the plant</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img src={item.img} alt={item.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-4 py-4 text-left">
                  <p className="text-sm font-semibold items-center text-center  mx-auto  bg-white rounded-3xl w-37.5 text-green-400">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
