import { useRef } from 'react'
import { ArrowRight, ChevronDown, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/siteData'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const ref = useRef(null)
  return (
    <section id="home" ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status-pill">
            <span className="pulse-dot" aria-hidden="true" /> {profile.openTo}
          </p>
          <h1 id="hero-title">
            Hi, I’m <span className="grad-text">{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <ul className="hero-facts" aria-label="Quick facts">
            <li><GraduationCap size={16} aria-hidden="true" /> MSc Computer Science · 2025</li>
            <li><MapPin size={16} aria-hidden="true" /> Coimbatore / Chennai</li>
            <li><Sparkles size={16} aria-hidden="true" /> Java · Servlets · JDBC · MySQL</li>
          </ul>
        </div>
        <div className="hero-visual">
          <HeroVisual sourceRef={ref} />
        </div>
      </div>
      <a className="scroll-hint" href="#about" aria-label="Scroll to About section">
        <ChevronDown size={22} aria-hidden="true" />
      </a>
    </section>
  )
}
