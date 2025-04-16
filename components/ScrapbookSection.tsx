"use client";

import { useState } from 'react';
import Image from 'next/image';

// Define the sticker type
type Sticker = {
  id: number;
  alt: string;
  color: string;
  position: {
    top: string;
    left: string;
    rotate: string;
  };
  fact: string;
};

const ScrapbookSection = () => {
  const [activeSticker, setActiveSticker] = useState<number | null>(null);
  
  // Define stickers with positions, rotations, and fun facts
  const stickers: Sticker[] = [
    {
      id: 1,
      alt: 'Coffee',
      color: '#BF9270',
      position: { top: '10%', left: '20%', rotate: 'rotate(-5deg)' },
      fact: "I'm a total coffee enthusiast and have visited over 200 coffee shops around the world!"
    },
    {
      id: 2,
      alt: 'Guitar',
      color: '#7D8E95',
      position: { top: '35%', left: '65%', rotate: 'rotate(8deg)' },
      fact: "I taught myself to play guitar and can play over 50 songs by ear."
    },
    {
      id: 3,
      alt: 'Camera',
      color: '#D3AB9E',
      position: { top: '60%', left: '25%', rotate: 'rotate(-10deg)' },
      fact: "Photography is my creative outlet. I've had two of my photos published in travel magazines!"
    },
    {
      id: 4,
      alt: 'Book',
      color: '#6A8D73',
      position: { top: '15%', left: '75%', rotate: 'rotate(5deg)' },
      fact: "I read over 30 books a year, with a special love for science fiction and philosophy."
    },
    {
      id: 5,
      alt: 'Plane',
      color: '#A4C3B2',
      position: { top: '70%', left: '70%', rotate: 'rotate(-7deg)' },
      fact: "I've visited 18 countries so far, with a goal to reach 50 by the time I'm 40."
    },
  ];

  return (
    <div className="mt-16 mb-24">
      <h3 className="text-2xl md:text-3xl font-serif mb-8">Bits & Pieces</h3>
      
      <div className="relative h-[500px] bg-[#f5f0e5] rounded-lg p-6 shadow-md">
        {/* Scrapbook paper texture */}
        <div className="absolute inset-0 bg-[#f9f6f0] opacity-70 mix-blend-overlay rounded-lg"></div>
        
        {/* Decorative tape strips */}
        <div className="absolute top-0 left-[20%] w-[100px] h-[30px] bg-[#9DBEBB] opacity-40 rounded-sm transform -rotate-6"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[80px] h-[25px] bg-[#D8B4A0] opacity-40 rounded-sm transform rotate-12"></div>
        
        {/* Stickers */}
        {stickers.map((sticker) => (
          <div 
            key={sticker.id}
            className="absolute w-20 h-20 transform cursor-pointer transition-transform duration-300 hover:scale-110"
            style={{ 
              top: sticker.position.top, 
              left: sticker.position.left, 
              transform: sticker.position.rotate 
            }}
            onMouseEnter={() => setActiveSticker(sticker.id)}
            onMouseLeave={() => setActiveSticker(null)}
          >
            {/* Placeholder sticker circles */}
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 rounded-full shadow-md overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: sticker.color }}
              >
                <span className="text-white font-bold text-sm">
                  {sticker.alt}
                </span>
              </div>
            </div>
            
            {/* Fact bubble that appears on hover */}
            {activeSticker === sticker.id && (
              <div className="absolute w-48 p-3 bg-white rounded-lg shadow-lg z-10 text-sm leading-snug"
                style={{
                  top: sticker.position.top < '50%' ? '105%' : 'auto',
                  bottom: sticker.position.top >= '50%' ? '105%' : 'auto',
                  left: sticker.position.left < '50%' ? '0' : 'auto',
                  right: sticker.position.left >= '50%' ? '0' : 'auto',
                  transformOrigin: `${sticker.position.top < '50%' ? 'top' : 'bottom'} ${sticker.position.left < '50%' ? 'left' : 'right'}`
                }}
              >
                <div className="font-body">
                  {sticker.fact}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <p className="text-center font-serif text-sm text-muted mt-4">
        Hover over the stickers to learn fun facts about me
      </p>
    </div>
  );
};

export default ScrapbookSection; 