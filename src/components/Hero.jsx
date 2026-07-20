import { Link } from 'react-router-dom'
import { heroBackground } from '../assets/assetRegistry'

// Hero section for the landing page; introduces the brand and provides primary calls to action.
export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      <img
        src={heroBackground}
        alt="Hero background"
        className="absolute  inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <section className="relative flex h-full items-center justify-center py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-[32px] h-100 bg-white/10 border border-white/12 p-8 md:p-14 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-100/90">
              Blended fertilizer manufacturing · Accra, Ghana
            </p>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">
              Manufacturing Ghana's future in{' '}
              <span className="italic text-white/95">crop nutrition</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 sm:text-lg text-green-100/90">
              Premium blended fertilizers produced with advanced manufacturing
              technology and strict quality standards — built for Ghanaian agriculture.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
              <a
                href="#manufacturing"
                className="inline-flex items-center justify-center rounded-full border border-primary  bg-primary px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:text-sm"
              >
                Explore our plant
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20 sm:text-sm"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}
