import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const imageRef = useRef();
  const texture = useTexture("/character.webp");
  const { viewport } = useThree();
  texture.colorSpace = THREE.SRGBColorSpace;

  // Create a gradient alpha map to fade the bottom of the image
  const alphaMap = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    // Fully opaque at top
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.65, "rgba(255, 255, 255, 1)");
    // Fade to transparent at bottom
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1, 256);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state) => {
    if (!imageRef.current) return;
    const isMobile = viewport.width < 6.5;
    const baseX = isMobile ? 0.45 : 3.8;
    const baseY = isMobile ? -0.95 : -0.3;

    // Smooth 3D Mouse Parallax & Tilt Effect
    const targetX = (state.pointer.x * Math.PI) / 18;
    const targetY = (state.pointer.y * Math.PI) / 20;

    // Tilt the image smoothly
    imageRef.current.rotation.y = THREE.MathUtils.lerp(imageRef.current.rotation.y, targetX, 0.05);
    imageRef.current.rotation.x = THREE.MathUtils.lerp(imageRef.current.rotation.x, -targetY, 0.05);
    
    // Shift position smoothly
    imageRef.current.position.x = THREE.MathUtils.lerp(imageRef.current.position.x, baseX + state.pointer.x * 0.45, 0.05);
    imageRef.current.position.y = THREE.MathUtils.lerp(imageRef.current.position.y, baseY + state.pointer.y * 0.35, 0.05);
    const targetScale = isMobile ? 0.8 : 1.35;
    imageRef.current.scale.x = THREE.MathUtils.lerp(imageRef.current.scale.x, targetScale, 0.08);
    imageRef.current.scale.y = THREE.MathUtils.lerp(imageRef.current.scale.y, targetScale, 0.08);
  });

  return (
    <group>
      {/* Neon gallery lighting for the character */}
      <spotLight position={[3.1, 4.2, 5]} angle={0.42} penumbra={1} intensity={4.2} color="#38bdf8" />
      <pointLight position={[4.4, 0.4, 2.2]} intensity={3.2} color="#ec27ff" />
      <pointLight position={[1.2, 2.4, 1.4]} intensity={1.45} color="#ffffff" />
      <directionalLight position={[-4, 3, 4]} intensity={1.35} color="#ffffff" />
      <ambientLight intensity={1.05} color="#ffffff" />

      <Float speed={1.8} floatIntensity={0.3} rotationIntensity={0.15}>
        {/* Layered glowing backings for a cooler card look */}
        <mesh position={[3.9, -0.2, 0.5]} rotation={[0, 0, -0.12]}>
          <planeGeometry args={[4.8, 6.2]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.25} side={THREE.DoubleSide} />
        </mesh>
        
        <mesh position={[3.8, -0.3, 0.7]} rotation={[0, 0, -0.05]}>
          <planeGeometry args={[4.6, 6.0]} />
          <meshBasicMaterial color="#ec27ff" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>

        <mesh ref={imageRef} position={[3.8, -0.3, 1.2]}>
          <planeGeometry args={[5.25, 6.35]} />
          <meshBasicMaterial 
            map={texture} 
            alphaMap={alphaMap}
            transparent={true} 
            side={THREE.DoubleSide}
            alphaTest={0.01}
          />
        </mesh>
      </Float>

      {/* Floating ambient particles for depth */}
      <Float speed={1} floatIntensity={2}>
        <mesh position={[-2.7, 1.5, -1.4]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <mesh position={[3.6, 1.8, 0.5]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#ec27ff" />
        </mesh>
        <mesh position={[0.4, -1.8, 1.2]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Float>
    </group>
  );
}
