import { Award, GraduationCap } from 'lucide-react'
import { certifications, education, isEditText } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" eyebrow="05 — Education" title="Academic background" />
        <div className="education-grid">
          {education.map((e, i) => (
            <Reveal as="article" key={e.degree} className="glass edu-card" delay={i * 90}>
              <span className="skill-icon"><GraduationCap size={22} aria-hidden="true" /></span>
              <h3>{e.degree}</h3>
              <p className={`edu-inst ${isEditText(e.institution) ? 'edit-text' : ''}`}>{e.institution}</p>
              <p className="edu-period">{e.period}</p>
              {e.detail && <p className="edu-detail">{e.detail}</p>}
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="cert-title">Certifications</Reveal>
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal as="article" key={c.title} className="glass cert-card" delay={i * 90}>
              <span className="skill-icon"><Award size={20} aria-hidden="true" /></span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
