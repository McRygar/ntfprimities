import React, { useState, useEffect, useRef } from 'react';
import type { Sprite } from '../types';
import { SPRITE_COMPONENTS, TOTAL_SPRITES } from '../constants';

const SpriteAnimation: React.FC = () => {
  const [sprites, setSprites] = useState<Sprite[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const createRandomSprite = (id: number, isInitial: boolean): Sprite => {
      const component = SPRITE_COMPONENTS[Math.floor(Math.random() * SPRITE_COMPONENTS.length)];
      const size = Math.random() * 20 + 20; // Size between 20px and 40px
      return {
        id,
        component,
        x: Math.random() * 100,
        y: isInitial ? Math.random() * window.innerHeight : -size,
        speed: Math.random() * 1.5 + 0.5, // Faster speed
        size,
        drift: (Math.random() - 0.5) * 0.2, // Small horizontal drift
      };
    };

    // Initialize sprites on mount
    const initialSprites: Sprite[] = [];
    for (let i = 0; i < TOTAL_SPRITES; i++) {
      initialSprites.push(createRandomSprite(i, true));
    }
    setSprites(initialSprites);

    // Animation loop
    const animate = () => {
      setSprites(prevSprites => 
        prevSprites.map(sprite => {
          let newY = sprite.y + sprite.speed;
          let newX = sprite.x + sprite.drift;

          // Reset sprite if it goes off screen (vertically or horizontally)
          if (newY > window.innerHeight || newX < -5 || newX > 105) {
            return createRandomSprite(sprite.id, false);
          }
          
          return { ...sprite, y: newY, x: newX };
        })
      );
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation frame when the component unmounts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {sprites.map(sprite => (
        <div
          key={sprite.id}
          className="absolute"
          style={{
            left: `${sprite.x}%`,
            top: `${sprite.y}px`,
            width: `${sprite.size}px`,
            height: `${sprite.size}px`,
            imageRendering: 'pixelated',
          }}
        >
          {sprite.component}
        </div>
      ))}
    </div>
  );
};

export default SpriteAnimation;