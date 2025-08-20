import type React from 'react';

export interface Sprite {
  id: number;
  component: React.ReactNode;
  x: number; // percentage
  y: number; // pixels
  speed: number;
  size: number; // pixels
  drift: number;
}
