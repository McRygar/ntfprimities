import React from 'react';
import SpriteAnimation from './components/SpriteAnimation';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-900 text-white">
      <SpriteAnimation />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text break-words">
          NFT Primitives
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Beyond Collectible. Infinitely Composable.
        </p>
      </div>
    </div>
  );
};

export default App;