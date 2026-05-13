import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Growth Strategist",
      desc: "Scaling brands with data-driven and community-focused growth. I analyze market trends, optimize user acquisition funnels, and build sustainable roadmaps that turn early adopters into lifelong community members.",
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      glow: "from-blue-500",
      accent: "bg-blue-500/20",
      hoverAccent: "group-hover:bg-blue-500/40",
      borderHover: "group-hover:border-blue-500/30",
      iconBg: "from-blue-500/20",
      lineGradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Marketer",
      desc: "Crafting narratives that resonate and drive true engagement. From viral social campaigns to deep-dive content marketing, I build brand presence that dominates the Web3 conversation space.",
      icon: (
        <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      glow: "from-purple-500",
      accent: "bg-purple-500/20",
      hoverAccent: "group-hover:bg-purple-500/40",
      borderHover: "group-hover:border-purple-500/30",
      iconBg: "from-purple-500/20",
      lineGradient: "from-purple-400 to-blue-500"
    },
    {
      title: "Researcher",
      desc: "Analyzing trends and tech to stay ahead of the Web3 curve. I dive deep into tokenomics, protocol mechanics, and onchain data to provide actionable alpha and strategic insights.",
      icon: (
        <svg className="w-10 h-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      glow: "from-pink-500",
      accent: "bg-pink-500/20",
      hoverAccent: "group-hover:bg-pink-500/40",
      borderHover: "group-hover:border-pink-500/30",
      iconBg: "from-pink-500/20",
      lineGradient: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section id="services" className="relative flex min-h-screen w-full items-center justify-center px-5 pt-28 pb-20 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 pointer-events-auto overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-transparent" />
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            </span>
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gray-300">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-['Orbitron'] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">
            WHAT I DO
          </h2>
          <p className="max-w-2xl text-gray-400 text-sm sm:text-base lg:text-lg font-light leading-relaxed mt-2">
            Leveraging deep industry knowledge to accelerate projects from concept to market dominance. Here is how I add value to the ecosystem.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full flex flex-col"
            >
              {/* Card Container */}
              <div className="relative flex-1 rounded-[2rem] bg-[#0a0f25]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden z-10 flex flex-col">
                
                {/* Glow Effects */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${service.glow} to-transparent pointer-events-none`} />
                <div className={`absolute -top-24 -right-24 w-48 h-48 ${service.accent} rounded-full blur-[50px] ${service.hoverAccent} transition-colors duration-700 pointer-events-none`} />

                {/* Icon Wrapper */}
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 bg-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:scale-110 group-hover:rotate-3 ${service.borderHover} transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-['Orbitron'] tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed flex-1 group-hover:text-gray-300 transition-colors duration-300">
                  {service.desc}
                </p>

                {/* Bottom decorative line */}
                <div className="w-full h-1 mt-6 rounded-full overflow-hidden bg-white/5">
                  <div className={`h-full w-0 bg-gradient-to-r ${service.lineGradient} group-hover:w-full transition-all duration-700 ease-out`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
