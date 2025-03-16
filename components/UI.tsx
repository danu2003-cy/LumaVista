'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Share2, Heart } from 'lucide-react';
import { ArtworkInfo } from '@/lib/types';

interface UIProps {
  selectedArtwork: ArtworkInfo | null;
  onClose: () => void;
}

export default function UI({ selectedArtwork, onClose }: UIProps) {
  const handleShare = async () => {
    if (!selectedArtwork) return;
    
    try {
      await navigator.share({
        title: selectedArtwork.title,
        text: `Check out "${selectedArtwork.title}" by ${selectedArtwork.artist}`,
        url: window.location.href,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-10">
        <h1 className="text-3xl font-bold text-white neon-glow">3D Art Gallery</h1>
      </div>

      <div className="fixed bottom-4 left-4 z-10 text-white/70">
        <p>Use mouse to orbit • Scroll to zoom • WASD to move</p>
      </div>

      <Dialog open={!!selectedArtwork} onOpenChange={() => onClose()}>
        <DialogContent className="sm:max-w-[425px] bg-card/95 backdrop-blur neon-box border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl neon-glow">{selectedArtwork?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <img
              src={selectedArtwork?.imageUrl}
              alt={selectedArtwork?.title}
              className="w-full h-64 object-cover rounded-lg neon-box"
            />
            <div>
              <h3 className="font-semibold text-primary">Artist</h3>
              <p className="text-foreground/90">{selectedArtwork?.artist}</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Description</h3>
              <p className="text-foreground/90">{selectedArtwork?.description}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleShare} className="flex-1 bg-primary hover:bg-primary/80">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="flex-1 border-primary/20 hover:bg-primary/20">
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}