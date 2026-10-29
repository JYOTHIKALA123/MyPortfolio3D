import { ExternalLink, FolderGit2 } from 'lucide-react'
import { isEditText, projects } from '../data/siteData'
import { GitHubIcon } from './BrandIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SmartLink from './SmartLink'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="03 — Projects"
          title="Selected work"
          intro="Full-stack projects built with Java web technologies and the MERN stack."
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.id} className={`glass project-card status-${p.status}`} delay={i * 90}>
              <div className="project-top">
                <span className="project-icon"><FolderGit2 size={26} aria-hidden="true" /></span>
                {p.status !== 'real' && <span className="badge">{p.badge}</span>}
              </div>
              <h3>{p.title}</h3>
              {p.role && <p className="project-role">{p.role}</p>}
              <p className={isEditText(p.description) ? 'edit-text' : ''}>{p.description}</p>
              <ul className="chip-list small">
                {p.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
              <div className="project-links">
                {/* Finished projects only show buttons that have a real link; placeholder cards show both. */}
                {(p.status !== 'real' || p.github) && (
                  <SmartLink href={p.github} external label={`The GitHub link for “${p.title}”`} className="link-btn" placeholder={!p.github}>
                    <GitHubIcon size={16} /> GitHub
                  </SmartLink>
                )}
                {(p.status !== 'real' || p.demo) && (
                  <SmartLink href={p.demo} external label={`The live demo link for “${p.title}”`} className="link-btn" placeholder={!p.demo}>
                    <ExternalLink size={16} aria-hidden="true" /> Live demo
                  </SmartLink>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
