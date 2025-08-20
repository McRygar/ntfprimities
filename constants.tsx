import React from 'react';

// Using a 16x16 grid for 8-bit style SVGs

// --- Money Themed Sprites ---
const Coin: React.FC = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <rect x="5" y="2" width="6" height="12" fill="#FFD700" />
    <rect x="4" y="3" width="8" height="10" fill="#FFD700" />
    <rect x="3" y="4" width="10" height="8" fill="#FFD700" />
    <rect x="2" y="5" width="12" height="6" fill="#FFD700" />
    <rect x="5" y="3" width="6" height="10" fill="#FBBE00" />
    <rect x="4" y="4" width="8" height="8" fill="#FBBE00" />
    <rect x="3" y="5" width="10" height="6" fill="#FBBE00" />
    <rect x="7" y="5" width="1" height="6" fill="#FFD700" />
  </svg>
);
const Diamond: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M8 1 L1 6 L8 15 L15 6 Z" fill="#3B82F6" />
        <path d="M8 1 L1 6 L8 6 Z" fill="#60A5FA" />
        <path d="M8 1 L15 6 L8 6 Z" fill="#93C5FD" />
        <path d="M1 6 L8 15 L8 6 Z" fill="#1D4ED8" />
    </svg>
);
const MoneyBag: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M3 4 C3 2 5 2 6 2 H10 C11 2 13 2 13 4 V5 H12 V4 H10 V5 H6 V4 H4 V5 H3 Z" fill="#D97706"/>
        <path d="M3 6 H13 V14 H3 Z" fill="#F59E0B" />
        <path d="M4 13 H12 V7 H4 Z" fill="#FBBF24" />
        {/* $ sign */}
        <path d="M8 8 H9 V7 H7 V8 H8 V9 H9 V10 H8 V11 H10 V12 H8 V11 H7 V10 H8 V9 H7 V8 Z" fill="#166534" />
    </svg>
);

// --- Game Themed Sprites ---
const Sword: React.FC = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <rect x="7" y="14" width="2" height="2" fill="#8D5524" />
    <rect x="6" y="12" width="4" height="2" fill="#8D5524" />
    <rect x="4" y="10" width="8" height="2" fill="#4B4D4E" />
    <rect x="7" y="2" width="2" height="8" fill="#B4B8B9" />
    <rect x="6" y="1" width="4" height="1" fill="#FFFFFF" />
    <rect x="7" y="0" width="2" height="1" fill="#FFFFFF" />
  </svg>
);
const GameController: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M2 6 H3 V5 H5 V4 H11 V5 H13 V6 H14 V10 H13 V11 H11 V12 H5 V11 H3 V10 H2 Z" fill="#9CA3AF"/>
        <rect x="5" y="6" width="2" height="2" fill="#4B5563" />
        <rect x="4" y="7" width="1" height="2" fill="#4B5563" />
        <rect x="6" y="7" width="1" height="2" fill="#4B5563" />
        <rect x="11" y="6" width="2" height="2" fill="#EF4444" />
        <rect x="10" y="8" width="2" height="2" fill="#3B82F6" />
    </svg>
);
const Ghost: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M3 5 C3 3 5 2 8 2 C11 2 13 3 13 5 V10 L11 12 L10 11 L8 13 L6 11 L5 12 L3 10 Z" fill="white"/>
        <rect x="5" y="6" width="2" height="2" fill="black" />
        <rect x="9" y="6" width="2" height="2" fill="black" />
    </svg>
);

// --- Character Themed Sprites ---
const Alien: React.FC = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <path d="M4 4 H12 V5 H13 V10 H12 V11 H10 V12 H6 V11 H4 V10 H3 V5 H4 Z" fill="#4ADE80" />
    <rect x="5" y="6" width="2" height="3" fill="black" />
    <rect x="9" y="6" width="2" height="3" fill="black" />
  </svg>
);
const Robot: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <rect x="4" y="2" width="8" height="2" fill="#6B7280" />
        <rect x="3" y="4" width="10" height="7" fill="#9CA3AF" />
        <rect x="5" y="6" width="6" height="3" fill="#4B5563" />
        <rect x="6" y="7" width="4" height="1" fill="#EF4444" />
        <rect x="4" y="11" width="3" height="3" fill="#6B7280" />
        <rect x="9" y="11" width="3" height="3" fill="#6B7280" />
    </svg>
);
const Skull: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M4 2 H12 V3 H13 V4 H14 V8 H13 V10 H12 V12 H10 V14 H6 V12 H4 V10 H3 V8 H2 V4 H3 V3 H4 Z" fill="white"/>
        <rect x="5" y="5" width="2" height="3" fill="black" />
        <rect x="9" y="5" width="2" height="3" fill="black" />
        <rect x="7" y="8" width="2" height="2" fill="black" />
        <rect x="6" y="11" width="1" height="2" fill="black" />
        <rect x="9" y="11" width="1" height="2" fill="black" />
    </svg>
);


// --- Fame Themed Sprites ---
const Crown: React.FC = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
    <rect x="1" y="6" width="14" height="8" fill="#FBBF24" />
    <rect x="1" y="4" width="2" height="2" fill="#FBBF24" />
    <rect x="7" y="4" width="2" height="2" fill="#FBBF24" />
    <rect x="13" y="4" width="2" height="2" fill="#FBBF24" />
    <rect x="1" y="2" width="2" height="2" fill="#FDE68A" />
    <rect x="7" y="2" width="2" height="2" fill="#FDE68A" />
    <rect x="13" y="2" width="2" height="2" fill="#FDE68A" />
    <rect x="4" y="7" width="2" height="2" fill="#EF4444" />
    <rect x="10" y="7" width="2" height="2" fill="#3B82F6" />
  </svg>
);
const Heart: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M3 4 H5 V3 H6 V2 H10 V3 H11 V4 H13 V6 H14 V8 H13 V10 H12 V11 H11 V12 H10 V13 H6 V12 H5 V11 H4 V10 H3 V8 H2 V6 H3 Z" fill="#EF4444"/>
    </svg>
);
const Rocket: React.FC = () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <path d="M8 1 L6 4 H10 Z" fill="#EF4444"/>
        <rect x="6" y="4" width="4" height="8" fill="#E5E7EB" />
        <rect x="4" y="6" width="2" height="4" fill="#9CA3AF" />
        <rect x="10" y="6" width="2" height="4" fill="#9CA3AF" />
        <rect x="6" y="12" width="4" height="2" fill="#F97316" />
        <rect x="7" y="14" width="2" height="2" fill="#F59E0B" />
    </svg>
);


export const SPRITE_COMPONENTS = [
    // Money
    <Coin />, <Diamond />, <MoneyBag />,
    // Games
    <Sword />, <GameController />, <Ghost />,
    // Characters
    <Alien />, <Robot />, <Skull />,
    // Fame
    <Crown />, <Heart />, <Rocket />,
];

export const TOTAL_SPRITES = 100;