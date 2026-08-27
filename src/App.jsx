import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import MoneyTransfer from './pages/MoneyTransfer'
import Internet from './pages/Internet'
import DHL from './pages/DHL'
import MobileElectronics from './pages/MobileElectronics'
import Careers from './pages/Careers'
import Service from './pages/Service'

// Scroll to top on route change, or to the #hash target if present.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/money-transfer" element={<MoneyTransfer />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/dhl" element={<DHL />} />
          <Route path="/mobile-electronics" element={<MobileElectronics />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services/:slug" element={<Service />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
