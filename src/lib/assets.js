// Files you drop into src/assets/ are discovered at build time, so there is
// never a broken link: if a file is missing, the site shows instructions instead.
const resumeFiles = import.meta.glob('../assets/resume/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
})
const photoFiles = import.meta.glob('../assets/profile/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const resumeUrl = Object.values(resumeFiles)[0] ?? null
export const photoUrl = Object.values(photoFiles)[0] ?? null
