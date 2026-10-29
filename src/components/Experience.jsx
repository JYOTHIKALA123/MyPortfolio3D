import { Briefcase } from 'lucide-react'
import { experience, isEditText } from '../data/siteData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience-title" eyebrow="04 — Experience" title="Where I’ve worked" />
        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" key={job.company + job.period} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true"><Briefcase size={16} /></span>
              <div className="glass timeline-card">
                <p className="timeline-period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company} · {job.location}</p>
                {job.technologies && (
                  <ul className="chip-list small tech-row" aria-label="Technologies used">
                    {job.technologies.map((t) => (
                      <li key={t} className="chip">{t}</li>
                    ))}
                  </ul>
                )}
                <ul className="bullets">
                  {job.responsibilities.map((r) => (
                    <li key={r} className={isEditText(r) ? 'edit-text' : ''}>{r}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
