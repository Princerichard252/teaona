import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);
  const [minimumPassed, setMinimumPassed] = useState(false);
  const [visualProgress, setVisualProgress] = useState(0);
  const loaderProgress = Math.min(100, Math.max(0, progress || 0));
  const displayProgress = Math.round(visualProgress);

  useEffect(() => {
    // Ensure preloader shows for at least a minimum time to enjoy the animation
    const timer = window.setTimeout(() => setMinimumPassed(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisualProgress((current) => {
        const target = active ? Math.max(loaderProgress, 15) : 100;
        const next = current + (target - current) * (active ? 0.1 : 0.25);
        return target - next < 0.5 ? target : next;
      });
    }, 40);

    return () => window.clearInterval(timer);
  }, [active, loaderProgress]);

  useEffect(() => {
    if (!active && minimumPassed && visualProgress >= 99) {
      const timer = window.setTimeout(() => setVisible(false), 500);
      return () => window.clearTimeout(timer);
    }
  }, [active, minimumPassed, visualProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader-shell"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Subtle Ambient Glow */}
          <div className="preloader-glow"></div>

          <main className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-10 w-full px-6">
            
            <section className="text-center flex flex-col items-center">
              {/* Really Cool Spinner */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="futuristic-spinner"
              >
                <div className="spinner-ring-1"></div>
                <div className="spinner-ring-2"></div>
                <div className="spinner-core"></div>
              </motion.div>
              
              {/* Role Subtitle */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="preloader-role mt-2"
              >
                Digital Creator
              </motion.span>
            </section>

            {/* Sleek Progress Bar Area */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col items-center gap-3 w-full max-w-[200px] sm:max-w-[260px]"
            >
              <div className="flex justify-between w-full text-[10px] sm:text-xs font-bold text-blue-400 tracking-widest uppercase">
                <span>Loading</span>
                <span>{displayProgress}%</span>
              </div>
              
              {/* Bar Container */}
              <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]">
                {/* Animated Fill */}
                <motion.div 
                  className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  style={{ width: `${displayProgress}%` }}
                  layout
                >
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/60 blur-[2px]"></div>
                </motion.div>
              </div>
            </motion.div>

          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
