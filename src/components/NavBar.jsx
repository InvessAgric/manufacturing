// Import the `useState` hook to manage component state for the mobile navigation toggle.
import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { brandLogoAlt } from '../assets/assetRegistry'

// NavBar component: provides the responsive top navigation and mobile menu for the site.
function NavBar() {
  // Tracks whether the mobile navigation drawer is currently open.
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Closes the mobile menu after a navigation action.
  const close = () => setOpen(false)

  const goToSection = (id) => {
    close()

    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }

    const target = document.getElementById(id)
    if (target) {
      window.history.replaceState(null, '', `/#${id}`)
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    navigate(`/#${id}`)
  }

  return (
    <>
      {/* Main navigation bar (fixed/floating) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1150px] flex items-center justify-between bg-white/10 text-white px-3 py-2 rounded-xl shadow-xl backdrop-blur-md z-50">
        {/* Left: logo area */}
        <div className="nav-left shrink-0">
          {/* Logo links back to home and closes mobile menu when clicked */}
          <Link to="/" className="logo-link inline-flex items-center" onClick={close}>
            {/* Logo image element */}
            <img src={brandLogoAlt} alt="InvessAgric" className=" h-15 lg:h-10" loading="lazy" />
          </Link>
        </div>

        {/* Center: navigation links (visible on md+ screens) */}
<div className="nav-center  bg-primary/60 px-2 rounded-xl hidden lg:flex items-center gap-1">          {/* Section anchors with animated underline */}
          <NavLink to="/" end className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-accent' : 'text-white'}`}>Home</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          <button type="button" onClick={() => goToSection('stats')} className="relative inline-block px-2 py-1 group font-bold text-white cursor-pointer">
            Stats
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
          </button>

          <button type="button" onClick={() => goToSection('manufacturing')} className="relative inline-block px-2 py-1 group font-bold text-white cursor-pointer">
            Manufacturing
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
          </button>

          <button type="button" onClick={() => goToSection('equipment')} className="relative inline-block px-2 py-1 group font-bold text-white cursor-pointer">
            Equipment
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
          </button>

          <button type="button" onClick={() => goToSection('gallery')} className="relative inline-block px-2 py-1 group font-bold text-white cursor-pointer">
            Gallery
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
          </button>

          <button type="button" onClick={() => goToSection('quality')} className="relative inline-block px-2 py-1 group font-bold text-white cursor-pointer">
            Quality
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
          </button>
          <button type="button" onClick={() => goToSection('fleet')} className="relative inline-block px-2 py-1 group font-bold text-white cursor-pointer">
            Fleet
            <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
          </button>

          <NavLink to="/about" className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-accent' : 'text-white'}`}>About</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          <NavLink to="/product" className="relative inline-block px-2 py-1 group" onClick={close}>
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-accent' : 'text-white'}`}>Products</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          

          <NavLink to="/team" className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-accent' : 'text-white'}`}>Team</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          {/* <NavLink to="/blog" className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-accent' : 'text-white'}`}>Blog</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink>

          <NavLink to="/admin" className="relative inline-block px-2 py-1 group">
            {({ isActive }) => (
              <>
                <span className={`font-bold ${isActive ? 'text-accent' : 'text-white'}`}>Admin</span>
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </>
            )}
          </NavLink> */}
        </div>

        {/* Right side: contact CTA and mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Contact button shown on md+ screens */}
          <div className="hidden md:block nav-right">
            <Link to="/contact" className="inline-flex items-center rounded-full border border-primary bg-background  px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-sm">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-900" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              // Hamburger icon SVG
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu: rendered only when `open` is true */}
      {open && (
        <div className="md:hidden fixed top-17 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1126px] bg-text/8 backdrop-blur-md rounded-xl p-4 z-40">
          <div className="flex flex-col gap-3">
            {/* Each mobile link closes the menu after navigation */}
            <NavLink to="/" end onClick={close} className="text-  font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-accent' : ''}`}>Home</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            <button type="button" onClick={() => goToSection('stats')} className="text-left font-bold block relative cursor-pointer">
              Stats
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
            </button>

            <button type="button" onClick={() => goToSection('manufacturing')} className="text-left font-bold block relative cursor-pointer">
              Manufacturing
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
            </button>

            <button type="button" onClick={() => goToSection('equipment')} className="text-left font-bold block relative cursor-pointer">
              Equipment
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
            </button>

            <button type="button" onClick={() => goToSection('gallery')} className="text-left font-bold block relative cursor-pointer">
              Gallery
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
            </button>

            <button type="button" onClick={() => goToSection('quality')} className="text-left font-bold block relative cursor-pointer">
              Quality
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />

            </button>
            
            <button type="button" onClick={() => goToSection('fleet')} className="text-left font-bold block relative cursor-pointer">
              Fleet
              <span className="absolute left-0 -bottom-0.5 h-0.5 bg-accent w-0 group-hover:w-full transition-all" />
            </button>

            <NavLink to="/about" onClick={close} className="text-  font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-accent' : ''}`}>About</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            <NavLink to="/product" onClick={close} className="text-  font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-accent' : ''}`}>Products</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>


            <NavLink to="/team" onClick={close} className="text-  font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-accent' : ''}`}>Team</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            {/* <NavLink to="/blog" onClick={close} className="text-  font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-accent' : ''}`}>Blog</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink>

            <NavLink to="/admin" onClick={close} className="text-  font-bold block relative">
              {({ isActive }) => (
                <>
                  <span className={`${isActive ? 'text-accent' : ''}`}>Admin</span>
                  <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0'}`} />
                </>
              )}
            </NavLink> */}

            {/* Mobile CTA button */}
            <Link to="/contact" onClick={close} className="mt-2 inline-flex items-center rounded-full border border-primary bg-background px-2.5 py-1.5 text-xs font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark w-max">Contact Sales</Link>
          </div>
        </div>
      )}
    </>
  )
}

// Export the NavBar component as default
export default NavBar
