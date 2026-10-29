// Tiny helpers that let any component talk to the Toast / Resume dialog
// without passing props around.
export const notify = (message) =>
  window.dispatchEvent(new CustomEvent('portfolio:toast', { detail: message }))

export const openResumeHelp = () => window.dispatchEvent(new Event('portfolio:resume-help'))
