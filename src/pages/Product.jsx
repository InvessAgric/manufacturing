import { Link } from 'react-router-dom'
import productHeader from '../assets/images/productheader.png'
import productBanner from '../assets/images/productbanner.png'
import { products } from '../data/products'

// Product page component: lists product features and offerings
function Product() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="relative overflow-hidden bg-emerald-900/95">
        <img
          src={productHeader}
          alt="Product header"
          className="h-72 w-full object-cover opacity-80 sm:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 to-emerald-950/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-200/90">Explore our full range</p>
          <h1 className="text-3xl font-semibold sm:text-5xl">Product solutions for every stage of the season</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-emerald-100/90 sm:text-lg">
            A wider view of our fertilizer and crop-input portfolio, built to improve soil health, boost yield, and support dependable farm results.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
       
        <section className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Product leadership</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">All our products in one place</h2>
              <p className="mt-6 text-slate-600 leading-8">
                Invess Agric’s product page brings together our flagship fertilizer blends, nitrogen and sulphur formulas, and farmer-centric inputs in a single reference.
              </p>
              <p className="mt-4 text-slate-600 leading-8">
                Every product is designed to support crop nutrition, soil structure, and resilient harvests across Ghana’s diverse growing conditions.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-slate-100 p-6">
              <div className="grid gap-4">
                <div className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <h3 className="font-semibold text-slate-900">Built for reliable results</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    From starter formulas to finish-stage topdressings, our options are structured for predictable field performance.
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <h3 className="font-semibold text-slate-900">Local manufacturing</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Manufactured in Ghana to lower delivery times, support local supply chains and improve availability for farmers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
 
          <img
            src={productBanner}
            alt="Product banner"
            className="h-52 w-full object-contain shadow-2xl shadow-slate-500   sm:h-72"
          />
       
              <section className="grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-500">
              <div className="mb-6 h-48 overflow-hidden rounded-[1.5rem] bg-slate-100 flex items-center justify-center">
                <img src={product.image} alt={product.alt} className="h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{product.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{product.summary}</p>
              <Link
                to={`/product/${product.slug}`}
                className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                View details
              </Link>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Product
