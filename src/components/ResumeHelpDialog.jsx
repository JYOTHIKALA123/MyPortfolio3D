import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function ResumeHelpDialog() {
  const ref = useRef(null)

  useEffect(() => {
    const open = () => {
      if (ref.current && !ref.current.open) ref.current.showModal()
    }
    window.addEventListener('portfolio:resume-help', open)
    return () => window.removeEventListener('portfolio:resume-help', open)
  }, [])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="resume-dialog-title"
      onClick={(e) => e.target === ref.current && close()}
    >
      <div className="dialog-body">
        <button type="button" className="icon-btn dialog-close" onClick={close} aria-label="Close">
          <X size={18} aria-hidden="true" />
        </button>
        <h2 id="resume-dialog-title">Resume file not added yet</h2>
        <p>The Download Resume button will work as soon as you add your PDF:</p>
        <ol>
          <li>
            Copy your resume PDF into <code>src/assets/resume/</code> (any file name ending in <code>.pdf</code>).
          </li>
          <li>
            Restart <code>npm run dev</code>, or rebuild with <code>npm run build</code>.
          </li>
          <li>The button turns into a real download link automatically.</li>
        </ol>
        <button type="button" className="btn btn-primary" onClick={close}>
          Got it
        </button>
      </div>
    </dialog>
  )
}
