import { motion } from "framer-motion";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative flex min-h-screen w-full items-center justify-center px-5 pt-28 pb-20 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 pointer-events-auto overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl w-full mx-auto flex flex-col gap-12"
      >
        {/* Main Glass Card */}
        <div className="relative rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-white/10 via-[#0a0f25]/60 to-white/5 border border-white/10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.02)] overflow-hidden">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-[150%] animate-[shimmer_8s_infinite] pointer-events-none" />
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Glowing Avatar/Icon Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[320px] lg:h-[320px] rounded-full flex-shrink-0 relative group"
            >
              {/* Glowing Orbital Rings */}
              <div className="absolute inset-[-4px] rounded-full border-[2px] border-purple-500/30 blur-[1px] animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-[-16px] rounded-full border border-blue-400/20 animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-[-28px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
              
              {/* The Image */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-[#0a0f25] border border-white/20 z-10 shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-shadow duration-700">
                <img 
                  src="/about-image.jpg" 
                  alt="Teaona Web3 Headmaster" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Ambient Core Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[50px] z-0 rounded-full group-hover:blur-[70px] transition-all duration-500" />
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8 text-center md:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Orbitron'] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-300 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  ABOUT ME
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                <p className="text-gray-300 text-[16px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed tracking-wide">
                  I am <span className="font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Teaona</span>, <span className="text-blue-300 font-semibold tracking-widest uppercase text-sm lg:text-base ml-1">Web3 Headmaster</span> and CWO at <span className="text-purple-300 font-semibold tracking-widest uppercase text-sm lg:text-base">SSWEB5</span>, The Support System for Web3 creators and builders.
                </p>
                
                <p className="text-gray-300 text-[16px] sm:text-[18px] lg:text-[20px] font-light leading-relaxed tracking-wide">
                  I craft immersive 3D web experiences, sleek UI/UX, and bold digital art while actively supporting and uplifting creators in the onchain space.
                </p>
                
                <div className="relative pl-6 py-2">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                  <p className="text-white/90 text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic">
                    "Passionate about blending creativity, technology, and community — turning builders into family, one hot take at a time."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
