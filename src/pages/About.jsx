import { useNavigate } from 'react-router-dom'

// --- IMPORT FÜR PROFILBILD ---
import profileImg from '../assets/profile.jpeg'

export default function About() {
  const navigate = useNavigate()

  const globalBg = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2674&auto=format&fit=crop"; 

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans relative overflow-x-hidden animate-fadeIn selection:bg-white selection:text-black">
        
        {/* --- GLOBALER HINTERGRUND --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${globalBg}')` }}></div>
            <div className="absolute inset-0 bg-black/60"></div> {/* Etwas dunkler für besseren Kontrast */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        {/* --- NAVIGATION --- */}
        <div className="fixed top-8 left-8 z-50">
             <button onClick={() => navigate('/')} className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors">
                <span className="block w-8 h-[1px] bg-gray-500 group-hover:bg-white transition-colors"></span>
                Return to Orbit
             </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
            
            {/* --- HEADER --- */}
            <div className="mb-16 border-l-2 border-white pl-8 md:pl-12">
                <p className="text-gray-400 font-mono text-xs tracking-widest mb-2">01 // IDENTITY</p>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none shadow-black drop-shadow-2xl">
                    ARCHITECTURE.<br/>
                    <span className="text-blue-500">STUDENT.</span>
                </h1>
                <p className="text-sm md:text-xl text-gray-400 mt-2 font-light tracking-wide">
                    at the University of Liechtenstein
                </p>
            </div>

            {/* --- MAIN LAYOUT --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* LINKE SPALTE (Inhalt) - COL-SPAN-7 */}
                <div className="lg:col-span-7 space-y-8">
                    
                    {/* 1. TEXT BLOCK */}
                    <div className="relative overflow-hidden group rounded-sm shadow-2xl border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md">
                        <div className="relative p-8 md:p-10">
                            <h2 className="text-xl font-bold uppercase mb-6 text-white tracking-wide border-b border-white/30 pb-4 inline-block">
                                Vision & Handwerk
                            </h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-light">
                                <p>
                                    Ich bin kein theoretischer Planer. Mit <strong className="text-white font-semibold">umfassender Praxiserfahrung im Handwerk</strong> (Großprojekte in Maler- & Raumausstattung) kenne ich die Realität der Baustelle.
                                </p>
                                <p>
                                    Mit technischem Verständnis aus dem <strong className="text-white font-semibold">Bauingenieurwesen</strong> und dem Auge aus dem Architekturstudium verfolge ich ein klares Ziel:
                                </p>
                                <p className="text-white font-medium border-l-2 border-blue-500 pl-4 italic bg-blue-500/10 p-2 rounded-r">
                                    "Die kompromisslose Verbindung von Gestaltung und Umsetzung."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. EVIDENCE GRID (Die zwei Bilder nebeneinander) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* BILD 1: SPACHTELN (Farbe) */}
                        <div className="relative group cursor-crosshair overflow-hidden rounded-sm border border-white/10 bg-black">
                            {/* Tech Header */}
                            <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 z-20 border-b border-white/10 flex justify-between items-center">
                                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-300">Log: Surface Prep</span>
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                            
                            {/* Bild Container - Fixed Aspect Ratio */}
                            <div className="aspect-[4/5] relative">
                                <img 
                                    src="/assets/Boran_spachteln.jpeg" 
                                    alt="Spachteln" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Subtle Overlay für Tech-Look, aber Bild bleibt farbig */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>

                            {/* Label unten */}
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="text-white font-bold text-lg tracking-tight drop-shadow-md">HANDS-ON</span>
                            </div>
                        </div>

                        {/* BILD 2: MALEN (Farbe) */}
                        <div className="relative group cursor-crosshair overflow-hidden rounded-sm border border-white/10 bg-black">
                            {/* Tech Header */}
                            <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 z-20 border-b border-white/10 flex justify-between items-center">
                                <span className="text-[9px] font-mono uppercase tracking-widest text-gray-300">Log: Final Coat</span>
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            </div>

                            {/* Bild Container - Fixed Aspect Ratio */}
                            <div className="aspect-[4/5] relative">
                                <img 
                                    src="/assets/Boran_malen.jpeg" 
                                    alt="Malen" 
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>

                            {/* Label unten */}
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="text-white font-bold text-lg tracking-tight drop-shadow-md">PRECISION</span>
                            </div>
                        </div>

                    </div>
                    {/* ENDE EVIDENCE GRID */}

                    <div>
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-400 leading-tight">
                            Theorie ist gut. <br/>
                            <span className="text-white">Praxis ist Wahrheit.</span>
                        </h3>
                    </div>

                </div>
                {/* ENDE LINKE SPALTE */}


                {/* RECHTE SPALTE (ID Card - Sticky) - COL-SPAN-5 */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-10">
                    
                        <div className="relative group hover:-translate-y-2 transition-transform duration-500">
                            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
                                
                                <div className="relative p-6 md:p-8 z-10">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                        <span className="text-[10px] font-mono text-gray-400 tracking-widest">ARCHITECTURAL PASS</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] text-white font-mono animate-pulse">ACTIVE</span>
                                            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-6">
                                        {/* Profilbild */}
                                        <div className="w-full aspect-square relative overflow-hidden rounded-sm border border-white/10 shadow-2xl mb-6">
                                            <img 
                                                src={profileImg} 
                                                alt="Boran Yigiter" 
                                                className="w-full h-full object-cover contrast-110" 
                                            />
                                        </div>

                                        {/* Name */}
                                        <div className="text-center mb-6">
                                            <h2 className="text-2xl font-bold text-white leading-none mb-2">BORAN YIGITER</h2>
                                            <p className="text-xs text-blue-400 font-mono tracking-[0.2em] mb-2 uppercase">Architecture Student</p>
                                            <p className="text-[10px] text-gray-500">University of Liechtenstein</p>
                                        </div>

                                        {/* Kontakt */}
                                        <div className="space-y-3 border-t border-white/10 pt-6">
                                            <a href="mailto:yigiterboran@icloud.com" className="group flex justify-between items-center hover:bg-white/5 p-2 rounded transition-colors cursor-pointer">
                                                <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">Email</span>
                                                <span className="text-xs text-white font-bold group-hover:text-blue-400 transition-colors">yigiterboran@icloud.com</span>
                                            </a>
                                            <a href="tel:+436765589349" className="group flex justify-between items-center hover:bg-white/5 p-2 rounded transition-colors cursor-pointer">
                                                <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">Phone</span>
                                                <span className="text-xs text-white font-bold group-hover:text-blue-400 transition-colors">+43 676 5589349</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* LinkedIn */}
                                    <a 
                                        href="https://at.linkedin.com/in/boranyigiter" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="relative block w-full text-center py-3 bg-blue-600/20 border border-blue-500/30 text-blue-200 text-xs tracking-[0.2em] uppercase hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    >
                                        Connect on LinkedIn
                                    </a>

                                    <div className="mt-4 flex justify-between text-[9px] font-mono text-gray-600">
                                        <span>ID: 8X-2026</span>
                                        <span>LOC: FELDKIRCH</span>
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