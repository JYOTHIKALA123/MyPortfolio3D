import { Download } from 'lucide-react'
import { resumeUrl } from '../lib/assets'
import { openResumeHelp } from '../lib/notify'
import { profile } from '../data/siteData'

// Real download link when a PDF exists in src/assets/resume/, otherwise a button
// that opens friendly instructions (never a broken link).
export default function ResumeButton({ className = 'btn btn-primary', onClick, label = 'Download Resume' }) {
  if (resumeUrl) {
    return (
      <a className={className} href={resumeUrl} download={profile.resumeDownloadName} onClick={onClick}>
        <Download size={18} aria-hidden="true" /> {label}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.()
        openResumeHelp()
      }}
    >
      <Download size={18} aria-hidden="true" /> {label}
    </button>
  )
}
