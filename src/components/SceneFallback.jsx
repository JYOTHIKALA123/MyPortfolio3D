// Lightweight CSS-only version of the 3D scene (used when WebGL is unavailable or fails).
export default function SceneFallback({ note }) {
  return (
    <div className="scene-wrap">
      <div className="fallback-orb" aria-hidden="true">
        <span className="ring ring-a" />
        <span className="ring ring-b" />
        <span className="orb" />
        <span className="node n1" />
        <span className="node n2" />
        <span className="node n3" />
      </div>
      {note && <p className="scene-note">{note}</p>}
    </div>
  )
}
