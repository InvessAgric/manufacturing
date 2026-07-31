import { useEffect, useState } from 'react'

function AdCarousel({ eyebrow, title, description, images, variant = 'feature' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length < 2) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [images])

  if (!images || images.length === 0) {
    return null
  }

  const currentImage = images[activeIndex]
  const isBanner = variant === 'banner'
  const bannerSectionClassName = 'mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8'
  const featureSectionClassName = 'mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14'
  const bannerFrameClassName = 'relative overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-2xl shadow-slate-900/20 sm:rounded-[2.5rem]'
  const featureFrameClassName = 'overflow-hidden rounded-[1.75rem] bg-white p-4 shadow-xl shadow-slate-200 ring-1 ring-slate-200 sm:rounded-[2.5rem] sm:p-5 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch'

  const moveToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length)
  }

  const moveToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
  }

  return (
    <section className={isBanner ? bannerSectionClassName : featureSectionClassName}>
      <div className={isBanner ? bannerFrameClassName : featureFrameClassName}>
        <div className={isBanner ? 'relative aspect-5/6 min-h-96 sm:aspect-video lg:aspect-16/6' : 'rounded-3xl bg-slate-950 p-4 text-white sm:rounded-4xl sm:p-6 lg:p-8'}>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className={isBanner ? 'h-full w-full object-cover opacity-90' : 'h-full w-full rounded-3xl object-cover'}
            loading="lazy"
            decoding="async"
          />
          <div className={isBanner ? 'absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-900/45 to-slate-900/10' : 'hidden'} />
          <div
            className={
              isBanner
                ? 'absolute inset-0 flex flex-col justify-end p-4 text-white sm:p-8 lg:p-10'
                : 'mt-4 grid gap-4 text-white sm:mt-6'
            }
          >
            <div className={isBanner ? 'max-w-[18rem] sm:max-w-2xl' : undefined}>
              {eyebrow ? <p className="text-[0.65rem] uppercase tracking-[0.32em] text-emerald-200/90 sm:text-xs sm:tracking-[0.35em]">{eyebrow}</p> : null}
              {title ? <h2 className="mt-3 text-xl font-semibold leading-tight sm:text-3xl lg:text-4xl">{title}</h2> : null}
              {description ? <p className={isBanner ? 'mt-3 max-w-2xl text-sm leading-6 text-slate-100 sm:mt-4 sm:text-base sm:leading-7' : 'mt-3 text-sm leading-6 text-slate-200 sm:mt-4 sm:leading-7'}>{description}</p> : null}
            </div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={moveToPrevious}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-base font-semibold text-white backdrop-blur transition hover:bg-white/25 sm:h-11 sm:w-11 sm:text-lg"
                aria-label="Previous ad"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={moveToNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-base font-semibold text-white backdrop-blur transition hover:bg-white/25 sm:h-11 sm:w-11 sm:text-lg"
                aria-label="Next ad"
              >
                ›
              </button>
              <div className="ml-1 flex items-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.alt}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-emerald-300' : 'w-2.5 bg-white/45 hover:bg-white/70'}`}
                    aria-label={`Show ad slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {!isBanner ? (
          <div className="flex flex-col justify-between gap-5 px-1 pt-5 sm:gap-6 sm:p-2 lg:p-3">
            <div className="space-y-3 sm:space-y-4">
              {eyebrow ? <p className="text-[0.65rem] uppercase tracking-[0.32em] text-emerald-700 sm:text-xs sm:tracking-[0.35em]">{eyebrow}</p> : null}
              {title ? <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">{title}</h2> : null}
              {description ? <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p> : null}
            </div>

            <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:px-0 lg:grid lg:overflow-visible lg:pb-0 xl:grid-cols-2">
              {images.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group min-w-56 shrink-0 snap-start overflow-hidden rounded-[1.25rem] border text-left transition sm:min-w-64 lg:min-w-0 ${index === activeIndex ? 'border-emerald-400 ring-2 ring-emerald-200' : 'border-slate-200 hover:border-emerald-200'}`}
                >
                  <img src={image.src} alt={image.alt} className="h-24 w-full object-cover sm:h-28" loading="lazy" decoding="async" />
                  <div className="bg-white px-4 py-3">
                    <p className="text-sm font-medium text-slate-900">{image.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default AdCarousel