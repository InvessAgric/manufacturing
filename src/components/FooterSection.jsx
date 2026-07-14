import emailIcon from "../assets/Icons/email.png";
import instagramIcon from "../assets/Icons/instagram.png";
import linkedinIcon from "../assets/Icons/linkedin.png";
import placeholderIcon from "../assets/Icons/placeholder.png";

export default function FooterSection() {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-r from-slate-950 via-emarald-700 to- bg-emerald-800 py-8 text-slate-200  ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:min-h-[180px]">
          <div className="lg:max-w-lg md:flex items-center gap-3">
            <div>
              <img
                src="/src/assets/images/logo.png"
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
                  <img src={emailIcon} alt="Email icon" className="h-4 w-4" />
                  <span>info@invessagric.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <img
                    src={placeholderIcon}
                    alt="Location icon"
                    className="h-4 w-4"
                  />
                  <span>No. 269 Daya Square, Kwei Okyerema Street, Dzorwulu Box CT 278, Cantonments, Accra</span>
                </p>
                <p className="text-green-300 hover:text-white">
                  <a
                    href="https://www.google.com/maps?q=5.610656,-0.196835&entry=gps&g_ep=CAESBzI2LjI3LjEYACCenQoqiwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA4MjA2OTEsMTAwNzk2NTM1LDk0MjgwNTc2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE4NjUzLDk0MjI5ODM5LDk0Mjc1MTY4LDk0Mjc5NjE5QgJHSA%3D%3D&skid=a7a642a8-8665-4de0-bfdf-3e53849e6c69&shorturl=1"
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
                  <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/invess_agric/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-100 transition hover:bg-emerald-600"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="mailto:info@invessagric.com"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-emerald-100 transition hover:bg-emerald-600"
                >
                  <img src={emailIcon} alt="Email" className="h-5 w-5" />
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
                className="inline-flex h-10 w-37.5 sm:w-auto max-w-xs items-center justify-center rounded-full px-5 text-sm font-semibold bg-slate-800 text-white transition hover:bg-green-600"
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
