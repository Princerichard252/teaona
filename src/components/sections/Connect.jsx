import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.89-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

function ContactCard() {
  return (
    <div className="w-full max-w-4xl mx-auto flex items-center justify-center my-10 z-10 relative">
      <motion.div
        className="relative w-full rounded-[3rem] bg-[#0c1228] p-10 sm:p-16 lg:p-20 overflow-hidden shadow-[inset_3px_3px_10px_rgba(255,255,255,0.08),inset_-8px_-8px_20px_rgba(0,0,0,0.8),0_50px_100px_-20px_rgba(0,0,0,0.9)] border border-[#1a2342] group"
      >
        {/* Subtle Ambient Spotlight for depth */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(800px_circle_at_50%_0%,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-100" />

        {/* 3D Bevel Edge Overlay (Simulating Physical Thickness) */}
        <div className="absolute inset-2 rounded-[2.5rem] border-[2px] border-white/5 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
           
           <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#050914] border border-[#1a2342] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_10px_rgba(255,255,255,0.03)] mb-2">
             <span className="uppercase tracking-[0.4em] text-xs font-bold text-gray-400">
               Connect
             </span>
           </div>

           <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black font-['Orbitron'] tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-purple-400 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
             LET'S BUILD
           </h3>
           
           <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
             Ready to scale your Web3 community, execute a flawless token launch, or brew some highly concentrated alpha? Drop a message.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto">
             
             {/* Telegram Beveled Button */}
             <motion.a 
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
               href="https://t.me/TeaonaX" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group/btn relative flex items-center justify-center gap-3 w-full sm:w-56 py-4 rounded-2xl bg-[#0a0f25] border border-[#2AABEE]/40 overflow-hidden shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-4px_-4px_10px_rgba(0,0,0,0.6),0_15px_30px_rgba(0,0,0,0.5)]"
             >
               <div className="absolute inset-0 bg-gradient-to-b from-[#2AABEE]/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2AABEE]/30 to-transparent -translate-x-[150%] group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform duration-1000" />
               
               <div className="relative z-10 text-[#2AABEE] group-hover/btn:text-white transition-colors duration-300 group-hover/btn:scale-110 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                 <TelegramIcon />
               </div>
               <span className="relative z-10 text-white font-black tracking-widest uppercase text-sm drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                 Telegram
               </span>
             </motion.a>

             {/* X (Twitter) Beveled Button */}
             <motion.a 
               whileHover={{ scale: 1.05, y: -5 }}
               whileTap={{ scale: 0.95 }}
               href="https://x.com/TeaonaX" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="group/btn relative flex items-center justify-center gap-3 w-full sm:w-56 py-4 rounded-2xl bg-[#0a0f25] border border-white/20 overflow-hidden shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-4px_-4px_10px_rgba(0,0,0,0.6),0_15px_30px_rgba(0,0,0,0.5)]"
             >
               <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform duration-1000" />
               
               <div className="relative z-10 text-white transition-colors duration-300 group-hover/btn:scale-110 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                 <XIcon />
               </div>
               <span className="relative z-10 text-white font-black tracking-widest uppercase text-sm mt-0.5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                 Follow on X
               </span>
             </motion.a>

           </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Connect() {
  return (
    <section id="connect" className="relative flex flex-col min-h-screen w-full px-5 pt-28 pb-10 md:pl-32 md:pr-10 lg:pl-40 lg:pr-16 pointer-events-auto overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/10 rounded-t-full blur-[150px] pointer-events-none -z-10" />

      {/* Main Content Area filling available space */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          <ContactCard />
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-6xl mx-auto pt-10 mt-auto border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left z-10"
      >
        <p className="text-gray-500 text-sm tracking-wide font-medium">
          © {new Date().getFullYear()} Teaona. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <p className="text-gray-500 text-sm tracking-wide flex items-center justify-center gap-1.5 font-medium">
            Built with <span className="animate-pulse text-lg -mt-0.5">❤️</span> by{" "}
            <a 
              href="https://x.com/AlphaSketcher" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-white hover:to-white transition-all duration-300 group inline-flex items-center"
            >
              Alpha Sketcher
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </motion.footer>

    </section>
  );
}
