import { notify } from '../lib/notify'

// A link that never dead-ends: if the target is still a placeholder, it becomes a
// button that tells you what to edit instead of opening a broken page.
export default function SmartLink({ href, placeholder = false, label = 'This link', external = false, className, children, ...rest }) {
  if (placeholder || !href) {
    return (
      <button
        type="button"
        className={className}
        onClick={() => notify(`${label} is still a placeholder. Edit it in src/data/siteData.js.`)}
        {...rest}
      >
        {children}
      </button>
    )
  }
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
