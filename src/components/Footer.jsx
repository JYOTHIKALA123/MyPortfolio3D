import { ArrowUp } from 'lucide-react'
import { contact, isPlaceholder, profile } from '../data/siteData'
import { GitHubIcon, LinkedInIcon } from './BrandIcons'
import SmartLink from './SmartLink'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="footer-social">
          <SmartLink href={contact.github} external placeholder={isPlaceholder(contact.github)} label="The GitHub link" className="icon-btn" aria-label="GitHub">
            <GitHubIcon size={18} />
          </SmartLink>
          <SmartLink href={contact.linkedin} external placeholder={isPlaceholder(contact.linkedin)} label="The LinkedIn link" className="icon-btn" aria-label="LinkedIn">
            <LinkedInIcon size={18} />
          </SmartLink>
          <a href="#home" className="btn btn-ghost btn-sm">
            <ArrowUp size={16} aria-hidden="true" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
