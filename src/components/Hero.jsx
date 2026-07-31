import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  adNpkImage,
  adUreaImage,
  founderImage,
  heroBackground,
  productHeaderImage,
} from '../assets/assetRegistry'
import useParallax from '../hooks/useParallax'

const heroSlides = [
  {
    id: 'home',
    image: heroBackground,
    overlay: 'bg-black/45',
    badge: 'Blended fertilizer manufacturing · Accra, Ghana',
    title: "Manufacturing Ghana's future in crop nutrition",
    description:
      'Premium blended fertilizers produced with advanced manufacturing technology and strict quality standards, built for Ghanaian agriculture.',
    primaryCta: { type: 'anchor', label: 'Explore our plant', href: '#manufacturing' },
    secondaryCta: { type: 'link', label: 'Contact sales', to: '/contact' },
  },
  {
    id: 'about',
    image: founderImage,
    overlay: 'bg-emerald-950/60',
    badge: 'About us',
    title: 'Know more about Invess Agriculture',
    description:
      'Learn our story, leadership, and commitment to delivering quality crop nutrition products that strengthen farming outcomes across Ghana.',
    primaryCta: { type: 'link', label: 'Know about us', to: '/about' },
    secondaryCta: { type: 'link', label: 'Meet our team', to: '/team' },
  },
  {
    id: 'products',
    image: productHeaderImage,
    overlay: 'bg-slate-900/55',
    badge: 'Our products',
    title: 'Explore our complete product portfolio',
    description:
      'Browse our fertilizers and crop inputs developed for balanced plant nutrition, strong growth, and dependable yield performance.',
    primaryCta: { type: 'link', label: 'View products', to: '/product' },
    secondaryCta: { type: 'link', label: 'Request quotation', to: '/contact' },
  },
  {
    id: 'npk-campaign',
    image: adNpkImage,
    overlay: 'bg-emerald-950/55',
    badge: 'Featured campaign',
    title: 'NPK nutrition campaigns now lead into the catalog',
    description:
      'Use the home hero to jump straight into our nitrogen-forward NPK range for vigorous growth and balanced field performance.',
    primaryCta: { type: 'link', label: 'Open NPK product', to: '/product/npk-23105te' },
    secondaryCta: { type: 'link', label: 'Browse all products', to: '/product' },
  },
  {
    id: 'urea-campaign',
    image: adUreaImage,
    overlay: 'bg-slate-950/55',
    badge: 'Featured campaign',
    title: 'Urea campaign slides now connect to the product page',
    description:
      'Visitors can move from the hero banner directly into the UREA 46%N product detail page instead of stopping at a generic ad view.',
    primaryCta: { type: 'link', label: 'Open UREA product', to: '/product/urea-46n' },
    secondaryCta: { type: 'link', label: 'Talk to sales', to: '/contact' },
  },
]

function HeroCta({ cta, primary = false }) {
  const className = primary
    ? 'inline-flex items-center justify-center rounded-full border border-primary bg-primary px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:text-sm'
    : 'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 sm:text-sm'

  if (cta.type === 'anchor') {
    return (
      <a href={cta.href} className={className}>
        {cta.label}
      </a>
    )
  }

  return (
    <Link to={cta.to} className={className}>
      {cta.label}
    </Link>
  )
}

// Hero section for the landing page; introduces the brand and provides primary calls to action.
export default function Hero() {
  const heroImageRef = useParallax(0.14, 56, 1.1)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [])

  const slide = heroSlides[currentSlide]

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden text-white">
      <img
        ref={heroImageRef}
        src={slide.image}
        alt="Hero background"
        className="parallax-media absolute inset-0 h-full w-full object-cover transition-all duration-700"
        fetchPriority="high"
        decoding="async"
      />
      <div className={`absolute inset-0 ${slide.overlay} transition-all duration-700`} />
      <section className="relative flex h-full items-center justify-center py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="h-100 rounded-4xl border border-white/12 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-14">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-100/90">
              {slide.badge}
            </p>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 sm:text-lg text-green-100/90">
              {slide.description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
              <HeroCta cta={slide.primaryCta} primary />
              <HeroCta cta={slide.secondaryCta} />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              >
                ‹
              </button>

              <div className="flex items-center gap-2">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${currentSlide === index ? 'w-7 bg-white' : 'w-2.5 bg-white/40'}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
