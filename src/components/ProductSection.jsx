import { Link } from 'react-router-dom'
import { productNpkBagNoBg, productAmmoniaBagNoBg, productUreaBagNoBg } from '../assets/assetRegistry'

// ProductSection: highlights a few flagship products and directs visitors into the full catalog.
export default function ProductSection() {
  return (
    <section id="product" className="bg-white py-10 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">Product highlights</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Trusted products for modern farming</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From granular blends to precision-filled bags, our products are built for the farm and the field.
          </p>
         
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-slate-900">Chaleee NPK 20:10:10+7S</p>
            <p className="text-sm leading-7 text-slate-600">Registration: PFRD/PR/18/149-5 | Anti-Acid | 50kg</p>
            <p className="text-sm leading-7 text-slate-600">
              A balanced starter blend for maize, rice, vegetables and legumes with extra sulphur for stronger yield potential.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              Best for: maize, rice, vegetables, groundnuts, soybean.
            </p>
            <div className="mt-2">
              <Link to="/product" className="text-green-500 hover:underline text-sm">View Chaleee NPK</Link>
            </div>
          </div>

          <div className="overflow-hidden flex justify-center ">
            <img src={productNpkBagNoBg} alt="Chaleee NPK 20:10:10+7S" className="h-40 max-h-60 object-fill object-center" />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl px-6">
          <svg viewBox="0 0 560 96" className="h-24 w-full text-green-700">
            <path d="M20 68C120 0 220 124 320 56C420 -12 520 92 540 68" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <circle cx="20" cy="68" r="6" fill="currentColor" />
            <circle cx="320" cy="56" r="6" fill="currentColor" />
            <circle cx="540" cy="68" r="6" fill="currentColor" />
          </svg>
        </div>

        <div className="grid gap-3 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 overflow-hidden flex justify-center">
            <img src={productAmmoniaBagNoBg} alt="Sulphate of Ammonia 21%N 24%S" className="h-40 max-h-60 object-fill object-center" />
          </div>

          <div className="order-1 lg:order-2 space-y-3">
            <p className="text-lg font-semibold text-slate-900">Sulphate of Ammonia — 21%N 24%S</p>
            <p className="text-sm leading-7 text-slate-600">Anti-Acid Formula | 50kg</p>
            <p className="text-sm leading-7 text-slate-600">
              A nitrogen and sulphur blend made for crops that need fast growth and better quality while protecting soil acidity.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              Best for: cocoa, oil palm, brassicas, onions, sugarcane.
            </p>
            <div className="mt-2">
              <Link to="/product" className="text-green-500 hover:underline text-sm">View Sulphate of Ammonia</Link>
            </div>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-2 lg:items-center">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-slate-900">Chaleee Urea 46%N</p>
            <p className="text-sm leading-7 text-slate-600">Registration: PFRD/PR/18/149-4 | Anti-Acid | 50kg</p>
            <p className="text-sm leading-7 text-slate-600">
              Concentrated nitrogen for quick greening and strong topdressing response in maize, rice and vegetables.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              Best for: maize, rice, sugarcane, vegetables, pasture.
            </p>
            <div className="mt-4">
              <Link to="/product" className="text-green-500 hover:underline text-sm">View Chaleee Urea</Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl flex justify-center">
            <img src={productUreaBagNoBg} alt="Chaleee Urea 46%N" className="h-40 max-h-60 object-fill object-center" />
          </div>
        </div>
         <div className="mt-8">
            <Link
              to="/product"
              className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/30 transition hover:bg-emerald-700"
            >
              Browse all products
            </Link>
          </div>
      </div>
    </section>
  )
}
