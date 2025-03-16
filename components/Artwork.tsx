'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, Mesh, Vector3, Euler, DoubleSide } from 'three';
import { ArtworkInfo } from '@/lib/types';

interface ArtworkProps {
  artwork: ArtworkInfo;
  position: Vector3 | [number, number, number];
  rotation: Euler | [number, number, number];
  onClick: () => void;
}

function ArtworkMesh({ artwork, position, rotation, onClick }: ArtworkProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  
  const texture = useLoader(TextureLoader, artwork.imageUrl, 
    undefined,
    (error) => {
      console.error('Error loading texture:', error);
      setError(true);
    }
  );

  useEffect(() => {
    if (error) return;
    
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, error]);

  useFrame((state, delta) => {
    if (!meshRef.current || error) return;
    
    if (hovered) {
      meshRef.current.scale.x = Math.min(meshRef.current.scale.x + delta * 2, 1.2);
      meshRef.current.scale.y = Math.min(meshRef.current.scale.y + delta * 2, 1.2);
    } else {
      meshRef.current.scale.x = Math.max(meshRef.current.scale.x - delta * 2, 1);
      meshRef.current.scale.y = Math.max(meshRef.current.scale.y - delta * 2, 1);
    }
  });

  if (error) {
    return <FallbackMesh position={position} rotation={rotation} />;
  }

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <planeGeometry args={[2, 3]} />
      <meshStandardMaterial 
        map={texture}
        side={DoubleSide}
        transparent
        alphaTest={0.5}
      />
    </mesh>
  );
}

function FallbackMesh({ position, rotation }: Partial<ArtworkProps>) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 3]} />
      <meshStandardMaterial color="#444444" />
    </mesh>
  );
}

export default function Artwork(props: ArtworkProps) {
  return (
    <Suspense fallback={<FallbackMesh position={props.position} rotation={props.rotation} />}>
      <ArtworkMesh {...props} />
    </Suspense>
  );
}