import { useEffect, useState } from 'react'

export default function Toast() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    let timer
    const show = (e) => {
      setMessage(e.detail)
      clearTimeout(timer)
      timer = setTimeout(() => setMessage(''), 4500)
    }
    window.addEventListener('portfolio:toast', show)
    return () => {
      window.removeEventListener('portfolio:toast', show)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="toast-region" role="status" aria-live="polite">
      {message && <div className="toast">{message}</div>}
    </div>
  )
}
