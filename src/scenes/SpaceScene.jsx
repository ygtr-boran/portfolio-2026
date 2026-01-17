import { useFrame, useThree } from '@react-three/fiber'
import { Stars, useTexture, shaderMaterial, Text } from '@react-three/drei'
import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { extend } from '@react-three/fiber'

// --- 1. ATMOSPHÄRE SHADER ---
const AtmosphereMaterial = shaderMaterial(
  { 
    color: new THREE.Color(0.05, 0.4, 0.85), 
    coefficient: 0.7, 
    power: 6.0 
  },
  `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  `uniform vec3 color; uniform float coefficient; uniform float power; varying vec3 vNormal; void main() { float intensity = pow(coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0)), power); gl_FragColor = vec4(color, intensity * 1.5); }`
)
extend({ AtmosphereMaterial })

// --- 2. STÄDTE LISTE ---
const cities = [
  { name: "BERLIN", lat: 52.5200, lon: 13.4050 },
  { name: "LONDON", lat: 51.5074, lon: -0.1278 },
  { name: "NEW YORK", lat: 40.7128, lon: -74.0060 },
  { name: "SAN FRANCISCO", lat: 37.7749, lon: -122.4194 },
  { name: "SÃO PAULO", lat: -23.5505, lon: -46.6333 },
  { name: "KAIRO", lat: 30.0444, lon: 31.2357 },
  { name: "DUBAI", lat: 25.2048, lon: 55.2708 },
  { name: "MUMBAI", lat: 19.0760, lon: 72.8777 },
  { name: "SINGAPORE", lat: 1.3521, lon: 103.8198 },
  { name: "SHANGHAI", lat: 31.2304, lon: 121.4737 },
  { name: "TOKYO", lat: 35.6762, lon: 139.6503 },
  { name: "SYDNEY", lat: -33.8688, lon: 151.2093 }
]

// --- 3. MARKER (Mit Lesbarkeits-Fix) ---
function CityMarker({ lat, lon, name, radius, isMobile, systemState }) {
  const markerRef = useRef()
  const lightRef = useRef()
  
  const lonRad = useMemo(() => lon * (Math.PI / 180), [lon])

  const position = useMemo(() => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180) 
    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = (radius * Math.sin(phi) * Math.sin(theta))
    const y = (radius * Math.cos(phi))
    return new THREE.Vector3(x, y, z)
  }, [lat, lon, radius])

  const glowColor = new THREE.Color("#ccf0ff")

  useFrame(() => {
    if (markerRef.current) markerRef.current.lookAt(0, 0, 0)

    if (lightRef.current) {
        const wavePos = systemState.current.wave;
        let waveIntensity = Math.cos(lonRad - wavePos); 
        waveIntensity = waveIntensity * 0.5 + 0.5; 
        waveIntensity = Math.pow(waveIntensity, 3);
        const finalIntensity = 0.3 + (waveIntensity * 3.2);
        lightRef.current.intensity = finalIntensity;
    }
  })

  const fontSize = isMobile ? 0.16 : 0.08
  
  // --- FIX: KONTRAST ERHÖHEN ---
  // Wir verdoppeln die Dicke des schwarzen Randes fast.
  // Mobile: 0.01 -> 0.02
  // Desktop: 0.004 -> 0.008
  const outlineWidth = isMobile ? 0.02 : 0.008

  return (
    <group position={position}>
      <group ref={markerRef}>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.025, 16]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </mesh>
        
        <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]}>
           <cylinderGeometry args={[0.0015, 0.0015, 0.3, 8]} />
           <meshBasicMaterial color={glowColor} transparent opacity={0.5} blending={THREE.AdditiveBlending} toneMapped={false} />
        </mesh>
        
        <mesh position={[0, 0, -0.3]}>
            <sphereGeometry args={[0.012, 16, 16]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
            <pointLight ref={lightRef} distance={1.5} color={glowColor} decay={2} />
        </mesh>

        <group position={[0, 0, -0.42]} rotation={[0, Math.PI, 0]}> 
             <Text 
                color="white" // Wir bleiben bei Weiß
                anchorX="center" 
                anchorY="middle" 
                fontSize={fontSize} 
                outlineWidth={outlineWidth} // Hier greift der dickere Rand
                outlineColor="#000000" // Tiefschwarz
             >
                {name}
             </Text>
        </group>
      </group>
    </group>
  )
}

// --- 4. KAMERA ---
function CameraController({ startTransition, isMobile }) {
  const { camera } = useThree()
  useFrame(() => {
    let targetZ = isMobile ? 13 : 7.5 
    if (startTransition) targetZ = isMobile ? 7 : 3.0 
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -1.0, 0.02)
    camera.lookAt(0, 0, 0)
  })
  return null
}

// --- 5. HAUPTSZENE ---
export default function SpaceScene({ startTransition }) {
  const earthRef = useRef()
  const cloudsRef = useRef()
  const moonGroupRef = useRef()
  const systemState = useRef({ wave: 0 })
  const { gl } = useThree()

  const { width } = useThree().size
  const isMobile = width < 768

  const textures = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg'
  ])

  useEffect(() => {
    const maxAnisotropy = gl.capabilities.getMaxAnisotropy()
    textures.forEach(tex => {
        tex.anisotropy = maxAnisotropy
        tex.minFilter = THREE.LinearMipmapLinearFilter
        tex.magFilter = THREE.LinearFilter
    })
  }, [textures, gl])

  const [earthMap, earthNormal, earthSpecular, cloudsMap, moonMap] = textures

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const speed = startTransition ? 0.05 : 0.0008 
    
    earthRef.current.rotation.y += speed
    cloudsRef.current.rotation.y += speed * 1.15 

    if (!startTransition) { 
        const moonTime = t * 0.1 + 3.5
        moonGroupRef.current.position.x = Math.sin(moonTime) * 7
        moonGroupRef.current.position.z = Math.cos(moonTime) * 4.5
        moonGroupRef.current.position.y = Math.sin(moonTime) * 0.5
        moonGroupRef.current.rotation.y = -t * 0.1
        systemState.current.wave = t * 0.5; 
    }
  })

  return (
    <>
      <CameraController startTransition={startTransition} isMobile={isMobile} />
      
      <ambientLight intensity={0.03} color="#001133" /> 
      <directionalLight position={[10, 5, 8]} intensity={3.5} color="#fff8e7" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#002266" />
      <spotLight position={[-10, 5, -10]} angle={0.5} intensity={5.0} color="#2266ff" distance={30} />
      
      <Stars radius={300} depth={50} count={6000} factor={4} saturation={0} speed={0.5} />
      
      <group>
        <group ref={earthRef} rotation={[0.6, 4.7, 0]}>
            <mesh>
              <sphereGeometry args={[2, 64, 64]} />
              <meshStandardMaterial 
                map={earthMap} 
                normalMap={earthNormal} 
                normalScale={[1.2, 1.2]} 
                metalnessMap={earthSpecular}
                metalness={0.6} 
                roughness={0.7} 
                color="#fffff0"
              />
            </mesh>

            {cities.map((city, i) => (
                <CityMarker 
                    key={i} 
                    lat={city.lat} 
                    lon={city.lon} 
                    name={city.name} 
                    radius={2}
                    isMobile={isMobile}
                    systemState={systemState}
                />
            ))}
        </group>

        <mesh ref={cloudsRef} rotation={[0.6, 4.7, 0]}>
          <sphereGeometry args={[2.04, 64, 64]} />
          <meshStandardMaterial 
            map={cloudsMap} 
            transparent 
            opacity={0.5} 
            blending={THREE.AdditiveBlending} 
            side={THREE.DoubleSide} 
            alphaMap={cloudsMap} 
            depthWrite={false} 
          />
        </mesh>

        <mesh scale={[1.1, 1.1, 1.1]}> 
            <sphereGeometry args={[2, 64, 64]} />
            <atmosphereMaterial transparent blending={THREE.AdditiveBlending} side={THREE.BackSide} />
        </mesh>
        
        <group ref={moonGroupRef}>
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} /> 
                <meshStandardMaterial map={moonMap} metalness={0.1} roughness={0.8} />
            </mesh>
        </group>
        
      </group>
    </>
  )
}