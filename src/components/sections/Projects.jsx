import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Chief Web3 Officer",
      company: "@ SSWEB5",
      desc: "Leading community strategy, content creation, and on-chain growth initiatives to empower the next generation of builders.",
      tags: ["Strategy", "Community", "Growth"],
      color: "from-blue-500",
      accent: "text-blue-400",
      bgHover: "group-hover:bg-blue-500/10",
      borderHover: "group-hover:border-blue-500/50",
      shadowHover: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Web3 Strategist",
      company: "Consulting",
      desc: "Partnered with multiple early-stage DeFi and NFT projects to build high-engagement communities, execute successful token launches, and deliver viral marketing campaigns.",
      tags: ["DeFi", "NFTs", "Marketing"],
      color: "from-purple-500",
      accent: "text-purple-400",
      bgHover: "group-hover:bg-purple-500/10",
      borderHover: "group-hover:border-purple-500/50",
      shadowHover: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
      title: "Repeat Partnerships",
      company: "Client Success",
      desc: "Delivered exceptional value for projects even at smaller account sizes, resulting in renewed partnerships and long-term collaborations.",
      tags: ["Retention", "B2B", "Scaling"],
      color: "from-pink-500",
      accent: "text-pink-400",
      bgHover: "group-hover:bg-pink-500/10",
      borderHover: "group-hover:border-pink-500/50",
      shadowHover: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
    },
    {
      title: "Founder Branding",
      company: "Thought Leadership",
      desc: "Helped creators and founders establish strong thought leadership and grow their audience through consistent, high-signal content.",
      tags: ["Personal Branding", "Content", "Audience"],
      color: "from-emerald-500",
      accent: "text-emerald-400",
      bgHover: "group-hover:bg-emerald-500/10",
      borderHover: "group-hover:border-emerald-500/50",
      shadowHover: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    }
  ];

  return (
    <section id="projects" className="relative flex min-h-screen w-full items-center justify-center px-5 pt-28 pb-20 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 pointer-events-auto overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-transparent" />
      <div className="absolute top-[30%] right-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            </span>
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gray-300">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-['Orbitron'] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] uppercase">
            Featured Work
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm sm:text-base lg:text-lg font-light leading-relaxed mt-2">
            A track record of executing high-impact strategies, building thriving communities, and positioning Web3 founders as undeniable industry leaders.
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group rounded-3xl bg-[#0a0f25]/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between h-full ${project.bgHover} ${project.borderHover} ${project.shadowHover}`}
            >
              {/* Subtle top gradient line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-wider uppercase ${project.accent}`}>
                    {project.company}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <svg className={`w-6 h-6 ${project.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Orbitron'] tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                  {project.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs font-medium border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Background Flare */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} to-transparent rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
