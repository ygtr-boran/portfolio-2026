import { useNavigate } from 'react-router-dom'

export default function Portfolio() {
  const navigate = useNavigate()

  // BILD: NEBLIGES TAL (Dein Bild)
  const bgImage = "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1740&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans relative overflow-hidden animate-fadeIn selection:bg-white selection:text-black">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* 1. Dein Bild */}
          <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[60%] contrast-110"
              style={{ backgroundImage: `url('${bgImage}')` }}
          ></div>
          
          {/* 2. Abdunkelung für Lesbarkeit */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* 3. Noise Texture für den Film-Look */}
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-6">
          
          {/* Glass Container */}
          <div className="relative p-12 md:p-20 border border-white/10 bg-[#0a0a0a]/30 backdrop-blur-md overflow-hidden group hover:border-white/20 transition-all duration-700 max-w-2xl w-full">
              
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
              <div className="text-center space-y-6">
                  <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none opacity-90 drop-shadow-2xl">
                      PROJEKTE
                  </h1>
                  
                  {/* Der "Demnächst" Status */}
                  <div className="relative inline-block mt-4">
                      <div className="absolute inset-0 bg-white/5 blur-lg rounded-full"></div>
                      <span className="relative z-10 text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-white border border-white/30 px-8 py-3 rounded-sm hover:bg-white/5 transition-colors cursor-default">
                          DEMNÄCHST
                      </span>
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
    </div>
  )
}