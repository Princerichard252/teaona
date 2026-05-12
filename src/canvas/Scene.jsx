import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, ScrollControls } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import Experience from "./Experience";

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position:[0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        {/* Pages = Number of scrollable sections */}
        <ScrollControls pages={6} damping={0.25}>
          <Experience />
        </ScrollControls>
      </Suspense>

      {/* Post-Processing for the "Cool" Factor */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} />
        <Noise opacity={0.03} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
      </EffectComposer>

      <Preload all />
    </Canvas>
  );
}