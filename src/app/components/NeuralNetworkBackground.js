"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralNetwork() {
  const pointsRef = useRef();

  // Generate random neuron positions
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 500; i++) {
      positions.push(
        (Math.random() - 0.5) * 10, // x
        (Math.random() - 0.5) * 6, // y
        (Math.random() - 0.5) * 10 // z
      );
    }
    return new Float32Array(positions);
  }, []);

  // Animate points
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particles.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial color="cyan" size={0.05} transparent opacity={0.8} />
    </points>
  );
}

export default function NeuralNetworkBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
