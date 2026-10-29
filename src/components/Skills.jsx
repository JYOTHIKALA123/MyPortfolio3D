import { skillGroups } from '../data/siteData'
import { iconMap } from './icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="02 — Technical Skills"
          title="The tools I work with"
          intro="Grouped by where they fit in a typical web application."
        />
        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon]
            return (
              <Reveal as="article" key={group.title} className="glass skill-card" delay={i * 90}>
                <div className="skill-head">
                  <span className="skill-icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{group.title}</h3>
                </div>
                <ul className="chip-list">
                  {group.skills.map((s) => (
                    <li key={s} className="chip"><span className="chip-dot" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
