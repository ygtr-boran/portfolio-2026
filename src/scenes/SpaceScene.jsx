import { useFrame, useThree } from '@react-three/fiber'
import { Stars, useTexture, shaderMaterial, Text, Html } from '@react-three/drei'
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

// --- 2. STÄDTE ---
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

// --- 3. MARKER ---
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
             <Text color="white" anchorX="center" anchorY="middle" fontSize={fontSize} outlineWidth={outlineWidth} outlineColor="#000000">
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
    let targetY = -1.0
    if (startTransition) {
        targetZ = isMobile ? 11 : 6.0 
        targetY = -0.5 
    }
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.02)
    camera.lookAt(0, 0, 0)
  })
  return null
}

// --- 5. NEBEL-CONTROLLER (DER VORHANG) ---
function FogCurtain({ moonRef }) {
    const { scene, camera } = useThree();
    // Vektoren recyclen
    const moonPos = useMemo(() => new THREE.Vector3(), [])
    const camPos = useMemo(() => new THREE.Vector3(), [])

    useFrame(() => {
        if (!moonRef.current) return;

        // Distanz messen
        moonRef.current.getWorldPosition(moonPos);
        camera.getWorldPosition(camPos);
        const distance = camPos.distanceTo(moonPos);

        // LOGIK: 
        // Wenn Distanz < 7: Vorhang zieht zu (Nebel wird dicht)
        // Wenn Distanz > 7: Vorhang ist offen (Nebel ist weg)
        
        let targetDensity = 0; // Standard: Kein Nebel

        if (distance < 7.0) {
            // Je näher, desto dichter der Nebel. 
            // Bei Distanz 3 ist er extrem dicht (0.2), bei 7 ist er weg (0).
            const proximity = 1 - ((distance - 3.0) / 4.0); // Normalize 0 to 1
            // Clamp value between 0 and 1
            const factor = Math.max(0, Math.min(1, proximity));
            targetDensity = factor * 0.15; // Max Dichte
        }

        // Weicher Übergang (Lerp)
        if (scene.fog) {
            scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, targetDensity, 0.05);
        }
    });

    return <fogExp2 attach="fog" args={['#000000', 0]} />; // Startet unsichtbar
}


// --- 6. HAUPTSZENE ---
export default function SpaceScene({ startTransition, lightColor }) {
  const earthRef = useRef()
  const cloudsRef = useRef()
  const moonGroupRef = useRef()
  const moonMeshRef = useRef()
  const hoverLightRef = useRef() 
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
    const speed = startTransition ? 0.005 : 0.0005 
    
    earthRef.current.rotation.y += speed
    cloudsRef.current.rotation.y += speed * 1.15 

    const moonTime = t * 0.1 + 3.5
    moonGroupRef.current.position.set(Math.sin(moonTime) * 7, Math.sin(moonTime) * 0.5, Math.cos(moonTime) * 4.5)
    moonGroupRef.current.rotation.y = -t * 0.1
    
    systemState.current.wave = t * 0.5; 

    // --- MOND HIGHLIGHT LOGIK ---
    // Wenn der Nebel kommt, muss der Mond leuchten, um durchzustechen.
    if (moonMeshRef.current) {
        // Wir holen uns die Dichte des Nebels aus der Szene, um das Leuchten zu synchronisieren
        // (Kleiner Hack: Wir greifen auf scene.fog.density zu)
        const currentFog = earthRef.current.parent.fog ? earthRef.current.parent.fog.density : 0;
        
        // Wenn Nebel da ist (> 0.01), drehen wir das Leuchten auf
        const targetEmissive = currentFog > 0.01 ? 1.5 : 0;
        
        moonMeshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
            moonMeshRef.current.material.emissiveIntensity,
            targetEmissive,
            0.1
        );
    }

    // Hover Licht
    if (hoverLightRef.current) {
        if (lightColor) {
            hoverLightRef.current.color.set(lightColor);
            let flicker = (lightColor === '#ff3300') ? (Math.random() * 5) + Math.sin(t * 30) * 2 : Math.sin(t * 8) * 2;
            const targetIntensity = 8 + flicker;
            hoverLightRef.current.intensity = THREE.MathUtils.lerp(hoverLightRef.current.intensity, targetIntensity, 0.3)
        } else {
            hoverLightRef.current.intensity = THREE.MathUtils.lerp(hoverLightRef.current.intensity, 0, 0.1)
        }
    }
  })

  return (
    <>
      <CameraController startTransition={startTransition} isMobile={isMobile} />
      
      {/* DER NEBEL VORHANG */}
      <FogCurtain moonRef={moonGroupRef} />

      {/* HTML Blur Overlay */}
      <Html fullscreen style={{ pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
            position: 'absolute', inset: 0,
            backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', 
            backgroundColor: 'rgba(0,0,0,0.4)', opacity: startTransition ? 1 : 0, transition: 'opacity 1.5s ease-in-out',
        }} />
      </Html>

      <ambientLight intensity={0.03} color="#001133" /> 
      <directionalLight position={[10, 5, 8]} intensity={3.5} color="#fff8e7" />
      <pointLight ref={hoverLightRef} position={[0, -3, 2]} color="#ffffff" distance={12} intensity={0} decay={2} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#002266" />
      
      <Stars radius={300} depth={50} count={6000} factor={4} saturation={0} speed={0.5} />
      
      <group>
        <group ref={earthRef} rotation={[0.6, 4.7, 0]}>
            <mesh>
              <sphereGeometry args={[2, 64, 64]} />
              <meshStandardMaterial map={earthMap} normalMap={earthNormal} normalScale={[1.2, 1.2]} metalnessMap={earthSpecular} metalness={0.6} roughness={0.7} color="#fffff0" />
            </mesh>
            {cities.map((city, i) => (
                <CityMarker key={i} lat={city.lat} lon={city.lon} name={city.name} radius={2} isMobile={isMobile} systemState={systemState} />
            ))}
        </group>
        <mesh ref={cloudsRef} rotation={[0.6, 4.7, 0]}>
          <sphereGeometry args={[2.04, 64, 64]} />
          <meshStandardMaterial map={cloudsMap} transparent opacity={0.5} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} alphaMap={cloudsMap} depthWrite={false} />
        </mesh>
        <mesh scale={[1.1, 1.1, 1.1]}> 
            <sphereGeometry args={[2, 64, 64]} />
            <atmosphereMaterial transparent blending={THREE.AdditiveBlending} side={THREE.BackSide} />
        </mesh>
        
        {/* MOND MIT GLOW */}
        <group ref={moonGroupRef}>
            <mesh ref={moonMeshRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial 
                    map={moonMap} 
                    metalness={0.1} 
                    roughness={0.8} 
                    emissive="#ffffff" // Wird per Code gesteuert
                    emissiveIntensity={0} 
                />
            </mesh>
        </group>
      </group>
    </>
  )
}