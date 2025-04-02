
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Simple human figure models
const RunnerModel = ({ position = [0, 0, 0], color = "blue", rotation = [0, 0, 0], scale = 1 }) => {
  // Simple 3D model of a running person using basic shapes
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Body */}
      <mesh castShadow>
        <capsuleGeometry args={[0.5, 1, 4, 8]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
      </mesh>
      
      {/* Head */}
      <mesh castShadow position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
      </mesh>
      
      {/* Arms - positioned to simulate running */}
      <mesh castShadow position={[0.7, 0.2, 0]}>
        <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
      </mesh>
      
      <mesh castShadow position={[-0.7, 0.2, 0]}>
        <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
      </mesh>
      
      {/* Legs - positioned to simulate running */}
      <mesh castShadow position={[0.3, -1, 0]}>
        <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
      </mesh>
      
      <mesh castShadow position={[-0.3, -1, 0]}>
        <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
        <meshStandardMaterial color={new THREE.Color(color)} />
      </mesh>

      {/* Baton */}
      <mesh castShadow position={[0.8, 0, 0.3]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
        <meshStandardMaterial color={new THREE.Color("red")} />
      </mesh>
    </group>
  );
};

const RunnerAnimation = () => {
  const maleRunnerRef = useRef<THREE.Group>(null);
  const femaleRunnerRef = useRef<THREE.Group>(null);
  const batonRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useEffect(() => {
    // Set initial positions
    if (maleRunnerRef.current && femaleRunnerRef.current) {
      // Start male runner at the beginning and female runner further down
      maleRunnerRef.current.position.set(-5, 0, 0);
      femaleRunnerRef.current.position.set(8, -20, 0);
      
      // Set up scroll animations with GSAP
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "canvas",
          start: "top top", 
          end: "bottom bottom",
          scrub: true,
        }
      });

      // Male runner animation
      timeline.to(maleRunnerRef.current.position, {
        x: 5,
        y: -10,
        duration: 4,
        ease: "power1.inOut"
      });

      // Exchange point
      timeline.to(maleRunnerRef.current.position, {
        x: 8,
        y: -15,
        duration: 1,
      });

      // Female runner starts running
      timeline.to(femaleRunnerRef.current.position, {
        x: -5,
        y: -30,
        duration: 4,
        ease: "power1.inOut"
      }, "-=1");

      // Camera follow
      timeline.to(camera.position, {
        y: -20,
        duration: 6,
        ease: "none"
      }, 0);
    }
  }, [camera]);

  // Add running animation
  useFrame((state) => {
    if (maleRunnerRef.current) {
      // Simulate running motion for male runner
      maleRunnerRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
    
    if (femaleRunnerRef.current) {
      // Simulate running motion for female runner
      femaleRunnerRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });
  
  return (
    <>
      {/* Male runner */}
      <group ref={maleRunnerRef}>
        <RunnerModel color="#3b82f6" />
      </group>

      {/* Female runner */}
      <group ref={femaleRunnerRef}>
        <RunnerModel color="#ec4899" />
      </group>

      {/* Track */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[30, 60]} />
        <meshStandardMaterial color={new THREE.Color("#93c5fd")} opacity={0.6} transparent />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
    </>
  );
};

const ScrollRunner = () => {
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none" 
      style={{ zIndex: 1 }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 60 }}
      >
        <RunnerAnimation />
      </Canvas>
    </div>
  );
};

export default ScrollRunner;
