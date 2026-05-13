import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const groupRef = useRef();

  useFrame((state) => {
    // Read directly from window inside useFrame to avoid React state re-renders!
    const scrollY = window.scrollY;
    
    // Calculate normalized scroll offset (0 to 1 over approx 5 screens)
    const maxScroll = window.innerHeight * 5;
    const offset = Math.min(scrollY / maxScroll, 1);

    // Smoothly pull the camera down and away as the user scrolls
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 8 - (offset * 4), 0.1);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -offset * 10, 0.1);
    
    const currentLookAtY = THREE.MathUtils.lerp(0, -offset * 10, 0.1);
    state.camera.lookAt(0, currentLookAtY, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Future Sections will go below */}
    </group>
  );
}