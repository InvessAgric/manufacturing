import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Team from './pages/Team'
import Fleet from './pages/Fleet'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import FooterSection from './components/FooterSection'
import { socialWhatsappIcon } from './assets/assetRegistry'
import './App.css'

// Smoothly scroll the page to the target hash fragment when a route link points to an in-page section.
function ScrollToHash() {
  const { hash, pathname, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    const id = hash.replace('#', '')
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, pathname, key])

  return null
}

function App() {
  // Controls whether the floating quick-enquiry panel is visible.
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Holds the text entered by the visitor before it is submitted.
  const [chatMessage, setChatMessage] = useState('')

  // Sends the enquiry message through the default mail client when the form is submitted.
  const handleChatSubmit = (event) => {
    event.preventDefault()
    if (!chatMessage.trim()) {
      return
    }

    window.location.href = `mailto:info@invessagric.com?subject=${encodeURIComponent('Invess Agric enquiry')}&body=${encodeURIComponent(chatMessage.trim())}`
    setChatMessage('')
    setIsChatOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <NavBar />
      <ScrollToHash />

      <main className="app-content flex-1">
        {/* Register the site routes for the home, about, contact, product, team, and fallback pages. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <FooterSection />

      {/* Floating enquiry and WhatsApp actions positioned at the bottom-right of the viewport. */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <div className={`w-80 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/20 ${isChatOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">Quick enquiry</p>
              <p className="text-xs text-slate-500">Send us a message instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
            >
              Close
            </button>
          </div>

          <form onSubmit={handleChatSubmit} className="mt-3 space-y-3">
            <textarea
              value={chatMessage}
              onChange={(event) => setChatMessage(event.target.value)}
              rows="4"
              placeholder="Type your message here..."
              className="w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Send enquiry
            </button>
          </form>
        </div>

        <button
          type="button"
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label="Open enquiry chat"
        >
          <span>Enquire</span>
        </button>

        <a
          href="https://wa.me/233535903939?text=Hello%20Invess%20Agric"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          aria-label="Text us on WhatsApp"
        >
          <img src={socialWhatsappIcon} alt="WhatsApp icon" className="h-6 w-6" loading="lazy" />
          <span>Text us</span>
        </a>
      </div>
    </div>
  )
}

export default App
