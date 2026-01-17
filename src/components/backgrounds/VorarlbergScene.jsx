import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Hologram() {
  const meshRef = useRef()
  const { geometry } = useMemo(() => {
    // Reduzierte Auflösung für maximale Stabilität
    const geo = new THREE.PlaneGeometry(6, 6, 64, 64)
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i)
      let z = Math.abs(Math.sin(x * 1.2) * Math.cos(y * 1.2)) * 1.5
      z += Math.pow(Math.abs(Math.sin(x * 2)), 2) * 0.5
      pos.setZ(i, z)
    }
    geo.computeVertexNormals(); return { geometry: geo }
  }, [])

  useFrame((state) => { 
    if (meshRef.current) meshRef.current.rotation.z += 0.002 
  })

  return (
    <group position={[-5, 0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* Festkörper */}
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#0a330a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Leuchtendes Gitter */}
      <mesh ref={meshRef} geometry={geometry} position={[0, 0, 0.05]}>
        <meshStandardMaterial color="#00ffaa" wireframe emissive="#00ffaa" emissiveIntensity={1} />
      </mesh>
    </group>
  )
}

export default function VorarlbergScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 6, 18]} fov={35} />
      <color attach="background" args={['#050505']} />
      
      {/* SIMPELSTES LICHT-SETUP */}
      <ambientLight intensity={0.2} />
      <pointLight position={[-5, 10, 5]} intensity={50} color="#00ff88" />
      <pointLight position={[10, 10, 10]} intensity={20} color="#ffffff" />

      {/* RAUM: BODEN & WAND (REINE FARBEN) */}
      <group>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#111" roughness={0.5} />
        </mesh>
        <mesh position={[0, 10, -20]}>
          <planeGeometry args={[100, 40]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
      </group>

      {/* TISCH (MASSIV) */}
      <group position={[-5, -0.5, 0]}>
        <mesh>
          <boxGeometry args={[9, 1, 11]} />
          <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.1} />
        </mesh>
        <mesh position={[0, -5, 0]}>
          <boxGeometry args={[8.5, 10, 0.5]} />
          <meshStandardMaterial color="#050505" />
        </mesh>
      </group>

      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <Hologram />
      </Float>

      <Stars radius={100} depth={50} count={2000} factor={4} fade />
    </>
  )
}