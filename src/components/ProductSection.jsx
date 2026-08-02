import { Link } from "react-router-dom";
import {
  productNpkBagNoBg,
  productAmmoniaBagNoBg,
  productUreaBagNoBg,
} from "../assets/assetRegistry";

// ProductSection: highlights a few flagship products and directs visitors into the full catalog.
export default function ProductSection() {
  return (
    <section id="product" className="bg-primary/10 border-accent  py-10 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">
            Product highlights
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-2xl">
            Trusted products for modern farming
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            From granular blends to precision-filled bags, our products are
            built for the farm and the field.
          </p>
        </div>

        <div className="grid gap-5 grid-cols-2 lg:items-center">
          <div className="space-y-3 lg:order-1 sm:space-y-4">
            <p className="text-base font-semibold text-slate-900 sm:text-lg">
              Chaleee NPK 20:10:10+7S
            </p>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Registration: PFRD/PR/18/149-5 | Anti-Acid | 50kg
            </p>

            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Best for: maize, rice, vegetables, groundnuts, soybean.
            </p>
            <div className="mt-2">
              <Link
                to="/product"
                className="text-sm text-green-500 hover:underline sm:text-base"
              >
                View Chaleee NPK
              </Link>
            </div>
          </div>

          <div className="flex justify-center overflow-hidden order-2">
            <img
              src={productNpkBagNoBg}
              alt="Chaleee NPK 20:10:10+7S"
              className="h-28 max-h-48 object-contain object-center sm:h-36 sm:max-h-60"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl px-6">
          <svg viewBox="0 0 560 96" className="h-24 w-full text-green-700">
            <path
              d="M20 68C120 0 220 124 320 56C420 -12 520 92 540 68"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="20" cy="68" r="6" fill="currentColor" />
            <circle cx="320" cy="56" r="6" fill="currentColor" />
            <circle cx="540" cy="68" r="6" fill="currentColor" />
          </svg>
        </div>

        <div className="grid gap-3 grid-cols-2 lg:items-center">
          <div className="flex justify-center overflow-hidden lg:order-1">
            <img
              src={productAmmoniaBagNoBg}
              alt="Sulphate of Ammonia 21%N 24%S"
              className="h-28 max-h-48 object-contain object-center sm:h-36 sm:max-h-60"
            />
          </div>

          <div className="space-y-3 lg:order-2 sm:space-y-4">
            <p className="text-base font-semibold text-slate-900 sm:text-lg">
              Sulphate of Ammonia — 21%N 24%S
            </p>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Anti-Acid Formula | 50kg
            </p>

            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Best for: cocoa, oil palm, brassicas, onions, sugarcane.
            </p>
            <div className="mt-2">
              <Link
                to="/product"
                className="text-sm text-green-500 hover:underline sm:text-base"
              >
                View Sulphate of Ammonia
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-2 lg:items-center">
          <div className="space-y-2 lg:order-1 sm:space-y-3">
            <p className="text-base font-semibold text-slate-900 sm:text-lg">
              Chaleee Urea 46%N
            </p>
            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Registration: PFRD/PR/18/149-4 | Anti-Acid | 50kg
            </p>

            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              Best for: maize, rice, sugarcane, vegetables, pasture.
            </p>
            <div className="mt-4">
              <Link
                to="/product"
                className="text-sm text-green-500 hover:underline sm:text-base"
              >
                View Chaleee Urea
              </Link>
            </div>
          </div>

          <div className=" mt-10 flex justify-center overflow-hidden rounded-4xl lg:order-2">
            <img
              src={productUreaBagNoBg}
              alt="Chaleee Urea 46%N"
              className="h-28 max-h-48 object-contain object-center sm:h-36 sm:max-h-60"
            />
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
  );
}
