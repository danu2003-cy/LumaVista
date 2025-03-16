import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Gallery />
    </main>
  );
}