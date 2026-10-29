import { about, profile } from '../data/siteData'
import { photoUrl } from '../lib/assets'
import { iconMap } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="01 — About" title="A developer who likes building things that work" />
        <div className="about-grid">
          <Reveal className="about-photo-col">
            <div className="photo-frame">
              {photoUrl ? (
                <img src={photoUrl} alt={`Portrait of ${profile.name}`} width="360" height="360" loading="lazy" decoding="async" />
              ) : (
                <div className="photo-placeholder" role="img" aria-label="Profile photo placeholder">
                  <span>{profile.initials}</span>
                  <small>Add your photo in<br /><code>src/assets/profile/</code></small>
                </div>
              )}
            </div>
          </Reveal>
          <div className="about-copy">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80}>{p}</Reveal>
            ))}
            <div className="highlight-grid">
              {about.highlights.map((h, i) => {
                const Icon = iconMap[h.icon]
                return (
                  <Reveal key={h.label} className="glass highlight" delay={i * 90}>
                    <Icon size={22} aria-hidden="true" />
                    <p className="highlight-label">{h.label}</p>
                    <p className="highlight-value">{h.value}</p>
                    <p className="highlight-detail">{h.detail}</p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
