import { useNavigate } from 'react-router-dom'

// --- IMPORT FÜR BILD ---
import profileImg from '../assets/profile.jpeg'

export default function About() {
  const navigate = useNavigate()

  // BILDER DEFINITIONEN
  const globalBg = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop"; 

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans relative overflow-x-hidden animate-fadeIn selection:bg-white selection:text-black">
        
        {/* --- GLOBALER HINTERGRUND --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${globalBg}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
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

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
            
            {/* --- HEADER --- */}
            <div className="mb-20 border-l-2 border-white pl-8 md:pl-12">
                <p className="text-gray-400 font-mono text-xs tracking-widest mb-2">01 // IDENTITY</p>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none shadow-black drop-shadow-2xl">
                    ARCHITECT.<br/>
                    <span className="text-white">MAKER.</span>
                </h1>
            </div>

            {/* --- MAIN GRID --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* LINKE SPALTE: DEINE STORY */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="relative overflow-hidden group rounded-sm shadow-2xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md transition-all duration-500 hover:border-white/30">
                        <div className="relative p-8 md:p-12">
                            <h2 className="text-2xl font-bold uppercase mb-6 text-white tracking-wide border-b border-white/30 pb-4 inline-block">
                                Architektur. Handwerk. Vision.
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base font-light">
                                <p>
                                    Ich bin kein theoretischer Planer. Mit <strong className="text-white font-semibold">umfassender Praxiserfahrung im Handwerk</strong> (Großprojekte in Maler- & Raumausstattung) kenne ich den Staub der Baustelle.
                                </p>
                                <p>
                                    Mit technischem Verständnis aus dem <strong className="text-white font-semibold">Bauingenieurwesen</strong> und dem Auge aus dem Architekturstudium verfolge ich ein klares Ziel:
                                </p>
                                <p className="text-white text-lg font-medium border-l-2 border-white pl-4 italic bg-black/20 p-2">
                                    "Die kompromisslose Verbindung von Gestaltung und Umsetzung als Baumeister."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-400 leading-tight">
                            Leidenschaft fürs Bauen. <br/>
                            <span className="text-white">Mut zum Anpacken.</span>
                        </h3>
                    </div>
                </div>

                {/* RECHTE SPALTE: ID CARD MIT KONTAKT */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-10">
                    
                    <div className="relative group hover:-translate-y-2 transition-transform duration-500">
                        
                        <div className="relative overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md">
                            
                            <div className="relative p-8 z-10">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                    <span className="text-[10px] font-mono text-gray-400 tracking-widest">ARCHITECTURAL PASS</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-white font-mono animate-pulse">ACTIVE</span>
                                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="mb-8">
                                    
                                    {/* BILD */}
                                    <div className="w-full aspect-square relative overflow-hidden rounded-sm border border-white/10 shadow-2xl mb-6 group-hover:border-white/30 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none"></div>
                                        <img 
                                            src={profileImg} 
                                            alt="Boran Yigiter" 
                                            className="w-full h-full object-cover contrast-110 transition-all duration-700" 
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.innerHTML = '<div class="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]"><span class="text-white font-bold text-xs tracking-widest">IMAGE NOT FOUND</span></div>';
                                            }}
                                        />
                                    </div>

                                    {/* Name & Branding */}
                                    <div className="text-center mb-6">
                                        <h2 className="text-3xl font-bold text-white leading-none mb-2">BORAN YIGITER</h2>
                                        <p className="text-xs text-gray-400 font-mono tracking-[0.2em] mb-2 uppercase">Architect // Maker</p>
                                        <p className="text-[10px] md:text-xs text-gray-500">University of Liechtenstein</p>
                                    </div>

                                    {/* --- NEU: KONTAKT DATEN DIREKT ANGEZEIGT --- */}
                                    <div className="space-y-4 border-t border-white/10 pt-6">
                                        
                                        {/* Email */}
                                        <a href="mailto:yigiterboran@icloud.com" className="group flex flex-col items-center hover:bg-white/5 p-2 rounded transition-colors">
                                            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase mb-1">Email Protocol</span>
                                            <span className="text-sm text-white font-bold tracking-wide group-hover:text-blue-300 transition-colors">yigiterboran@icloud.com</span>
                                        </a>

                                        {/* Telefon */}
                                        <a href="tel:+436765589349" className="group flex flex-col items-center hover:bg-white/5 p-2 rounded transition-colors">
                                            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase mb-1">Direct Line</span>
                                            <span className="text-sm text-white font-bold tracking-wide group-hover:text-blue-300 transition-colors">+43 676 5589349</span>
                                        </a>

                                    </div>
                                </div>

                                {/* LinkedIn Button */}
                                <a 
                                    href="https://at.linkedin.com/in/boranyigiter" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="relative block w-full text-center py-4 bg-white/5 border border-white/10 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 mt-6"
                                >
                                    Connect on LinkedIn
                                </a>

                                {/* Footer ID */}
                                <div className="mt-6 flex justify-between text-[9px] font-mono text-gray-500">
                                    <span>ID: 8X-2026</span>
                                    <span>MAT: MONOCHROME GLASS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}