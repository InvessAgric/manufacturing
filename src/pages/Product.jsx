import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import AdCarousel from '../components/AdCarousel'
import {
  adActivateImage,
  adProductImage,
  adSulInFarmImage,
  adSulphateImage,
  productHeaderImage,
} from '../assets/assetRegistry'
import { productsAtom, productPaginationAtom } from '../store/productsStore'

const productAdSlides = [
  {
    src: adActivateImage,
    alt: 'Activate campaign ad',
    title: 'Activate campaign',
    caption: 'A featured promotion for higher engagement around seasonal input planning.',
  },
  {
    src: adProductImage,
    alt: 'Product campaign ad',
    title: 'Product spotlight',
    caption: 'Highlighting core fertilizer ranges and the value of dependable supply.',
  },
  {
    src: adSulInFarmImage,
    alt: 'Sulphur in farm campaign ad',
    title: 'Sulphur in farm',
    caption: 'Messaging focused on sulphur nutrition and crop vitality.',
  },
  {
    src: adSulphateImage,
    alt: 'Sulphate campaign ad',
    title: 'Sulphate support',
    caption: 'A rotating banner for sulphate-based crop nourishment content.',
  },
]

// Small reusable component for the product-list pagination controls.
function PaginationControls({ title, helperText, currentSet, totalSets, canPrev, canNext, onPrev, onNext }) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.25rem] border border-slate-200 bg-white/80 p-3 shadow-sm sm:rounded-3xl sm:p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {title ? <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 sm:text-sm sm:tracking-[0.3em]">{title}</p> : null}
        {helperText ? <p className="text-sm text-slate-600">{helperText}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-9 sm:w-9"
        >
          ‹
        </button>
        {currentSet && totalSets ? (
          <span className="min-w-20 text-center text-sm font-medium text-slate-600">
            Set {currentSet}/{totalSets}
          </span>
        ) : null}
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-9 sm:w-9"
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
          className="h-64 w-full object-cover opacity-80 sm:h-80 lg:h-96"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-900/60 to-emerald-950/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.32em] text-emerald-200/90 sm:mb-4 sm:text-sm sm:tracking-[0.35em]">Explore our full range</p>
          <h1 className="max-w-[16rem] text-2xl font-semibold leading-tight sm:max-w-3xl sm:text-4xl lg:text-5xl">Product solutions for every stage of the season</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-100/90 sm:mt-4 sm:max-w-3xl sm:text-base sm:leading-7 lg:text-lg">
            A wider view of our fertilizer and crop-input portfolio, built to improve soil health, boost yield, and support dependable farm results.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:space-y-12 sm:px-6 sm:py-16">
       
        <section className="rounded-[1.75rem] bg-white p-5 shadow-lg ring-1 ring-slate-200 sm:rounded-4xl sm:p-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 sm:text-sm sm:tracking-[0.3em]">Product leadership</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:mt-4 sm:text-3xl">All our products in one place</h2>
              <p className="mt-4 leading-7 text-slate-600 sm:mt-6 sm:leading-8">
                Invess Agric’s product page brings together our flagship fertilizer blends, nitrogen and sulphur formulas, and farmer-centric inputs in a single reference.
              </p>
              <p className="mt-3 leading-7 text-slate-600 sm:mt-4 sm:leading-8">
                Every product is designed to support crop nutrition, soil structure, and resilient harvests across Ghana’s diverse growing conditions.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-slate-100 p-4 sm:rounded-4xl sm:p-6">
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

        <AdCarousel
          variant="banner"
          eyebrow="Product banner"
          title="Current product promotions"
          description="A rotating banner placed above the catalog to surface active product marketing and keep the page visually current."
          images={productAdSlides}
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

        <section className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="group rounded-[1.25rem] bg-white p-3.5 shadow-lg shadow-slate-300 transition duration-200 hover:-translate-y-1 hover:bg-emerald-50 sm:rounded-3xl sm:p-4"
              aria-label={`View details for ${product.title}`}
            >
              <article>
                <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-[1.1rem] bg-slate-100 sm:h-36 sm:rounded-[1.25rem]">
                  <img src={product.image} alt={product.alt} className="h-full object-contain" loading="lazy" decoding="async" />
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
