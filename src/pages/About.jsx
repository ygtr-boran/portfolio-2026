import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  // 1. DAS SKRIPT LADEN (Technischer Maschinenraum)
  useEffect(() => {
    const scriptId = 'linkedin-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    } else {
      // Wenn das Skript schon da ist, Badge neu rendern (für Navigation)
      if (window.LIRenderAll) window.LIRenderAll();
    }
  }, [])

  // 2. DAS GRID PATTERN (Der Bauplan-Look)
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
                    
                    {/* Der Haupttext - Edel verpackt */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                        {/* Deko-Elemente */}
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

                {/* RECHTE SPALTE: DIGITAL ID (LINKEDIN) (5 Spalten breit) */}
                <div className="lg:col-span-5 relative">
                     {/* Sticky Container, damit es beim Scrollen kurz stehen bleibt (optional, wirkt gut) */}
                     <div className="sticky top-10">
                        
                        {/* ID CARD CONTAINER */}
                        <div className="relative p-[1px] bg-gradient-to-b from-white/20 to-transparent">
                            <div className="bg-black/80 backdrop-blur-md p-6 relative">
                                
                                {/* Header der Card */}
                                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                    <span className="text-[10px] font-mono text-blue-400 tracking-widest">LIVE CONNECTION</span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>

                                {/* --- DER BADGE --- */}
                                {/* Wir zentrieren ihn im Container */}
                                <div className="flex justify-center scale-95 origin-top">
                                    <div 
                                        className="badge-base LI-profile-badge" 
                                        data-locale="de_DE" 
                                        data-size="large" 
                                        data-theme="dark" 
                                        data-type="VERTICAL" 
                                        data-vanity="boranyigiter" 
                                        data-version="v1"
                                    >
                                        <a 
                                            className="badge-base__link LI-simple-link" 
                                            href="https://at.linkedin.com/in/boranyigiter?trk=profile-badge"
                                        >
                                            Boran Yigiter
                                        </a>
                                    </div>
                                </div>
                                {/* ---------------- */}

                                {/* Tech Footer der Card */}
                                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-[10px] font-mono text-gray-500">
                                    <span>LOC: AUSTRIA</span>
                                    <span>ID: B_YIGITER</span>
                                </div>
                            </div>
                        </div>

                        {/* Hintergrund Glühen für den Badge */}
                        <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10"></div>
                     </div>
                </div>

            </div>
        </div>
    </div>
  )
}