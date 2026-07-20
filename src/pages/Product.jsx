import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import { productHeaderImage, productBannerImage } from '../assets/assetRegistry'
import { productsAtom, productPaginationAtom } from '../store/productsStore'

// Small reusable component for the product-list pagination controls.
function PaginationControls({ title, helperText, currentSet, totalSets, canPrev, canNext, onPrev, onNext }) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        {title ? <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{title}</p> : null}
        {helperText ? <p className="text-sm text-slate-600">{helperText}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ‹
        </button>
        {currentSet && totalSets ? (
          <span className="min-w-[5rem] text-center text-sm font-medium text-slate-600">
            Set {currentSet}/{totalSets}
          </span>
        ) : null}
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  )
}

// Product page component: displays the product catalog in paginated sets.
function Product() {
  // Read the product catalog and pagination state from Jotai atoms.
  const [products] = useAtom(productsAtom)
  const [pagination, setPagination] = useAtom(productPaginationAtom)
  const { startIndex, pageSize } = pagination

  // Determine which products are visible for the current page window.
  const visibleProducts = products.slice(startIndex, startIndex + pageSize)
  const canPrev = startIndex > 0
  const canNext = startIndex + pageSize < products.length
  const currentSet = Math.floor(startIndex / pageSize) + 1
  const totalSets = Math.ceil(products.length / pageSize)

  // Update the pagination state when the user moves to a different set.
  const updatePagination = (nextStartIndex) => {
    setPagination((prev) => ({ ...prev, startIndex: nextStartIndex }))
  }

  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="relative overflow-hidden bg-emerald-900/95">
        <img
          src={productHeaderImage}
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
            src={productBannerImage}
            alt="Product banner"
            className="h-52 w-full object-contain shadow-2xl shadow-slate-500   sm:h-72"
          />
        <PaginationControls
          title="Featured products"
          currentSet={currentSet}
          totalSets={totalSets}
          canPrev={canPrev}
          canNext={canNext}
          onPrev={() => updatePagination(Math.max(startIndex - pageSize, 0))}
          onNext={() => updatePagination(Math.min(startIndex + pageSize, products.length - pageSize))}
        />

        <section className="grid gap-5 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="group rounded-[1.5rem] bg-white p-4 shadow-lg shadow-slate-300 transition duration-200 hover:-translate-y-1 hover:bg-emerald-50"
              aria-label={`View details for ${product.title}`}
            >
              <article>
                <div className="mb-4 flex  h-36 items-center justify-center overflow-hidden rounded-[1.25rem] bg-slate-100">
                  <img src={product.image} alt={product.alt} className="h-full object-contain" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            </Link>
          ))}
        </section>

        <PaginationControls
          helperText={`Showing products from set ${currentSet} of ${totalSets}`}
          currentSet={currentSet}
          totalSets={totalSets}
          canPrev={canPrev}
          canNext={canNext}
          onPrev={() => updatePagination(Math.max(startIndex - pageSize, 0))}
          onNext={() => updatePagination(Math.min(startIndex + pageSize, products.length - pageSize))}
        />
      </div>
    </section>
  )
}

export default Product
