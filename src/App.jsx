import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Team from './pages/Team'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import FooterSection from './components/FooterSection'
import whatsappIcon from './assets/Icons/whatsapp.png'
import './App.css'

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
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <NavBar />
      <ScrollToHash />

      <main className="app-content flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <FooterSection />

      <a
        href="https://wa.me/233242022517?text=Hello%20Invess%20Agric"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        aria-label="Text us on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp icon" className="h-6 w-6" />
        <span>Text us</span>
      </a>
    </div>
  )
}
 

 
   
export default App
