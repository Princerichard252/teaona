import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", isFloat = false }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        setCount(isFloat ? Number(value.toFixed(1)) : Math.round(value));
      },
    });
    return () => controls.stop();
  }, [from, to, duration, isFloat]);

  return <span>{count}{suffix}</span>;
}


function BrandTicker() {
  const items = [
    { name: "SSWEB5", icon: "💎" },
    { name: "Support System", icon: "🌐" },
    { name: "Hot Tea", icon: "☕" },
    { name: "OnchainCreatorsHub", icon: "⚡" },
    { name: "Web3 Fam", icon: "🚀" },
  ];
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#020617]/80 backdrop-blur-md border-y border-white/10 py-3 sm:py-4 z-20 pointer-events-none relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 pointer-events-none w-full h-full" />
      <motion.div 
        className="flex w-max gap-10 sm:gap-16 px-5 relative z-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {duplicated.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 opacity-80">
            <span className="text-lg sm:text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{item.icon}</span>
            <span className="text-[10px] sm:text-xs font-bold text-gray-300 tracking-[0.2em] uppercase whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TeaonaWordmark() {
  return (
    <h1 className="hero-neonix-title mb-6" aria-label="TEAONA">
      <span className="hero-neonix-text">
        TEAONA
      </span>
    </h1>
  );
}

export default function Hero() {
  return (
    <>
      <section 
        id="home" 
        className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-5 pt-28 pb-10 md:pl-32 md:pr-10 md:py-10 lg:pl-40 lg:pr-16 pointer-events-auto"
      >
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:gap-7 order-2 lg:order-1 w-full max-w-xl mx-auto text-center items-center lg:mx-0 lg:text-left lg:items-start z-10"
          >
          <div className="flex flex-col items-center lg:items-start w-full">
            {/* 1. Cooler "Hello I am" tag */}
            <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-400/30 backdrop-blur-md mb-3 sm:mb-4 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              </span>
              <span className="uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold text-blue-200">
                Hello, I am
              </span>
            </div>

            {/* 2. Massive, Dynamic Bold Name */}
            <div className="mb-0 lg:mb-1 -mt-1 sm:-mt-2">
              <TeaonaWordmark />
            </div>
            
            {/* 3. Description text */}
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed font-light mx-auto lg:mx-0">
              I serve hot tea onchain and help creators & builders make it in Web3.
              Crafting immersive 3D experiences, dope art, and modern interfaces that stand out.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-2 w-full items-center lg:items-start">
            <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 backdrop-blur-md w-full max-w-sm lg:max-w-none">
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-white"><AnimatedCounter to={49} suffix="k+" /></span>
                <span className="text-xs sm:text-sm text-gray-400">Community</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-white"><AnimatedCounter to={1.2} suffix="k+" isFloat={true} /></span>
                <span className="text-xs sm:text-sm text-gray-400">Hot Takes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-white"><AnimatedCounter to={400} suffix="+" /></span>
                <span className="text-xs sm:text-sm text-gray-400">Creators Supported</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3 sm:-space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] bg-[#1a1f35] flex items-center justify-center z-40 shadow-[0_0_10px_rgba(56,189,248,0.3)] overflow-hidden">
                  <img className="w-full h-full object-cover scale-110" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=150&auto=format&fit=crop" alt="Tech Astronaut" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] bg-[#1e1e1e] flex items-center justify-center z-30">
                  <img className="w-6 h-6 sm:w-7 sm:h-7 object-contain" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=026" alt="Bitcoin" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] bg-[#1e1e1e] flex items-center justify-center z-20">
                  <img className="w-6 h-6 sm:w-7 sm:h-7 object-contain" src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026" alt="Ethereum" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] bg-[#1e1e1e] flex items-center justify-center z-10">
                  <img className="w-6 h-6 sm:w-7 sm:h-7 object-contain" src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=026" alt="Solana" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-bold text-white leading-tight"><AnimatedCounter to={49} suffix="k+" /></span>
                <span className="text-xs sm:text-sm text-gray-400 leading-tight">Onchain Fam</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto lg:ml-auto order-1 lg:order-2 z-10"
        >
          <div className="relative rounded-3xl lg:rounded-[2rem] overflow-hidden bg-[#0a0f25] border border-white/10 shadow-2xl group">

            {/* Top Floating Badge */}
            <div className="absolute top-4 right-4 lg:top-5 lg:right-5 z-20 flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-3 lg:py-1.5 rounded-full bg-purple-900/40 backdrop-blur-md border border-white/10 shadow-lg">
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-[10px] lg:text-xs font-semibold text-gray-200 tracking-wide">Verified Creator</span>
            </div>
            {/* Image Section - Bold size for mobile */}
            <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] xl:h-[550px] w-full bg-[#0a0f25]">
              <img 
                src="/character.webp" 
                alt="3D Character Profile" 
                className="absolute inset-0 w-full h-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Bottom Glass Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6 bg-purple-900/40 backdrop-blur-xl border-t border-white/10 text-white flex flex-col gap-3 lg:gap-4">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Stats Section */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex flex-col gap-1.5">
                  <span className="text-gray-300 font-semibold uppercase tracking-wider text-[10px] lg:text-xs">
                    Availability
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    </span>
                    <span className="font-bold text-white text-sm lg:text-base">Open to Work</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 text-right">
                  <span className="text-gray-300 font-semibold uppercase tracking-wider text-[10px] lg:text-xs">
                    Occupation
                  </span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 text-sm lg:text-base">
                    Web3 Headmaster
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="relative z-10 flex gap-3 lg:gap-4 mt-1">
                <a href="#projects" className="flex-1 flex justify-center py-2.5 lg:py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[12px] sm:text-sm lg:text-base font-semibold transition hover:scale-[1.02] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  View Projects
                </a>
                <a href="#connect" className="flex-1 flex justify-center py-2.5 lg:py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-[12px] sm:text-sm lg:text-base font-semibold transition hover:scale-[1.02]">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2.5rem] blur-xl lg:blur-2xl opacity-30 -z-10" />
        </motion.div>

      </div>
    </section>
      
      {/* Moving Brand Ticker Section - Requires scroll to see */}
      <BrandTicker />
    </>
  );
}
