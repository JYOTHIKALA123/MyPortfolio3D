import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import useReducedMotion from '../hooks/useReducedMotion'
import SceneLoading from './SceneLoading'

// Small cubes orbiting the core — like data nodes around a system.
function Nodes({ reduced }) {
  const group = useRef()
  const nodes = useMemo(() => {
    const golden = Math.PI * (3 - Math.sqrt(5))
    return Array.from({ length: 9 }, (_, i) => {
      const y = 1 - (i / 8) * 2
      const r = Math.sqrt(1 - y * y)
      const radius = 2.1 + (i % 3) * 0.28
      return {
        position: [Math.cos(golden * i) * r * radius, y * radius * 0.8, Math.sin(golden * i) * r * radius],
        scale: 0.09 + (i % 4) * 0.025,
        color: i % 2 ? '#8b5cf6' : '#4f8cff',
      }
    })
  }, [])

  useFrame((_, dt) => {
    if (!reduced && group.current) group.current.rotation.y += dt * 0.12
  })

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.position} scale={n.scale * 2.2}>
          <boxGeometry />
          <meshStandardMaterial color={n.color} emissive={n.color} emissiveIntensity={0.9} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function Core({ reduced }) {
  const group = useRef()
  const wire = useRef()
  const ringA = useRef()
  const ringB = useRef()

  useFrame((state, dt) => {
    if (reduced) return
    const px = THREE.MathUtils.clamp(state.pointer.x, -1, 1)
    const py = THREE.MathUtils.clamp(state.pointer.y, -1, 1)
    const t = state.clock.elapsedTime
    // Follows the mouse on desktop; a gentle idle sway keeps touch devices alive too.
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, px * 0.6 + Math.sin(t * 0.3) * 0.15, 3, dt)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -py * 0.35, 3, dt)
    wire.current.rotation.y += dt * 0.15
    wire.current.rotation.x += dt * 0.08
    ringA.current.rotation.z += dt * 0.3
    ringB.current.rotation.x += dt * 0.22
  })

  const body = (
    <group>
      <mesh>
        <icosahedronGeometry args={[1.1, 4]} />
        <MeshDistortMaterial
          color="#3b6bff"
          emissive="#1d3fbf"
          emissiveIntensity={0.45}
          roughness={0.25}
          metalness={0.6}
          distort={reduced ? 0.12 : 0.3}
          speed={reduced ? 0 : 1.6}
        />
      </mesh>
      <mesh ref={wire}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.1, 0.016, 16, 160]} />
        <meshBasicMaterial color="#4f8cff" />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 3, 0.6, 0]}>
        <torusGeometry args={[2.45, 0.012, 16, 160]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>
      <Nodes reduced={reduced} />
    </group>
  )

  return (
    <group ref={group}>
      {reduced ? body : (
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.7}>
          {body}
        </Float>
      )}
    </group>
  )
}

export default function HeroScene({ sourceRef, onFail }) {
  const reduced = useReducedMotion()
  const wrapRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [inView, setInView] = useState(true)
  const small = typeof window !== 'undefined' && window.innerWidth < 700

  // Pause rendering when the scene is scrolled off-screen to save battery.
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 })
    observer.observe(wrapRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="scene-wrap" ref={wrapRef}>
      {!ready && <SceneLoading />}
      <Canvas
        aria-hidden="true"
        camera={{ position: [0, 0, 6.4], fov: 45 }}
        dpr={[1, small ? 1.5 : 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={reduced ? 'demand' : inView ? 'always' : 'never'}
        eventSource={sourceRef?.current ?? undefined}
        eventPrefix="client"
        style={{ touchAction: 'pan-y' }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault()
            onFail?.()
          })
          setReady(true)
        }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 4]} intensity={70} color="#6aa5ff" />
        <pointLight position={[-4, -2, 3]} intensity={45} color="#8b5cf6" />
        <directionalLight position={[-3, 4, 2]} intensity={1.2} color="#c4b5fd" />
        <Core reduced={reduced} />
        <Sparkles count={small ? 25 : 70} scale={[9, 6, 6]} size={2.2} speed={reduced ? 0 : 0.25} color="#9db7ff" opacity={0.7} />
        <ContactShadows position={[0, -2.6, 0]} opacity={0.3} scale={7} blur={3.5} far={3} color="#000014" resolution={256} />
      </Canvas>
    </div>
  )
}
