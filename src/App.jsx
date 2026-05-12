import Scene from "./canvas/Scene";
import DynamicIsland from "./components/layout/DynamicIsland";
import Preloader from "./components/layout/Preloader";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#020617] text-white">
      {/* 1. Grain Overlay */}
      <div className="grain-overlay" />

      <Preloader />
      
      {/* 2. Navigation */}
      <DynamicIsland />

      {/* 3. 3D Background Canvas */}
      <div className="scene-shell fixed inset-0 z-0">
        <Scene />
      </div>

      {/* 4. HTML Overlay Sections (Must have pointer-events-none so mouse reaches canvas) */}
      <div className="app-scroll pointer-events-none relative z-10 h-screen snap-y snap-proximity overflow-y-auto overflow-x-hidden">
        
        <div className="snap-start h-screen w-full">
          <Hero />
        </div>
        
        {/* Placeholders for remaining sections */}
        <div id="about" className="snap-start h-screen w-full" />
        <div id="services" className="snap-start h-screen w-full" />
        <div id="projects" className="snap-start h-screen w-full" />
        <div id="impact" className="snap-start h-screen w-full" />
        <div id="connect" className="snap-start h-screen w-full" />
      </div>
    </div>
  );
}

export default App;
