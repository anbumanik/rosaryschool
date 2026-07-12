"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows, useTexture, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// Using a fallback mesh since we don't have a real school model.
// This will render a stylized 3D card/glassmorphism display for the campus.
function CampusCard() {
  // Use a generic placeholder texture for the campus
  // In a real app, replace with an actual high-res campus photo
  
  return (
    <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
      <group position={[0, 0, 0]}>
        {/* Main Card Base */}
        <RoundedBox args={[4, 2.5, 0.1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color="#0F2D52" 
            roughness={0.2}
            metalness={0.8}
            envMapIntensity={2}
          />
        </RoundedBox>

        {/* Inner Glass/Image Layer */}
        <RoundedBox args={[3.8, 2.3, 0.15]} position={[0, 0, 0.05]} radius={0.05} smoothness={4}>
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0}
            roughness={0}
            ior={1.5}
            thickness={0.5}
          />
        </RoundedBox>

        {/* Floating Text / Accents */}
        <mesh position={[-1.5, -0.8, 0.2]}>
          <boxGeometry args={[1, 0.2, 0.05]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>
        
        {/* Subtle glowing sphere inside/behind */}
        <mesh position={[1, 0.5, -0.1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#D4AF37" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3DCard() {
  return (
    <div className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
        
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <CampusCard />
        </PresentationControls>

        <Environment preset="city" />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}
