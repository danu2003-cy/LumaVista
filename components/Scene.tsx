'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, PointLight } from 'three';
import Wall from './Wall';
import Artwork from './Artwork';
import { artworks } from '@/lib/data';
import { ArtworkInfo } from '@/lib/types';

interface SceneProps {
  onArtworkSelect: (artwork: ArtworkInfo) => void;
}

export default function Scene({ onArtworkSelect }: SceneProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#0a0a14" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Walls */}
      <Wall position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Wall position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall position={[0, 0, -5]} rotation={[0, 0, 0]} />
      <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />

      {/* Neon Lights */}
      <pointLight position={[0, 4, 0]} intensity={1} color="#ff1493" />
      <pointLight position={[4, 2, 4]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-4, 2, -4]} intensity={0.8} color="#ff00ff" />

      {/* Artworks */}
      {artworks.map((artwork, index) => (
        <Artwork
          key={artwork.id}
          artwork={artwork}
          position={[
            Math.cos((index * Math.PI * 2) / artworks.length) * 4,
            0,
            Math.sin((index * Math.PI * 2) / artworks.length) * 4,
          ]}
          rotation={[0, -((index * Math.PI * 2) / artworks.length), 0]}
          onClick={() => onArtworkSelect(artwork)}
        />
      ))}
    </group>
  );
}