import { Float, MeshDistortMaterial, Text } from "@react-three/drei";

export default function AboutScene() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#38bdf8" intensity={2} />

      {/* Geometric 'Core' representing her Headmaster persona */}
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 0, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#38bdf8"
            speed={2}
            distort={0.4}
            wireframe
            emissive="#38bdf8"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* The 3D Eagle Placeholder */}
      <Float speed={2} floatIntensity={1}>
        <mesh position={[-2, 1, -2]} rotation={[0, 0.5, 0]}>
           {/* Replace with eagle.glb later */}
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#1e1b4b" metalness={1} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}