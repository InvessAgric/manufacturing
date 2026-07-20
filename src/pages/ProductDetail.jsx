
import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { products } from '../data/products'
import { productBannerImage, productNpkBagImage, productUreaBagImage, productAmmoniaBagImage } from '../assets/assetRegistry'

function ProductDetail() {
  // Resolve the currently selected product from the route parameter so the page can render its matching details.
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  // Build the list of related products that appears in the lower carousel section.
  const relatedProducts = useMemo(
    () => products.filter((item) => item.slug !== slug).slice(0, 6),
    [slug]
  )
  // Track the active index for the related-products carousel and the plant-type gallery.
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [plantCarouselIndex, setPlantCarouselIndex] = useState(0)

  // Slice the related products array into the visible set for the current carousel page.
  const visibleProducts = relatedProducts.slice(carouselIndex, carouselIndex + 3)

  // Enable or disable the previous/next buttons based on whether more items exist in the carousel.
  const canPrev = carouselIndex > 0
  const canNext = carouselIndex + 3 < relatedProducts.length

  // Create a visual gallery for the plant types using product images, with fallback labels if the product has no plant data.
  const plantTypes = useMemo(() => {
    const rawPlants = product?.plant && product.plant.length > 0
      ? product.plant
      : ['Maize', 'Rice', 'Vegetables', 'Legumes', 'Cocoa']

    return rawPlants.map((plant, index) => {
      const imageSet = [productNpkBagImage, productUreaBagImage, productAmmoniaBagImage, productBannerImage]
      return {
        label: plant,
        image: imageSet[index % imageSet.length],
      }
    })
  }, [product])

  // Slice the plant-type gallery into the currently visible cards for the small carousel.
  const visiblePlantTypes = plantTypes.slice(plantCarouselIndex, plantCarouselIndex + 3)

  // Control whether the plant-type gallery can move backwards or forwards.
  const canPlantPrev = plantCarouselIndex > 0
  const canPlantNext = plantCarouselIndex + 3 < plantTypes.length

  // Redirect to the product listing page if the requested slug does not match any known product.
  if (!product) {
    return <Navigate to="/product" replace />
  }

  return (
    <section className="bg-slate-50 text-slate-900 py-10">
      <div className="mx-auto max-w-6xl space-y-5 px-4 sm:px-6">
        {/* Hero section: presents the selected product headline, description, and main visual asset. */}
        <div className="rounded-[1.5rem] bg-white p-5 shadow-lg ring-1 ring-slate-200 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">Product detail</p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{product.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{product.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {/* Navigation link back to the main product catalog. */}
                <Link
                  to="/product"
                  className="inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Back to products
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.25rem] bg-slate-100 p-4">
              {/* Display the primary product image centered in the hero card. */}
              <img src={product.image} alt={product.alt} className="h-[70%] w-[70%] object-contain" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Detailed information section: shows benefits, composition, usage, packaging, and other supporting details. */}
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[1.25rem] bg-white p-4 shadow-lg ring-1 ring-slate-200 sm:p-5">
            <h2 className="text-lg font-semibold text-slate-900">Key benefits</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
              {/* Render each benefit bullet as a short, scannable list item. */}
              {product.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.25rem] bg-white p-4 shadow-lg ring-1 ring-slate-200 sm:p-5 lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900">Composition & usage</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{product.composition}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1rem] bg-emerald-50 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Use case</h3>
                <p className="mt-2 text-slate-600">{product.useCase}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{product.useCaseDetails}</p>
              </div>
              <div className="rounded-[1rem] bg-emerald-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Plant types</h3>
                  <div className="flex gap-2">
                    {/* Navigate backward through the plant-type gallery. */}
                    <button
                      type="button"
                      onClick={() => setPlantCarouselIndex((prev) => Math.max(prev - 1, 0))}
                      disabled={!canPlantPrev}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-white text-slate-900 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      ‹
                    </button>
                    {/* Navigate forward through the plant-type gallery. */}
                    <button
                      type="button"
                      onClick={() => setPlantCarouselIndex((prev) => Math.min(prev + 1, plantTypes.length - 3))}
                      disabled={!canPlantNext}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200 bg-white text-slate-900 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      ›
                    </button>
                  </div>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {/* Render the currently visible plant-type cards in the gallery. */}
                  {visiblePlantTypes.map(({ label, image }) => (
                    <div key={label} className="overflow-hidden rounded-[1rem] border border-emerald-200 bg-white shadow-sm">
                      <img src={image} alt={label} className="h-24 w-full object-cover" loading="lazy" />
                      <div className="px-3 py-2 text-sm font-medium text-slate-700">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1rem] border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-emerald-900">Manufacturing message</h3>
              <p className="mt-2 text-sm leading-7 text-emerald-800">{product.manufacturingMessage}</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1rem] bg-slate-50 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">Packaging</h3>
                <p className="mt-2 text-slate-600">{product.packaging}</p>
              </div>
              <div className="rounded-[1rem] bg-slate-50 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">Product details</h3>
                <p className="mt-2 text-slate-600">{product.summary}</p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-slate-900">Features</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600 sm:grid-cols-2">
                {/* Show the feature list as a compact two-column set of bullets. */}
                {(product.features || []).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold text-slate-900">Used for</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                {/* Render the usage applications for the product in a simple list. */}
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


        {/* Related products carousel: lets visitors browse additional products without leaving the current page. */}
        <div className="rounded-[1.25rem] bg-white p-4 shadow-lg ring-1 ring-slate-200 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">Related products</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-900">You may also like</h2>
            </div>
            <div className="flex gap-2">
              {/* Move the related-products carousel backward one step. */}
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => Math.max(prev - 1, 0))}
                disabled={!canPrev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ‹
              </button>
              {/* Move the related-products carousel forward one step. */}
              <button
                type="button"
                onClick={() => setCarouselIndex((prev) => Math.min(prev + 1, relatedProducts.length - 3))}
                disabled={!canNext}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {/* Render only the currently visible related product cards. */}
            {visibleProducts.map((item) => (
              <Link
                key={item.slug}
                to={`/product/${item.slug}`}
                className="block rounded-[1rem] border border-slate-200 bg-slate-50 p-4 text-slate-900 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white"
              >
                <div className="mb-3 h-28 overflow-hidden rounded-[0.9rem] bg-white p-3">
                  <img src={item.image} alt={item.alt} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
   </div>
    </section>
  )
}

export default ProductDetail
