import { useNavigate } from 'react-router-dom'
import { useState } from 'react' // NEU: useState importieren

export default function Portfolio() {
  const navigate = useNavigate()
  
  // NEU: Zustand für das Zoom-Modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // BILD: NEBLIGES TAL (Hintergrund bleibt atmosphärisch)
  const bgImage = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1740&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans relative overflow-hidden animate-fadeIn selection:bg-white selection:text-black">
      
      {/* --- BACKGROUND LAYER --- (Hintergrund bleibt) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[60%] contrast-110"
              style={{ backgroundImage: `url('${bgImage}')` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Noise für den Look */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <div className="fixed top-8 left-8 z-50">
           <button 
              onClick={() => navigate('/')} 
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors"
           >
              <span className="block w-8 h-[1px] bg-gray-500 group-hover:bg-white transition-colors"></span>
              Return to Orbit
           </button>
      </div>

      {/* --- MAIN CONTENT: THE VAULT --- */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 py-24 md:px-6">
          
          {/* Glass Container - Breiter für bessere Übersicht */}
          <div className="relative p-6 md:p-16 border border-white/10 bg-[#0a0a0a]/30 backdrop-blur-md overflow-hidden group hover:border-white/20 transition-all duration-700 max-w-4xl w-full">
              
              {/* Dekorative Ecken */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30"></div>

              {/* Status Header */}
              <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
                  <div>
                      <p className="text-[10px] font-mono text-gray-400 tracking-widest mb-1">PROJECT ARCHIVE</p>
                      <p className="text-xs font-bold text-white tracking-[0.2em]">RESTRICTED AREA</p>
                  </div>
                  <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white animate-pulse rounded-full"></div>
                      <span className="text-[10px] font-mono text-gray-400">VALLEY STATE</span>
                  </div>
              </div>

              {/* CENTERPIECE TEXT */}
              <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none opacity-90 drop-shadow-2xl">
                      PROJEKTE
                  </h1>
              </div>

              {/* --- BILD: ZWISCHENKRITIK - GLASKLAR UND KLICKBAR --- */}
              <div 
                  className="relative overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:border-white/20"
                  onClick={() => setIsModalOpen(true)} // NEU: Klick öffnet das Modal
              >
                  {/* ALTES DUNKLES OVERLAY UND GRAYSCALE ENTFERNT -> BILD IST JETZT KLAR */}
                  <img 
                      src="/projects/zwischenkritik.jpeg" 
                      alt="Zwischenkritik - Pläne und Modell" 
                      className="w-full h-auto object-cover transform hover:scale-[1.03] transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Label unten rechts */}
                  <div className="absolute bottom-4 right-4 z-20 bg-black/80 border border-white/20 px-3 py-1 backdrop-blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[9px] font-mono text-gray-300 tracking-widest uppercase">FILE: Zwischenkritik_01</span>
                  </div>
              </div>

              {/* Footer Tech Details */}
              <div className="mt-16 pt-6 border-t border-white/10 flex justify-between items-center text-[9px] md:text-[10px] font-mono text-gray-500">
                  <span>SECTOR: TERRAIN_01</span>
                  <span>AWAITING INPUT</span>
              </div>

              {/* Scanline Effekt */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[length:100%_4px]"></div>
          </div>
      </div>

      {/* --- NEU: ZOOM MODAL LAYER --- */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeInSlow p-4 md:p-12"
          onClick={() => setIsModalOpen(false)} // Klick auf den Hintergrund schließt das Modal
        >
          {/* X-Button zum Schließen */}
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl font-light z-[110]"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          
          {/* Das gezoomte Bild */}
          <img 
            src="/projects/zwischenkritik.jpeg" 
            alt="Zwischenkritik - Pläne und Modell (Fullsize)" 
            className="max-w-full max-h-full object-contain shadow-2xl border border-white/10 transition-transform"
            onClick={(e) => e.stopPropagation()} // Verhindert, dass ein Klick aufs Bild das Modal schließt
          />
        </div>
      )}
    </div>
  )
}