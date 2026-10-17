import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Hero, TrustStrip, About, Services, Why, Gallery, Process, Testimonials, FAQ, BookSection, Location } from '../components/Sections'

// Section ids and the URL each one owns; the last one scrolled past decides the URL.
const SPY = [['home', '/'], ['about', '/about'], ['services', '/services']]

export default function Landing({ treatment, setTreatment }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    let current = pathname
    let frame = 0
    const update = () => {
      frame = 0
      const line = 140
      let next = null
      for (const [id, path] of SPY) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) next = path
      }
      if (next && next !== current) {
        current = next
        navigate(next, { replace: true, state: { spy: true } })
      }
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

  return (
    <>
      <Hero treatment={treatment} setTreatment={setTreatment} />
      <TrustStrip />
      <About />
      <Services onPick={setTreatment} />
      <Why />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <BookSection treatment={treatment} setTreatment={setTreatment} />
      <Location />
    </>
  )
}
