import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile, sections } from '../data/siteData'
import ResumeButton from './ResumeButton'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 980 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const links = sections.map((s) => (
    <a
      key={s.id}
      href={`#${s.id}`}
      className="nav-link"
      aria-current={active === s.id ? 'true' : undefined}
      onClick={() => setOpen(false)}
    >
      {s.label}
    </a>
  ))

  return (
    <header className={`navbar ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label={`${profile.name} — back to top`} onClick={() => setOpen(false)}>
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {links}
        </nav>

        <div className="nav-actions">
          <ResumeButton className="btn btn-primary btn-sm nav-resume" />
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile" className="container mobile-nav">
          {links}
          <ResumeButton className="btn btn-primary" onClick={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  )
}
