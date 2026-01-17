import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  // HINWEIS: Das langsame useEffect-Skript wurde komplett entfernt.
  // Wir nutzen jetzt reinen Code für maximale Geschwindigkeit.

  // DAS GRID PATTERN (Der Bauplan-Look)
  const gridStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
    backgroundSize: '30px 30px'
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden animate-fadeIn selection:bg-blue-500 selection:text-white" style={gridStyle}>
        
        {/* --- NAVIGATION --- */}
        <div className="fixed top-8 left-8 z-50">
             <button 
                onClick={() => navigate('/')} 
                className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors"
             >
                <span className="block w-8 h-[1px] bg-gray-600 group-hover:bg-blue-500 transition-colors"></span>
                Return to Orbit
             </button>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative z-10">
            
            {/* --- HEADER --- */}
            <div className="mb-20 border-l border-white/10 pl-8 md:pl-12">
                <p className="text-blue-500 font-mono text-xs tracking-widest mb-2">01 // IDENTITY</p>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                    ARCHITECT.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">MAKER.</span>
                </h1>
            </div>

            {/* --- MAIN GRID --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* LINKE SPALTE: DEINE STORY (7 Spalten breit) */}
                <div className="lg:col-span-7 space-y-12">
                    
                    {/* Der Haupttext */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                        <h2 className="text-2xl font-bold uppercase mb-6 text-white tracking-wide">
                            Architektur. Handwerk. Vision.
                        </h2>
                        
                        <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base font-light">
                            <p>
                                Ich bin kein theoretischer Planer. Mit <strong className="text-white font-semibold">umfassender Praxiserfahrung im Handwerk</strong> (Großprojekte in Maler- & Raumausstattung) kenne ich den Staub der Baustelle.
                            </p>
                            <p>
                                Mit technischem Verständnis aus dem <strong className="text-white font-semibold">Bauingenieurwesen</strong> und dem Auge aus dem Architekturstudium verfolge ich ein klares Ziel:
                            </p>
                            <p className="text-white text-lg font-medium border-l-2 border-blue-500 pl-4 italic">
                                "Die kompromisslose Verbindung von Gestaltung und Umsetzung als Baumeister."
                            </p>
                        </div>
                    </div>

                    {/* Footer Zitat */}
                    <div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-600 leading-tight">
                            Leidenschaft fürs Bauen. <br/>
                            <span className="text-white">Mut zum Anpacken.</span>
                        </h3>
                    </div>
                </div>

                {/* RECHTE SPALTE: CUSTOM DIGITAL ID (Schnell & Stabil) */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-10">
                    
                    {/* ID CARD CONTAINER */}
                    <div className="relative p-[1px] bg-gradient-to-b from-blue-500/50 to-transparent group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
                        
                        {/* Die Karte selbst */}
                        <div className="bg-black/90 backdrop-blur-xl p-8 relative overflow-hidden">
                            
                            {/* Header: Status Light */}
                            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                <span className="text-[10px] font-mono text-blue-400 tracking-widest">ENCRYPTED CONNECTION</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-green-500 font-mono animate-pulse">ONLINE</span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                                </div>
                            </div>

                            {/* Content: Profilbild & Name */}
                            <div className="flex items-center gap-6 mb-8">
                                {/* Avatar-Ersatz (Initiale) */}
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-900 to-black border border-blue-500/30 flex items-center justify-center relative flex-shrink-0">
                                    <span className="text-xl md:text-2xl font-bold text-white">BY</span>
                                    {/* Ecken-Marker */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></div>
                                </div>

                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white leading-none mb-1">BORAN YIGITER</h2>
                                    <p className="text-[10px] md:text-xs text-gray-400 font-mono tracking-widest mb-2">ARCHITECT // MAKER</p>
                                    <p className="text-[10px] md:text-xs text-blue-400">University of Liechtenstein</p>
                                </div>
                            </div>

                            {/* ACTION BUTTON - Führt direkt zu deinem Profil */}
                            <a 
                                href="https://at.linkedin.com/in/boranyigiter" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 bg-white/5 border border-white/10 text-white text-xs tracking-[0.3em] uppercase hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 group-hover:bg-white/10"
                            >
                                Connect on LinkedIn
                            </a>

                            {/* Tech Deko unten */}
                            <div className="mt-6 flex justify-between text-[9px] font-mono text-gray-600">
                                <span>SECURE ID: 8X-2026</span>
                                <span>DATA: PUBLIC</span>
                            </div>

                            {/* Blauer Glow Effekt im Hintergrund */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-600/30 transition-colors"></div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}