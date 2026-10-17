import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router'
import { TopBar, Header, Footer, FloatingActions } from './components/Chrome'
import Landing from './pages/Landing'
import ServicePage from './pages/ServicePage'
import { ContactPage, GalleryPage, ThankYouPage } from './pages/StaticPages'

// Landing-page sections that have their own URL (/about, /services). "/" is the top of the page.
const SECTION_PATHS = { '/about': 'about', '/services': 'services' }

// Scroll to the section for the current path or #hash after a route change, otherwise to the top.
// Navigations triggered by the scroll spy (state.spy) must not scroll again.
function ScrollManager() {
  const { pathname, hash, state } = useLocation()
  useEffect(() => {
    if (state?.spy) return
    const target = hash || (SECTION_PATHS[pathname] ? `#${SECTION_PATHS[pathname]}` : '')
    if (target) {
      const t = setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }), 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, state])
  return null
}

export default function App() {
  // Selected treatment is shared by the service cards and the booking forms.
  const [treatment, setTreatment] = useState('')
  const shared = { treatment, setTreatment }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollManager />
      <TopBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing {...shared} />} />
          <Route path="/about" element={<Landing {...shared} />} />
          <Route path="/services" element={<Landing {...shared} />} />
          <Route path="/contact-us" element={<ContactPage {...shared} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/:slug" element={<ServicePage {...shared} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  )
}
