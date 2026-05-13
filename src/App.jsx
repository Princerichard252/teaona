import { ReactLenis } from '@studio-freight/react-lenis';
import Scene from "./canvas/Scene";
import DynamicIsland from "./components/layout/DynamicIsland";
import Preloader from "./components/layout/Preloader";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import ExperienceSection from "./components/sections/ExperienceSection";
import Connect from "./components/sections/Connect";

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-full bg-[#020617] text-white">
        {/* 1. Grain Overlay */}
        <div className="grain-overlay pointer-events-none" />

        <Preloader />
        
        {/* 2. Navigation */}
        <DynamicIsland />

        {/* 3. 3D Background Canvas */}
        <div className="scene-shell fixed inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        {/* 4. HTML Overlay Sections */}
        <div className="app-scroll relative z-10 w-full overflow-x-hidden">
          
          <div className="w-full">
            <Hero />
          </div>
          
          {/* Placeholders for remaining sections */}
          <div className="w-full">
            <About />
          </div>
          <div className="w-full">
            <Services />
          </div>
          <div className="w-full">
            <Projects />
          </div>
          <div className="w-full">
            <ExperienceSection />
          </div>
          <div className="w-full">
            <Connect />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
