import { useFrame, useThree } from '@react-three/fiber'
import { Stars, useTexture, shaderMaterial, Text, Html } from '@react-three/drei'
import { useRef, useMemo, useEffect, useState } from 'react'
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

// --- 2. DATA (STRATEGIC DISTRIBUTION) ---
const cities = [
  // --- EUROPA & MIDDLE EAST ---
  { name: "BERLIN", lat: 52.5200, lon: 13.4050 },
  { name: "LONDON", lat: 51.5074, lon: -0.1278 }, // Weit genug weg von Berlin
  { name: "ISTANBUL", lat: 41.0082, lon: 28.9784 }, // Die Brücke zwischen Ost & West

  // --- AMERIKA (Nord & Süd getrennt) ---
  { name: "NEW YORK", lat: 40.7128, lon: -74.0060 },
  { name: "SAN FRANCISCO", lat: 37.7749, lon: -122.4194 }, // Damit die USA nicht leer aussieht
  { name: "SAO PAULO", lat: -23.5505, lon: -46.6333 }, // Beherrscht den Süden

  // --- AFRIKA ---
  { name: "CAPE TOWN", lat: -33.9249, lon: 18.4241 }, // Perfekt isoliert im Süden

  // --- ASIEN & PAZIFIK ---
  { name: "DUBAI", lat: 25.2048, lon: 55.2708 }, // Wichtiger Hub, genug Abstand zu Istanbul
  { name: "SINGAPORE", lat: 1.3521, lon: 103.8198 }, // Zentralasien-Hub
  { name: "TOKYO", lat: 35.6762, lon: 139.6503 }, // Fernost
  { name: "SYDNEY", lat: -33.8688, lon: 151.2093 } // Ozeanien
];

const quotes = [
  { text: "God is in the details.", author: "Mies van der Rohe" },
  { text: "Form follows function.", author: "Louis Sullivan" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Architecture should speak of its time and place, but yearn for timelessness.", author: "Frank Gehry" },
  { text: "Less is more.", author: "Mies van der Rohe" },
  { text: "Ornament is crime.", author: "Adolf Loos" },
  { text: "A house is a machine for living in.", author: "Le Corbusier" },
  { text: "There are 360 degrees, so why stick to one?", author: "Zaha Hadid" },
  { text: "Yes is more.", author: "Bjarke Ingels" },
  { text: "Form and function are one.", author: "Frank Lloyd Wright" },
  { text: "Architecture is invention.", author: "Oscar Niemeyer" },
  { text: "Light is the origin of all being.", author: "Tadao Ando" },
  { text: "Architecture begins where engineering ends.", author: "Walter Gropius" },
  { text: "Less, but better.", author: "Dieter Rams" },
  { text: "Design is not making beauty, beauty emerges from selection.", author: "Louis Kahn" },
  { text: "Everything connects.", author: "Norman Foster" },
  { text: "Structure is the giver of light.", author: "Louis Kahn" },
  { text: "To provide meaningful architecture is not to parody history, but to articulate it.", author: "Daniel Libeskind" },
  { text: "Function influence but does not dictate form.", author: "Eero Saarinen" },
  { text: "Architecture is the art of how to waste space.", author: "Philip Johnson" },
  { text: "Creation is a patient search.", author: "Le Corbusier" },
  { text: "I call architecture frozen music.", author: "Johann Wolfgang von Goethe" },
  { text: "We shape our buildings; thereafter they shape us.", author: "Winston Churchill" },
  { text: "A design isn't finished until someone is using it.", author: "Brenda Laurel" },
  { text: "Recognizing the need is the primary condition for design.", author: "Charles Eames" }
];

// --- 3. HUD OVERLAY (FIXED & STYLED) ---
function HudOverlay({ startTransition }) {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [fade, setFade] = useState(true);

    // Zitate Rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => {
                setQuoteIndex((prev) => (prev + 1) % quotes.length);
                setFade(true); 
            }, 1000); 
        }, 8000); 
        return () => clearInterval(interval);
    }, []);

    const containerClass = startTransition ? "opacity-0 pointer-events-none" : "opacity-100";

    // WICHTIG: zIndex auf 100, pointerEvents auf Container AUS (none)
    return (
        <Html fullscreen style={{ pointerEvents: 'none', zIndex: 100 }}>
            <div className={`absolute inset-0 transition-opacity duration-1000 ${containerClass} font-mono text-white pointer-events-none`}>
                
                {/* OBEN LINKS: Branding */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-auto">
                    <h1 className="text-xl md:text-3xl font-bold tracking-tighter leading-none drop-shadow-lg select-none">
                        BORAN YIGITER
                    </h1>
                </div>

                {/* UNTEN LINKS: Zitate (Desktop Only) */}
                <div className="absolute bottom-12 left-12 max-w-[300px] hidden md:block pointer-events-auto">
                    <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-lg font-light leading-relaxed drop-shadow-md select-none">"{quotes[quoteIndex].text}"</p>
                        <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest select-none">// {quotes[quoteIndex].author}</p>
                    </div>
                </div>

                {/* --- RECHTLICHES (IMPRESSUM & DATENSCHUTZ) --- */}
                <div className="absolute bottom-2 w-full flex justify-center items-center gap-6 pointer-events-auto z-50">
                    <a 
                        href="/impressum" 
                        className="text-[10px] md:text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                    >
                        Impressum
                    </a>
                    <a 
                        href="/datenschutz" 
                        className="text-[10px] md:text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                    >
                        Datenschutz
                    </a>
                </div>

                {/* UNTEN RECHTS: Social Icons */}
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-4 pointer-events-auto z-50">
                    
                    {/* EMAIL BUTTON */}
                    <a 
                        href="mailto:yigiterboran@icloud.com" 
                        className="group relative p-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer z-50 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        title="Send Email"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </a>

                    {/* PHONE BUTTON */}
                    <a 
                        href="tel:+436765589349" 
                        className="group relative p-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer z-50 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        title="Call Now"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </a>

                    {/* INSTAGRAM BUTTON */}
                    <a 
                        href="https://instagram.com/ygtr.boran" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative p-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer z-50 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        title="Instagram"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>

                </div>

            </div>
        </Html>
    )
}

// --- 4. MARKER ---
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

// --- 5. KAMERA ---
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

  // --- HIER IST DIE ÄNDERUNG: LOKALE DATEIEN ---
  const textures = useTexture([
    '/textures/earth_map.jpg',
    '/textures/earth_normal.jpg',
    '/textures/earth_specular.jpg',
    '/textures/clouds.png',
    '/textures/moon.jpg'
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
      
      {/* HUD OVERLAY */}
      <HudOverlay startTransition={startTransition} />

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
        
        <group ref={moonGroupRef}>
            <mesh ref={moonMeshRef}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial map={moonMap} metalness={0.1} roughness={0.8} />
            </mesh>
        </group>
      </group>
    </>
  )
}