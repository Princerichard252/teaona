import { motion } from "framer-motion";

const experiences = [
  {
    role: "Chief Web3 Officer",
    company: "SSWEB5",
    date: "2025 – Present",
    description: "Leading community strategy, on-chain growth, content creation, and overall Web3 operations. Serving as the driving force behind engagement, culture building, and ecosystem expansion for the SSWEB5 project.",
    gradient: "from-blue-400 to-cyan-300",
    glowColor: "from-blue-500 to-cyan-400",
    strokeColor: "#3b82f6", // blue-500
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    role: "Community Strategist",
    company: "Freelance",
    date: "2024 – Present",
    description: "Partnered with multiple early-stage Web3 projects (DeFi, NFT, and Gaming) to deliver high-impact community building, marketing campaigns, and growth strategies.",
    gradient: "from-purple-400 to-pink-400",
    glowColor: "from-purple-500 to-pink-500",
    strokeColor: "#a855f7", // purple-500
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    role: "Web3 Growth & KOL",
    company: "Independent Creator",
    date: "2023 – Present",
    description: "Grew a personal brand to over 49K followers on X by sharing authentic Web3 insights, motivational content, on-chain alpha, and community-focused advice.",
    gradient: "from-pink-400 to-orange-400",
    glowColor: "from-pink-500 to-orange-500",
    strokeColor: "#ec4899", // pink-500
    icon: (
      <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const SCurve = ({ index }) => {
  const isLeftToRight = index % 2 === 0;
  const startColor = experiences[index].strokeColor;
  const endColor = experiences[index + 1].strokeColor;

  return (
    <div className="hidden md:block absolute top-[50%] left-0 w-full h-[calc(100%+14rem)] -z-10 pointer-events-none">
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        {isLeftToRight ? (
          <path d="M 25,0 C 50,0 50,100 75,100" stroke={`url(#grad-${index})`} strokeWidth="0.5" fill="none" style={{ filter: `drop-shadow(0 0 10px ${startColor})` }} />
        ) : (
          <path d="M 75,0 C 50,0 50,100 25,100" stroke={`url(#grad-${index})`} strokeWidth="0.5" fill="none" style={{ filter: `drop-shadow(0 0 10px ${startColor})` }} />
        )}
      </svg>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full px-5 pt-28 pb-32 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 pointer-events-auto overflow-hidden">
      
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-transparent" />
      
      {/* Floating Animated Ambient Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[180px] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col gap-24 md:gap-32">
        
        {/* Header Title Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <svg className="w-4 h-4 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gray-300">
              Career Timeline
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-['Orbitron'] tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-purple-400 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] uppercase">
            Experience
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm sm:text-base lg:text-lg font-medium leading-relaxed drop-shadow-md">
            A continuous journey of building communities, defining strategies, and pushing boundaries in the Web3 ecosystem.
          </p>
        </motion.div>

        {/* Zig-Zag Timeline Layout */}
        <div className="relative w-full">
          
          {/* Mobile Vertical Connecting Line */}
          <div className="absolute md:hidden left-1/2 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 shadow-[0_0_15px_rgba(168,85,247,0.5)] -z-10 -translate-x-1/2" />

          <div className="flex flex-col gap-20 md:gap-32 w-full">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const hasNext = index < experiences.length - 1;

              return (
                <div key={exp.company} className="relative flex flex-col md:flex-row items-center w-full z-10 group">
                  
                  {/* SVG Curved Connector to Next Row (Desktop Only) */}
                  {hasNext && <SCurve index={index} />}

                  {/* 2-Column Responsive Layout */}
                  <div className={`flex flex-col md:flex-row w-full items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Massive 3D Circular Node */}
                    <div className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-0">
                      <motion.div 
                        whileHover={{ scale: 1.05, rotateZ: isEven ? 5 : -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[280px] lg:h-[280px] rounded-full flex items-center justify-center bg-[#0c1228] backdrop-blur-3xl shadow-[inset_4px_4px_15px_rgba(255,255,255,0.08),inset_-8px_-8px_20px_rgba(0,0,0,0.8),0_30px_60px_-15px_rgba(0,0,0,0.9)] border border-[#1a2342] z-20 cursor-default"
                      >
                        {/* 3D Inner Bevel Ring */}
                        <div className="absolute inset-3 rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                        <div className="absolute inset-6 rounded-full border border-black/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none" />
                        
                        {/* Ambient Deep Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.glowColor} opacity-10 group-hover:opacity-30 rounded-full blur-[30px] transition-opacity duration-700 pointer-events-none`} />
                        
                        {/* Icon */}
                        <div className={`relative z-10 text-white drop-shadow-[0_0_25px_currentColor] transition-transform duration-500 group-hover:scale-110`} style={{ color: exp.strokeColor }}>
                           {exp.icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Premium Glass Text Content Block */}
                    <div className={`w-full md:w-1/2 flex justify-center items-center px-2 sm:px-6 lg:px-12 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <motion.div 
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full max-w-lg p-8 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#0a0f25]/80 to-[#020617]/90 backdrop-blur-2xl border border-white/10 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.05),inset_-4px_-4px_10px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.7)] hover:-translate-y-2 hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-500"
                      >
                         {/* Hover Edge Sweep Glow */}
                         <div className={`absolute inset-0 bg-gradient-to-br ${exp.glowColor} opacity-0 group-hover:opacity-10 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none`} />
                         
                         <div className="relative z-10 flex flex-col gap-4">
                           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#050914] border border-[#1a2342] shadow-inner w-fit">
                             <span className="uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold text-gray-400">
                               {exp.date}
                             </span>
                           </div>
                           
                           <div>
                             <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black font-['Orbitron'] tracking-wide text-transparent bg-clip-text bg-gradient-to-br ${exp.gradient} drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] mb-2`}>
                               {exp.role}
                             </h3>
                             <h4 className="text-sm sm:text-base font-bold text-white/90 tracking-widest uppercase drop-shadow-md">
                               @ {exp.company}
                             </h4>
                           </div>

                           <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium mt-3 group-hover:text-gray-300 transition-colors drop-shadow-md">
                             {exp.description}
                           </p>
                         </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
