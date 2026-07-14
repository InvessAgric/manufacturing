
import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== slug).slice(0, 6),
    [slug]
  )
  const [carouselIndex, setCarouselIndex] = useState(0)
  const visibleProducts = relatedProducts.slice(carouselIndex, carouselIndex + 3)
  const canPrev = carouselIndex > 0
  const canNext = carouselIndex + 3 < relatedProducts.length

  if (!product) {
    return <Navigate to="/product" replace />
  }

  return (
    <section className="bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Product detail</p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900">{product.title}</h1>
              <p className="mt-4 max-w-3xl text-slate-600 leading-8">{product.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/product"
                  className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Back to products
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 p-6">
              <img src={product.image} alt={product.alt} className="h-full w-full object-contain" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Key benefits</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {product.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-lg ring-1 ring-slate-200 lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">Composition & usage</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{product.composition}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-emerald-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Use case</h3>
                <p className="mt-3 text-slate-600">{product.useCase}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{product.useCaseDetails}</p>
              </div>
              <div className="rounded-[1.5rem] bg-emerald-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant types</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(product.plant || []).map((plant) => (
                    <span key={plant} className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm text-slate-700">
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-lg font-semibold text-emerald-900">Manufacturing message</h3>
              <p className="mt-3 text-sm leading-7 text-emerald-800">{product.manufacturingMessage}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Packaging</h3>
                <p className="mt-3 text-slate-600">{product.packaging}</p>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">Product details</h3>
                <p className="mt-3 text-slate-600">{product.summary}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">Features</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600 sm:grid-cols-2">
                {(product.features || []).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900">Used for</h3>
              <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600">
                {(product.usedFor || []).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        <div className="rounded-[2rem] bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Related products</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">You may also like</h2>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => Math.max(prev - 1, 0))}
                disabled={!canPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => Math.min(prev + 1, relatedProducts.length - 3))}
                disabled={!canNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {visibleProducts.map((item) => (
              <Link
                key={item.slug}
                to={`/product/${item.slug}`}
                className="block rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white"
              >
                <div className="mb-4 h-36 overflow-hidden rounded-[1.5rem] bg-white p-4">
                  <img src={item.image} alt={item.alt} className="h-full w-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
   </div>
    </section>
  )
}

export default ProductDetail
