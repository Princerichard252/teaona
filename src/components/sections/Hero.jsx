import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative z-10 flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-28 pb-10 md:pl-32 md:pr-10 md:py-10 lg:pl-40 lg:pr-16 pointer-events-auto"
    >
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:gap-7 order-2 lg:order-1 w-full max-w-xl text-center items-center lg:text-left lg:items-start"
        >
          <div className="mb-2">
            {/* 1. Small, sleek "Hello I am" tag */}
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[2px] w-12 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
              <span className="uppercase tracking-[0.4em] text-xs sm:text-sm font-black text-blue-400/90">
                Hello I am
              </span>
            </div>

            {/* 2. Massive, Dynamic Bold Name */}
            <h1 
              className="font-black uppercase leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-50 to-purple-400 mb-6 drop-shadow-2xl"
              style={{ 
                fontFamily: "'Anton', 'Impact', sans-serif", 
                fontSize: "clamp(4.5rem, 12vw, 9.5rem)" 
              }}
            >
              TEAONA
            </h1>
            
            {/* 3. Description text */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed font-light mb-2">
              A digital creator crafting immersive 3D web experiences, dope art, and modern UI/UX for the Web3 space.
            </p>

          </div>

          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 backdrop-blur-md w-full sm:w-auto">
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-white">27k+</span>
                <span className="text-xs sm:text-sm text-gray-400">Art works</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-white">20k+</span>
                <span className="text-xs sm:text-sm text-gray-400">Auctions</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-white">7k+</span>
                <span className="text-xs sm:text-sm text-gray-400">Artists</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3 sm:-space-x-4">
                <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] object-cover" src="https://i.pravatar.cc/100?img=1" alt="user" />
                <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] object-cover" src="https://i.pravatar.cc/100?img=2" alt="user" />
                <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] object-cover" src="https://i.pravatar.cc/100?img=3" alt="user" />
                <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] object-cover" src="https://i.pravatar.cc/100?img=4" alt="user" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white">40k+</span>
                <span className="text-xs sm:text-sm text-gray-400">Active Users</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto lg:ml-auto order-1 lg:order-2"
        >
          <div className="relative rounded-[2rem] overflow-hidden bg-[#0a0f25] border border-white/10 shadow-2xl group">

            {/* Top Floating Badge */}
            <div className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/40 backdrop-blur-md border border-white/10 shadow-lg">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-xs font-semibold text-gray-200 tracking-wide">Verified Creator</span>
            </div>
            {/* Image Section - Ensures the head is visible and extends all the way down behind the glass */}
            <div className="relative h-[460px] sm:h-[480px] lg:h-[520px] xl:h-[550px] w-full bg-[#0a0f25]">
              <img 
                src="/character.webp" 
                alt="3D Character Profile" 
                className="absolute inset-0 w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Bottom Glass Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6 bg-purple-900/40 backdrop-blur-xl border-t border-white/10 text-white flex flex-col gap-3 lg:gap-4">
{/* Optional inner reflection layer to boost the "liquid" feel without changing the base color */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Stats Section */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex flex-col gap-1.5">
                  <span className="text-gray-300 font-semibold uppercase tracking-wider text-[10px] lg:text-xs">
                    Availability
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Pulsing Green Dot */}
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </span>
                    <span className="font-bold text-white text-sm lg:text-base">Open to Work</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 text-right">
                  <span className="text-gray-300 font-semibold uppercase tracking-wider text-[10px] lg:text-xs">
                    Focus Area
                  </span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 text-sm lg:text-base">
                    Web3 & 3D Art
                  </span>
                </div>
              </div>
              
              {/* Action Buttons (Restored to original sleek style, updated text) */}
              <div className="relative z-10 flex gap-3 lg:gap-4 mt-1">
                <button className="flex-1 py-2.5 lg:py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm lg:text-base font-semibold transition hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  View Projects
                </button>
                <button className="flex-1 py-2.5 lg:py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm lg:text-base font-semibold transition hover:scale-[1.02]">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2.5rem] blur-2xl opacity-30 -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
