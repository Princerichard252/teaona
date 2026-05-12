import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import HeroScene from "./sections/HeroScene";

export default function Experience() {
  const scrollData = useScroll();
  const groupRef = useRef();

  useFrame((state) => {
    const offset = scrollData.offset;

    // Smoothly pull the camera down and away as the user scrolls
    state.camera.position.z = THREE.MathUtils.lerp(8, 4, offset);
    state.camera.position.y = THREE.MathUtils.lerp(0, -10, offset);
    state.camera.lookAt(0, -offset * 10, 0);
  });

  return (
    <group ref={groupRef}>
      {/* Future Sections will go below */}
    </group>
  );
}