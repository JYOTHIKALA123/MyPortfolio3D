import { Component, lazy, Suspense, useMemo, useState } from 'react'
import SceneFallback from './SceneFallback'
import SceneLoading from './SceneLoading'
import { detectWebGL } from '../lib/webgl'

// The heavy Three.js code is only downloaded when this component mounts.
const HeroScene = lazy(() => import('./HeroScene'))

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error) {
    console.warn('3D scene failed, showing fallback:', error?.message)
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export default function HeroVisual({ sourceRef }) {
  const webgl = useMemo(() => detectWebGL(), [])
  const [lost, setLost] = useState(false)

  if (!webgl) {
    return <SceneFallback note="WebGL isn’t available here, so a lightweight version is shown." />
  }
  const fallback = <SceneFallback note="The 3D view couldn’t start, so a lightweight version is shown." />
  if (lost) return fallback

  return (
    <SceneBoundary fallback={fallback}>
      <Suspense fallback={<SceneLoading />}>
        <HeroScene sourceRef={sourceRef} onFail={() => setLost(true)} />
      </Suspense>
    </SceneBoundary>
  )
}
