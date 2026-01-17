import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
import SpaceScene from '../scenes/SpaceScene'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase">
        Lade System // {progress.toFixed(0)}%
      </div>
    </Html>
  )
}

export default function Home() {
  const [unlocked, setUnlocked] = useState(false)
  const [transition, setTransition] = useState(false)
  const navigate = useNavigate()

  // DER TRIGGER: EINMAL AKTIVIERT, GEHT ES NICHT MEHR ZURÜCK
  const triggerReveal = useCallback(() => {
    if (!unlocked) setUnlocked(true)
  }, [unlocked])

  useEffect(() => {
    const handleWheel = (e) => { if (e.deltaY > 0) triggerReveal() }
    const handleMouseMove = (e) => {
      // Wenn die Maus ins untere Drittel fährt
      if (e.clientY > window.innerHeight * 0.7) triggerReveal()
    }
    const handleTouch = () => triggerReveal()

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouch)
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouch)
    }
  }, [triggerReveal])

  const handleEnter = (path) => {
    setTransition(true)
    setTimeout(() => navigate(path), 1200)
  }

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden font-sans cursor-default">
      
      {/* --- LAYER 0: HINTERGRUND (FIXIERT) --- */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={<Loader />}>
            <SpaceScene startTransition={transition} />
          </Suspense>
        </Canvas>
      </div>

      {/* --- LAYER 1: DAS INTERFACE (WIRD ENTHÜLLT) --- */}
      <div 
        className={`absolute inset-0 z-10 flex flex-col justify-center items-center transition-all duration-[1500ms] ease-in-out
          ${unlocked ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* BUTTONS UND DETAILS SCHWEBEN HINTER DEM GLAS-VORHANG */}
        <div className="mt-40 md:mt-60 flex flex-col items-center gap-8 pointer-events-auto">
          <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-blue-500/50"></div>
             <p className="text-blue-400 font-mono text-[10px] tracking-[0.4em] uppercase">University of Liechtenstein</p>
             <div className="w-12 h-[1px] bg-blue-500/50"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <button 
                onClick={() => handleEnter('/portfolio')} 
                className="group relative px-12 py-3 border border-white/10 bg-white/[0.05] text-white uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-white hover:text-black transition-all duration-500"
            >
              Projekte
            </button>
            <button 
                onClick={() => handleEnter('/about')} 
                className="group relative px-12 py-3 border border-blue-500/20 bg-blue-500/[0.05] text-blue-400 uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-blue-500 hover:text-white transition-all duration-500"
            >
              Profil
            </button>
          </div>
        </div>
      </div>

      {/* --- LAYER 2: DER MONUMENTALE GLAS-VORHANG --- */}
      <div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center transition-transform duration-[1800ms] cubic-bezier(0.23, 1, 0.32, 1)"
        style={{ 
          transform: unlocked ? 'translateY(-100%)' : 'translateY(0%)'
        }}
      >
          {/* DAS HIGH-END GLAS (Kein Banding, nur Blur) */}
          <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[60px] border-b border-white/10"></div>
          
          {/* DER NAME (Zentriert im Vorhang) */}
          <div className="relative z-30 flex flex-col items-center">
            <p className="text-blue-500 font-mono text-[9px] tracking-[0.8em] uppercase mb-6 opacity-60">Architect // Maker</p>
            <h1 className="text-6xl md:text-[11rem] font-black tracking-tighter text-white uppercase text-center leading-[0.8]">
              Boran<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">Yigiter</span>
            </h1>
          </div>

          {/* DER TEASER (Verschwindet beim Trigger) */}
          {!unlocked && (
            <div className="absolute bottom-12 flex flex-col items-center animate-bounce-subtle">
               <p className="text-white/40 font-mono text-[9px] tracking-[0.4em] uppercase mb-4">Roll down to reveal</p>
               <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </div>
          )}
      </div>

      {/* --- TRANSITION OVERLAY --- */}
      <div className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 pointer-events-none ${transition ? 'opacity-100' : 'opacity-0'}`}></div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-10px); opacity: 0.8; }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
        .cubic-bezier {
            transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
      
    </div>
  )
}