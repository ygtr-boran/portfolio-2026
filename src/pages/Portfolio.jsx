import { useNavigate } from 'react-router-dom'

export default function Portfolio() {
  const navigate = useNavigate()
  
  // Technische Hintergrund-Linien (CSS Grid Pattern)
  const gridStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }

  const projects = [
    { title: "Orbital Habitat 01", type: "Concept / 3D", year: "2024", area: "1200 m²" },
    { title: "Lunar Gateway Port", type: "Competition", year: "2025", area: "4500 m²" },
    { title: "Mars Colony Alpha", type: "Research", year: "2026", area: "∞ m²" },
    { title: "Eco-Tower Berlin", type: "Realization", year: "2023", area: "850 m²" }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans animate-fadeIn relative overflow-x-hidden" style={gridStyle}>
      {/* Background Gradient Spot */}
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,100,255,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 p-6 md:p-20 max-w-7xl mx-auto">
        
        {/* Header & Back Button */}
        <div className="flex justify-between items-start mb-16 md:mb-24">
            <div>
                <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-2">PROJECTS</h1>
                <p className="text-blue-400 text-xs md:text-sm tracking-[0.3em] uppercase">Architecture & Computation</p>
            </div>
            <button onClick={() => navigate('/')} className="group flex items-center gap-3 text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors">
                <span className="w-8 h-[1px] bg-gray-600 group-hover:bg-white transition-colors"></span>
                Orbit
            </button>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((proj, i) => (
                <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                    {/* Placeholder für Bild */}
                    <div className="aspect-[16/9] bg-gray-900/50 group-hover:bg-blue-900/10 transition-colors relative">
                        {/* Overlay Effekt */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                        
                        {/* Technische Daten Overlay */}
                        <div className="absolute top-4 right-4 flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <span className="text-[10px] text-blue-300 font-mono">{proj.year}</span>
                            <span className="text-[10px] text-blue-300 font-mono">{proj.area}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 relative">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                        
                        <h3 className="text-xl md:text-3xl font-bold uppercase mb-2 group-hover:text-blue-200 transition-colors">{proj.title}</h3>
                        <p className="text-xs text-gray-400 tracking-widest uppercase">{proj.type}</p>
                        
                        {/* Arrow Icon */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-400">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer */}
        <div className="mt-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-gray-600 text-[10px] uppercase tracking-widest">
            <p>© 2026 Boran Yigiter</p>
            <p>System Status: Operational</p>
        </div>
      </div>
    </div>
  )
}