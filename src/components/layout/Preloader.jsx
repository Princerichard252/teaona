import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const brandLetters = "TEAONA".split("");

function HudRing({ progress }) {
  return (
    <div className="preloader-hud" aria-hidden="true">
      <svg className="preloader-hud-svg" viewBox="0 0 620 620">
        <defs>
          <linearGradient id="hudPulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="54%" stopColor="#7c3cff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="hudGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="preloader-ring preloader-ring-slow">
          <circle cx="310" cy="310" r="246" pathLength="100" />
          <circle cx="310" cy="310" r="246" pathLength="100" className="preloader-ring-energy" />
        </g>

        <g className="preloader-ring preloader-ring-reverse">
          <circle cx="310" cy="310" r="210" pathLength="100" />
          <path d="M 158 185 A 212 212 0 0 1 468 184" />
          <path d="M 484 446 A 216 216 0 0 1 134 424" />
        </g>

        <g className="preloader-ring preloader-ring-fast">
          <circle cx="310" cy="310" r="176" pathLength="100" />
          <path d="M 188 309 A 122 122 0 0 1 432 309" />
          <path d="M 430 312 A 120 120 0 0 1 190 312" />
        </g>

        <circle
          className="preloader-progress-arc"
          cx="310"
          cy="310"
          r="238"
          pathLength="100"
          style={{ strokeDasharray: `${progress} 100` }}
        />

        <g className="preloader-orbit-dots">
          <circle cx="310" cy="70" r="5" />
          <circle cx="548" cy="310" r="4" />
          <circle cx="106" cy="438" r="4" />
        </g>
      </svg>
    </div>
  );
}

export default function Preloader() {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);
  const [minimumPassed, setMinimumPassed] = useState(false);
  const [visualProgress, setVisualProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const loaderProgress = Math.min(100, Math.max(0, progress || 0));
  const displayProgress = Math.round(visualProgress);

  const particles = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        delay: `${(index % 12) * 0.24}s`,
        duration: `${5.5 + (index % 7) * 0.65}s`,
        size: `${2 + (index % 4)}px`,
      })),
    []
  );

  const scanLines = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        top: `${10 + index * 7}%`,
        width: `${7 + (index % 4) * 5}rem`,
        delay: `${index * 0.38}s`,
        side: index % 2 === 0 ? "left" : "right",
      })),
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setMinimumPassed(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisualProgress((current) => {
        const target = active ? Math.max(loaderProgress, 22) : 100;
        const next = current + (target - current) * (active ? 0.1 : 0.16);
        return target - next < 0.35 ? target : next;
      });
    }, 70);

    return () => window.clearInterval(timer);
  }, [active, loaderProgress]);

  useEffect(() => {
    if (!active && minimumPassed && visualProgress >= 99) {
      const timer = window.setTimeout(() => setVisible(false), 650);
      return () => window.clearTimeout(timer);
    }
  }, [active, minimumPassed, visualProgress]);

  function handlePointerMove(event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setPointer({ x, y });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader-shell"
          onPointerMove={handlePointerMove}
          style={{
            "--preloader-x": `${pointer.x * 14}px`,
            "--preloader-y": `${pointer.y * 14}px`,
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.035, filter: "blur(20px)" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="preloader-aurora" />
          <div className="preloader-noise" />
          <div className="preloader-scanline" />
          <div className="preloader-dot-grid preloader-dot-grid-left" />
          <div className="preloader-dot-grid preloader-dot-grid-right" />

          {particles.map((particle, index) => (
            <span
              key={index}
              className="preloader-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}

          {scanLines.map((line, index) => (
            <span
              key={index}
              className={`preloader-ui-line preloader-ui-line-${line.side}`}
              style={{
                top: line.top,
                width: line.width,
                animationDelay: line.delay,
              }}
            />
          ))}

          <main className="preloader-stage">
            <HudRing progress={displayProgress} />

            <section className="preloader-brand" aria-label="Loading Teaona portfolio">
              <span className="preloader-eyebrow">Welcome to my world</span>
              <h1 className="preloader-word">
                {brandLetters.map((letter, index) => (
                  <span key={letter + index} style={{ animationDelay: `${0.55 + index * 0.11}s` }}>
                    {letter}
                  </span>
                ))}
              </h1>
              <span className="preloader-role">Digital Creator</span>
            </section>
          </main>

          <footer className="preloader-bottom">
            <div className="preloader-loading-row">
              <span>Loading</span>
              <strong>{displayProgress}%</strong>
            </div>
            <div className="preloader-bar" aria-hidden="true">
              <span style={{ width: `${displayProgress}%` }} />
            </div>
            <div className="preloader-tags">
              <span>UI/UX Design</span>
              <i />
              <span>Web3</span>
              <i />
              <span>3D Experiences</span>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
