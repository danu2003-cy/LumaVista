'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Scene from './Scene';
import UI from './UI';
import { Suspense, useState } from 'react';
import { ArtworkInfo } from '@/lib/types';

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkInfo | null>(null);

  return (
    <div className="relative w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <Scene onArtworkSelect={setSelectedArtwork} />
        </Suspense>
      </Canvas>
      <UI selectedArtwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
    </div>
  );
}