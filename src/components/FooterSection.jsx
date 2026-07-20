import { socialEmailIcon, socialInstagramIcon, socialLinkedInIcon, socialPlaceholderIcon, brandLogo } from "../assets/assetRegistry";

// FooterSection: renders the global site footer with contact details, navigation links, and social actions.
export default function FooterSection() {
  return (
    <footer className="border-t border-slate-800  bg-primary-dark py-8 text-slate-200  ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:min-h-[180px]">
          <div className="lg:max-w-lg md:flex items-center gap-3">
            <div>
              <img
                src={brandLogo}
                alt="Invess Agric logo"
                className="h-14 w-auto rounded-full bg-white/10 p-2"
              />
              <p className="text-base font-semibold text-emerald-100">
                Invess Agric Manufacturing Limited
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Registered company CS077792018. We manufacture and supply
                blended fertilizers, seeds, and agri inputs for Ghanaian
                farmers.
              </p>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <img src={socialEmailIcon} alt="Email icon" className="h-4 w-4" loading="lazy" />
                  <span>info@invessagric.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <img
                    src={socialPlaceholderIcon}
                    alt="Location icon"
                    className="h-4 w-4"
                  />
                  <span>No. 269 Daya Square, Kwei Okyerema Street, Dzorwulu</span>
                </p>
                <p className="text-green-300 hover:text-white">
                  <a
                    href="https://www.google.com/maps?q=JR63%2B57X%20Invess%20Agriculture%20and%20Manufacturing%20limited%2C%20Kojo%20Ashong%20Ave%2C%20Accra%2C%20Ghana"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden min-[900px]:flex w-full max-w-md mx-auto gap-6 items-start">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                Navigation
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#stats" className="hover:text-white">
                    Stats
                  </a>
                </li>
                <li>
                  <a href="/#manufacturing" className="hover:text-white">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="/#equipment" className="hover:text-white">
                    Equipment
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                Resources
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <a href="/#gallery" className="hover:text-white">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/#quality" className="hover:text-white">
                    Quality
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-white">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
              Connect
            </p>
            <div className="mt-3 flex flex-col items-center justify-center gap-3">
              <div className="flex justify-center gap-4">
                <a
                  href="https://gh.linkedin.com/company/invess-agriculture-ltd"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-emerald-100 transition hover:bg-emerald-600"
                >
                  <img src={socialLinkedInIcon} alt="LinkedIn" className="h-5 w-5" loading="lazy" />
                </a>
                <a
                  href="https://www.instagram.com/invess_agric/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-100 transition hover:bg-emerald-600"
                >
                  <img
                    src={socialInstagramIcon}
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="mailto:info@invessagric.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-100 transition hover:bg-emerald-600"
                >
                  <img src={socialEmailIcon} alt="Email" className="h-5 w-5" loading="lazy" />
                </a>
              </div>
            </div>
            <div className="flex mt-3 flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-sm font-semibold text-emerald-100">CONTACT US</p>
                <p className="text-sm text-slate-300">sales@invessagric.com</p>
                <p className="text-sm text-slate-300">+233 24 202 2517</p>
              </div>
              <a
                href="/contact"
                className="inline-flex min-h-9 items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-700 pt-4 text-sm text-slate-500 text-center">
          © 2026 Invess Agric Manufacturing Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
