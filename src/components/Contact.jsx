import { useState } from 'react'
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { contact, isPlaceholder, profile } from '../data/siteData'
import { notify } from '../lib/notify'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import Reveal from './Reveal'
import ResumeButton from './ResumeButton'
import SectionHeading from './SectionHeading'
import SmartLink from './SmartLink'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for older browsers / non-secure pages
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

function Row({ icon, label, children, placeholder }) {
  return (
    <li className="contact-row">
      <span className="contact-icon">{icon}</span>
      <div>
        <p className="contact-label">
          {label} {placeholder && <span className="badge badge-warn">Placeholder</span>}
        </p>
        {children}
      </div>
    </li>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const emailPlaceholder = isPlaceholder(contact.email)
  const phonePlaceholder = isPlaceholder(contact.phone)
  const hasPhone = Boolean(contact.phone)
  const subject = encodeURIComponent(`Job opportunity for ${profile.name}`)

  const onCopy = async () => {
    if (emailPlaceholder) {
      notify('The email address is still a placeholder. Edit it in src/data/siteData.js.')
      return
    }
    const ok = await copyText(contact.email)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } else {
      notify(`Couldn’t copy automatically. My email is ${contact.email}`)
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="06 — Contact"
          title="Let’s talk about your next Java hire"
          intro="I’m open to Java Developer, Junior Java Full Stack, Backend Java and Associate Software Engineer roles in Coimbatore or Chennai."
        />
        <Reveal className="glass contact-card">
          <ul className="contact-list">
            <Row icon={<Mail size={20} aria-hidden="true" />} label="Email" placeholder={emailPlaceholder}>
              <div className="email-line">
                <span className="contact-value">{contact.email}</span>
                <button type="button" className="link-btn" onClick={onCopy} aria-live="polite">
                  {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>
            </Row>
            {hasPhone && (
              <Row icon={<Phone size={20} aria-hidden="true" />} label="Phone" placeholder={phonePlaceholder}>
              <SmartLink
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                placeholder={phonePlaceholder}
                label="The phone number"
                className="contact-value contact-link"
              >
                {contact.phone}
              </SmartLink>
              </Row>
            )}
            <Row icon={<GitHubIcon size={20} />} label="GitHub" placeholder={isPlaceholder(contact.github)}>
              <SmartLink href={contact.github} external placeholder={isPlaceholder(contact.github)} label="The GitHub link" className="contact-value contact-link">
                {contact.github.replace('https://', '')}
              </SmartLink>
            </Row>
            <Row icon={<LinkedInIcon size={20} />} label="LinkedIn" placeholder={isPlaceholder(contact.linkedin)}>
              <SmartLink href={contact.linkedin} external placeholder={isPlaceholder(contact.linkedin)} label="The LinkedIn link" className="contact-value contact-link">
                {contact.linkedin.replace('https://www.', '').replace('https://', '')}
              </SmartLink>
            </Row>
            <Row icon={<MapPin size={20} aria-hidden="true" />} label="Location">
              <span className="contact-value">{profile.location}</span>
            </Row>
          </ul>

          <div className="contact-cta">
            <h3>Ready to chat?</h3>
            <p>Send me an email and I’ll get back to you as soon as I can.</p>
            <div className="cta-row">
              <SmartLink
                href={`mailto:${contact.email}?subject=${subject}`}
                placeholder={emailPlaceholder}
                label="The email address"
                className="btn btn-primary"
              >
                <Mail size={18} aria-hidden="true" /> Email Me
              </SmartLink>
              <ResumeButton className="btn btn-ghost" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
