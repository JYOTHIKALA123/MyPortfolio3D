import Reveal from './Reveal'

export default function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}
