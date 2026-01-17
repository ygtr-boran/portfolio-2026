import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
import SpaceScene from '../scenes/SpaceScene'

function Loader() {
  const { progress } = useProgress()
  return <Html center><div className="text-blue-500 font-mono text-xs tracking-[0.3em]">LOADING... {progress.toFixed(0)}%</div></Html>
}

export default function Home() {
  const [transition, setTransition] = useState(false)
  const navigate = useNavigate()

  const handleEnter = (path) => {
    setTransition(true)
    setTimeout(() => navigate(path), 1500)
  }

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden font-sans">
      
      {/* 1. HINTERGRUND (3D WELT) */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={<Loader />}>
            <SpaceScene startTransition={transition} />
          </Suspense>
        </Canvas>
      </div>

      {/* 2. ZENTRUM: TITEL & BUTTONS (Die Action) */}
      <div className={`absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none select-none transition-opacity duration-1000 ${transition ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* TITEL */}
        <h1 
            className="text-4xl md:text-9xl font-bold tracking-tighter text-white uppercase mb-10 text-center leading-none"
            style={{ 
                textShadow: '0 2px 4px rgba(0,0,0,1.0), 0 0 60px rgba(0,0,0,0.8)' 
            }}
        >
          Global<br />Vision
        </h1>

        {/* BUTTONS (Direkt unter dem Titel) */}
        <div className="pointer-events-auto flex flex-col md:flex-row gap-4 md:gap-8">
           <button onClick={() => handleEnter('/portfolio')} className="px-8 py-3 border border-blue-500/30 bg-black/60 backdrop-blur-sm text-blue-200 uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_15px_rgba(0,100,255,0.3)] hover:shadow-[0_0_25px_rgba(0,100,255,0.6)]">
             Projekte
           </button>
           <button onClick={() => handleEnter('/about')} className="px-8 py-3 border border-white/30 bg-black/60 backdrop-blur-sm text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
             Profil
           </button>
        </div>
      </div>

      {/* 3. FUSSZEILE: DEIN BRANDING (Das Fundament) */}
      {/* Positioniert ganz unten (bottom-10) */}
      <div className={`absolute bottom-10 left-0 w-full z-10 flex flex-col items-center pointer-events-none select-none transition-opacity duration-1000 ${transition ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* NAME */}
          <h2 
            className="text-white text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-2"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,1.0)' }}
          >
              BORAN YIGITER
          </h2>
          
          {/* UNI */}
          <p 
            className="text-blue-200/60 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,1.0)' }}
          >
              University of Liechtenstein
          </p>
      </div>

    </div>
  )
}