"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars, SpotLight, useDepthBuffer } from "@react-three/drei";
import * as THREE from "three";

function Rain() {
  const count = 2000;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = Math.random() * 40;
      const z = (Math.random() - 0.5) * 40;
      const speed = 0.1 + Math.random() * 0.2;
      temp.push({ x, y, z, speed });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    const m = mesh.current;
    if (!m) return;
    
    particles.forEach((particle, i) => {
      particle.y -= particle.speed;
      if (particle.y < -10) {
        particle.y = 30;
      }
      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.scale.set(0.1, 2, 0.1);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.02, 0.5, 0.02]} />
      <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
    </instancedMesh>
  );
}

function SearchLight({ position, rotation, color }: { position: [number, number, number], rotation: [number, number, number], color: string }) {
  const ref = useRef<THREE.SpotLight>(null);
  const depthBuffer = useDepthBuffer({ frames: 1 });

  useFrame((state) => {
    if (ref.current) {
      ref.current.target.position.x = Math.sin(state.clock.elapsedTime) * 10;
      ref.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <SpotLight
        ref={ref}
        penumbra={1}
        distance={60}
        angle={0.4}
        attenuation={5}
        anglePower={4}
        intensity={2}
        color={color}
        position={position}
        castShadow
        depthBuffer={depthBuffer}
      />
    </>
  );
}

function MilitaryBase() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#0B0F0D" roughness={0.8} metalness={0.2} />
      </mesh>
      
      {/* Main Base Building */}
      <mesh position={[0, 2, -10]} castShadow receiveShadow>
        <boxGeometry args={[20, 8, 10]} />
        <meshStandardMaterial color="#111111" roughness={0.7} />
      </mesh>
      
      {/* Watch Tower */}
      <mesh position={[-8, 6, -5]} castShadow receiveShadow>
        <cylinderGeometry args={[1, 1.5, 16, 8]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
      </mesh>
      
      {/* Communication Antenna */}
      <mesh position={[5, 12, -8]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 20]} />
        <meshStandardMaterial color="#333" />
      </mesh>
    </group>
  );
}

export default function Environment3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 5, 20], fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 10, 40]} />
        
        <ambientLight intensity={0.1} />
        
        {/* Searchlights */}
        <SearchLight position={[-8, 14, -5]} rotation={[0, 0, 0]} color="#00ff66" />
        <SearchLight position={[8, 10, -10]} rotation={[0, 0, 0]} color="#ffffff" />
        
        <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={1} />
        
        <Rain />
        <MilitaryBase />
        
        {/* Adds realistic lighting */}
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
