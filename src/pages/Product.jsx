import { useAtom } from 'jotai'
import { Link } from 'react-router-dom'
import AdCarousel from '../components/AdCarousel'
import {
  adMaizeUreaBannerImage,
  adNpkCornBannerImage,
  adPalmBannerImage,
  adRiceUreaBannerImage,
  adSulphateBannerImage,
  adTomatoesBannerImage,
  productHeaderImage,
} from '../assets/assetRegistry'
import { productsAtom, productPaginationAtom } from '../store/productsStore'

// Collection of promotional slide data for the product banner carousel.
// Each item uses WebP ads from the ADs folder so the banner stays lightweight and consistent.
const productAdSlides = [

  {
    src: adMaizeUreaBannerImage,
    alt: 'Maize urea campaign ad',
    title: 'Maize urea spotlight',
    caption: 'A crop-focused banner for maize nutrition and seasonal input planning.',
  },
  {
    src: adNpkCornBannerImage,
    alt: 'NPK corn campaign ad',
    title: 'NPK corn focus',
    caption: 'A banner highlighting balanced nutrition advice for corn growers.',
  },
 
  {
    src: adPalmBannerImage,
    alt: 'Palm banner ad',
    title: 'Palm crop focus',
    caption: 'A fresh banner for palm crop nutrition and seasonal promotion.',
  },
  {
    src: adRiceUreaBannerImage,
    alt: 'Rice urea campaign ad',
    title: 'Rice urea support',
    caption: 'A promotion tailored to rice production and crop performance.',
  },

  {
    src: adSulphateBannerImage,
    alt: 'Sulphate campaign ad',
    title: 'Sulphate support',
    caption: 'A rotating banner for sulphate-based crop nourishment content.',
  },
  {
    src: adTomatoesBannerImage,
    alt: 'Tomatoes campaign ad',
    title: 'Tomato crop focus',
    caption: 'A banner centered on tomato crop support and nutrient planning.',
  },
]

// Reusable pagination control for moving between product sets.
// It keeps the UI consistent for the top and bottom navigation areas on the page.
// Shared UI for the product pagination controls.
// It receives the current page context and exposes previous/next handlers for navigation.
function PaginationControls({ title, helperText, currentSet, totalSets, canPrev, canNext, onPrev, onNext }) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.25rem] border border-slate-200 bg-white/80 p-3 shadow-sm sm:rounded-3xl sm:p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {/* Optional heading shown above the controls when the component is used in a featured section. */}
        {title ? <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 sm:text-sm sm:tracking-[0.3em]">{title}</p> : null}
        {/* Optional helper text used to explain which product set is currently being displayed. */}
        {helperText ? <p className="text-sm text-slate-600">{helperText}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        {/* Previous-set button: disabled when the user is already on the first page of products. */}
        <button
          type="button"
          onClick={onPrev}
          disabled={!canPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-9 sm:w-9"
        >
          ‹
        </button>
        {/* Displays the current set number and total number of available sets. */}
        {currentSet && totalSets ? (
          <span className="min-w-20 text-center text-sm font-medium text-slate-600">
            Set {currentSet}/{totalSets}
          </span>
        ) : null}
        {/* Next-set button: disabled when the current view is already at the last available set. */}
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

// Product page component: renders the full product catalog in paginated sets.
// The layout combines a hero banner, supporting information, promotional content,
// and a responsive product card grid so visitors can browse the range comfortably.
function Product() {
  // Read the product catalog and pagination state from the shared Jotai store.
  // Access the product list from the global store so the page can render the catalog dynamically.
  const [products] = useAtom(productsAtom)
  // Access pagination state so the UI can move through product sets without losing context.
  const [pagination, setPagination] = useAtom(productPaginationAtom)
  const { startIndex, pageSize } = pagination

  // Calculate which products should be visible for the current page window.
  const visibleProducts = products.slice(startIndex, startIndex + pageSize)
  // Determine the final valid start index so the last partial page is still reachable.
  const lastPageStartIndex = Math.max(products.length - (products.length % pageSize || pageSize), 0)
  // Controls whether the previous and next buttons should be enabled.
  const canPrev = startIndex > 0
  const canNext = startIndex < lastPageStartIndex
  // Derive the current set number and total number of sets from the current start index.
  const currentSet = Math.floor(startIndex / pageSize) + 1
  const totalSets = Math.ceil(products.length / pageSize)

  // Update the pagination state when the user moves to a different product set.
  // This keeps the visible products in sync with the selected page window.
  const updatePagination = (nextStartIndex) => {
    setPagination((prev) => ({ ...prev, startIndex: nextStartIndex }))
  }

  return (
    <section className="bg-slate-50 text-slate-900  ">
      {/* Hero section for the product catalog landing area. */}
      <div className="relative overflow-hidden bg-emerald-900/95 pt-20">
        <img
          src={productHeaderImage}
          alt="Product header"
          className="h-64 w-full object-cover opacity-80 sm:h-80 lg:h-96"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-b from-emerald-900/60 to-emerald-950/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          {/* Hero headline and supporting text for the product catalog landing area. */}
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.32em] text-emerald-200/90 sm:mb-4 sm:text-sm sm:tracking-[0.35em]">Explore our full range</p>
          <h1 className="max-w-[16rem] text-2xl font-semibold leading-tight sm:max-w-3xl sm:text-4xl lg:text-5xl">Product solutions for every stage of the season</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-100/90 sm:mt-4 sm:max-w-3xl sm:text-base sm:leading-7 lg:text-lg">
            A wider view of our fertilizer and crop-input portfolio, built to improve soil health, boost yield, and support dependable farm results.
          </p>
        </div>
      </div>

      <div className="mx-auto   px-4 py-10 sm:space-y-12 sm:px-6 sm:py-16">
        {/* Intro content that explains the purpose and value of the product range. */}
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

        {/* Promotional carousel shown above the catalog to surface featured campaigns. */}
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
          onNext={() => updatePagination(Math.min(startIndex + pageSize, lastPageStartIndex))}
        />

        {/* Responsive grid of product cards that links each item to its detail view. */}
        {/* Renders the currently visible products as clickable cards that navigate to their detail pages. */}
        <section className="grid gap-4 grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              className="group rounded-[1.25rem] bg-white p-3.5 shadow-lg shadow-slate-300 transition duration-200 hover:-translate-y-1 hover:bg-emerald-50 sm:rounded-3xl sm:p-4"
              aria-label={`View details for ${product.title}`}
            >
              <article>
                {/* Product image container keeps the visual layout consistent across cards. */}
                <div className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-[1.1rem] bg-slate-100 sm:h-36 sm:rounded-[1.25rem]">
                  <img src={product.image} alt={product.alt} className="h-full object-contain" loading="lazy" decoding="async" />
                </div>
                {/* Product title and summary provide the main identifying details for each card. */}
                <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
                <p className="mt-2 hidden lg:flex text-sm leading-6 text-slate-600">{product.description}</p>
                {/* Bullet points highlight the key features or benefits of each product. */}
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            </Link>
          ))}
        </section>

        {/* Bottom pagination control that mirrors the top navigation for easier browsing. */}
        <PaginationControls
          helperText={`Showing products from set ${currentSet} of ${totalSets}`}
          currentSet={currentSet}
          totalSets={totalSets}
          canPrev={canPrev}
          canNext={canNext}
          onPrev={() => updatePagination(Math.max(startIndex - pageSize, 0))}
          onNext={() => updatePagination(Math.min(startIndex + pageSize, lastPageStartIndex))}
        />
      </div>
    </section>
  )
}

export default Product
