'use client';

import { Vector3, Euler } from 'three';

interface WallProps {
  position: Vector3 | [number, number, number];
  rotation: Euler | [number, number, number];
}

export default function Wall({ position, rotation }: WallProps) {
  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={[10, 8]} />
      <meshStandardMaterial 
        color="#14143c" 
        metalness={0.6}
        roughness={0.2}
        emissive="#14143c"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}