// Import the `useState` hook to manage component state (mobile menu open/close)
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoUrl from '../assets/images/logo_1.png'

// NavBar component: responsive, floating navigation with mobile menu
function NavBar() {
  // `open` tracks whether the mobile menu is visible
  const [open, setOpen] = useState(false)

  // helper to close the mobile menu (used on navigation)
  const close = () => setOpen(false)

  return (
    <>
      {/* Main navigation bar (fixed/floating) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1126px] flex items-center justify-between bg-white/10 text-white px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md z-50">
        {/* Left: logo area */}
        <div className="nav-left shrink-0">
          {/* Logo links back to home and closes mobile menu when clicked */}
          <Link to="/" className="logo-link inline-flex items-center" onClick={close}>
            {/* Logo image element */}
            <img src={logoUrl} alt="InvessAgric" className=" h-10" />
          </Link>
        </div>

        {/* Center: navigation links (visible on md+ screens) */}
        <div className="nav-center bg-linear-to-r from-slate-950 via-slate-600 to-emerald-700 px-2 rounded-1xl hidden md:flex flex-wrap items-center pb-2">
          {/* Section anchors with animated underline */}
          <NavLink to="/" end className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-emerald-300' : 'text-white'}`}>Home</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          <Link to="/#stats" className="relative inline-block px-2 py-1 group font-bold text-white">
            Stats
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
          </Link>

          <Link to="/#manufacturing" className="relative inline-block px-2 py-1 group font-bold text-white">
            Manufacturing
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
          </Link>

          <Link to="/#equipment" className="relative inline-block px-2 py-1 group font-bold text-white">
            Equipment
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
          </Link>

          <Link to="/#gallery" className="relative inline-block px-2 py-1 group font-bold text-white">
            Gallery
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
          </Link>

          <Link to="/#quality" className="relative inline-block px-2 py-1 group font-bold text-white">
            Quality
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
          </Link>

          <NavLink to="/about" className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-emerald-300' : 'text-white'}`}>About</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          <div className="relative inline-block group">
            <button className="font-bold inline-flex items-center gap-2 px-2 py-1">
              Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity absolute left-0 mt-2 w-56 rounded-lg bg-white text-slate-900 p-3 shadow-lg ring-1 ring-slate-100">
              <Link to="/product" className="block rounded px-3 py-2 text-sm hover:bg-slate-50">All products</Link>
              <Link to="/product" className="block rounded px-3 py-2 text-sm hover:bg-slate-50">Chaleee NPK</Link>
              <Link to="/product" className="block rounded px-3 py-2 text-sm hover:bg-slate-50">Sulphate of Ammonia</Link>
              <Link to="/product" className="block rounded px-3 py-2 text-sm hover:bg-slate-50">Chaleee Urea</Link>
            </div>
          </div>

          <NavLink to="/team" className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-emerald-300' : 'text-white'}`}>Team</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>
        </div>

        {/* Right side: contact CTA and mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Contact button shown on md+ screens */}
          <div className="hidden md:block nav-right">
            <Link to="/contact" className="inline-block bg-white text-green-600 font-bold hover:bg-green-100  px-4 py-1 transition-colors duration-200">
              Contact Sales
            </Link>
          </div>

          {/* Hamburger button (visible on small screens) toggles `open` state */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/8 hover:bg-white/12"
          >
            {/* Show an X icon when open, otherwise show the hamburger icon */}
            {open ? (
              // Close (X) icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              // Hamburger icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu: rendered only when `open` is true */}
      {open && (
        <div className="md:hidden fixed top-17 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1126px] bg-white/8 backdrop-blur-md rounded-xl p-4 z-40">
          <div className="flex flex-col gap-3">
            {/* Each mobile link closes the menu after navigation */}
            <NavLink to="/" end onClick={close} className="text-white font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-emerald-300' : ''}`}>Home</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            <Link to="/#stats" onClick={close} className="text-white font-bold block relative">
              Stats
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
            </Link>

            <Link to="/#manufacturing" onClick={close} className="text-white font-bold block relative">
              Manufacturing
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
            </Link>

            <Link to="/#equipment" onClick={close} className="text-white font-bold block relative">
              Equipment
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
            </Link>

            <Link to="/#gallery" onClick={close} className="text-white font-bold block relative">
              Gallery
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
            </Link>

            <Link to="/#quality" onClick={close} className="text-white font-bold block relative">
              Quality
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 group-hover:w-full transition-all" />
            </Link>

            <NavLink to="/about" onClick={close} className="text-white font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-emerald-300' : ''}`}>About</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            <div className="pt-2">
              <div className="text-white font-bold">Products</div>
              <div className="mt-2 flex flex-col gap-2 pl-3">
                <NavLink to="/product" onClick={close} className="text-white text-sm relative">All products<span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 transition-all" /></NavLink>
                <NavLink to="/product" onClick={close} className="text-white text-sm relative">Chaleee NPK<span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 transition-all" /></NavLink>
                <NavLink to="/product" onClick={close} className="text-white text-sm relative">Sulphate of Ammonia<span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 transition-all" /></NavLink>
                <NavLink to="/product" onClick={close} className="text-white text-sm relative">Chaleee Urea<span className="absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 w-0 transition-all" /></NavLink>
              </div>
            </div>

            <NavLink to="/team" onClick={close} className="text-white font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-emerald-300' : ''}`}>Team</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-emerald-300 transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            {/* Mobile CTA button */}
            <Link to="/contact" onClick={close} className="mt-2 inline-block bg-white text-green-600 font-bold hover:bg-green-100 rounded-lg px-3 py-2 w-max">Contact Sales</Link>
          </div>
        </div>
      )}
    </>
  )
}

// Export the NavBar component as default
export default NavBar
