"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Sticker = {
  id: number;
  label: string;
  imageSrc: string;
  rotate: string;
  tilt: string;
  fact: string;
};

// Define type for the tooltip style
type TooltipStyle = {
  top?: string;
  left?: string;
  right?: string;
  transform?: string;
};

const ScrapbookSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<TooltipStyle>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Position the tooltip to prevent it from going outside the viewport
  const calculateTooltipPosition = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): TooltipStyle => {
    if (!containerRef.current) return {};
    
    const stickerRect = event.currentTarget.getBoundingClientRect();
    const tooltipWidth = 240; // w-60 = 15rem = 240px
    const windowWidth = window.innerWidth;
    
    // Default is centered below the sticker
    let left = "50%";
    let transform = "translate(-50%, 12px)";
    
    // Check if tooltip would overflow right edge
    if (stickerRect.right + tooltipWidth/2 > windowWidth) {
      return {
        top: "100%",
        right: "0",
        transform: "translate(0, 12px)",
      };
    }
    
    // Check if tooltip would overflow left edge
    if (stickerRect.left - tooltipWidth/2 < 0) {
      return {
        top: "100%",
        left: "0",
        transform: "translate(0, 12px)",
      };
    }
    
    // Default centered position
    return {
      top: "100%",
      left,
      transform,
    };
  };

  const stickers: Sticker[] = [
    {
      id: 1,
      label: "Lexus",
      imageSrc: "/stickers/lexus.webp",
      rotate: "rotate(-2deg)",
      tilt: "rotate(-3deg)",
      fact: "I drive a 2005 Lexus LS430. Yes my car is 20 years old. Yes it's perfect for me. Yes I'll drive it till it breaks.",
    },
    {
        id: 2,
        label: "Guitar",
        imageSrc: "/stickers/guitar.webp",
        rotate: "rotate(4deg)",
        tilt: "rotate(2deg)",
        fact: "I play guitar and record song covers sometimes. I got some friends who love to come over for Mandopop karaoke.",
    },
    {
        id: 3,
        label: "Cooking",
        imageSrc: "/stickers/cooking.webp",
        rotate: "rotate(1deg)",
        tilt: "rotate(-3deg)",
        fact: "I post what I cook on instagram @haoji.cooks. When everything is over I want to open a seafood restaurant. Who wants sushi?",
    },
    {
        id: 12,
        label: "Teenage",
        imageSrc: "/stickers/teenage.webp",
        rotate: "rotate(1deg)",
        tilt: "rotate(2deg)",
        fact: "At 15, I received a full scholarship from the Singapore government and moved abroad alone. Four years away from home taught me everything about independence.",
    },
    {
        id: 5,
        label: "Sports",
        imageSrc: "/stickers/sports.webp",
        rotate: "rotate(-2deg)",
        tilt: "rotate(-2deg)",
        fact: "I hoop, and I'm a huge sports nerd. I won the NBA trivia at Bruin Sports Analytics, and I love talking about soccer tactics.",
    },
    {
        id: 9,
        label: "Math",
        imageSrc: "/stickers/math.webp",
        rotate: "rotate(-1deg)",
        tilt: "rotate(3deg)",
        fact: "I was 18th in Singapore Math Olympiad, and math club president in high school. Haven't grinded math the same way since.",
    },
    {
      id: 4,
      label: "Album",
      imageSrc: "/stickers/album.webp",
      rotate: "rotate(3deg)",
      tilt: "rotate(2deg)",
      fact: "I love hip-hop, and The College Dropout is my favourite album. I'm also into Kendrick Lamar, Tyler the Creator, and some R&B.",
    },
    {
        id: 11,
        label: "Faith",
        imageSrc: "/stickers/faith.webp",
        rotate: "rotate(2deg)",
        tilt: "rotate(-2deg)",
        fact: "I grew up in a Christian household and I got baptized recently. Faith keeps my ego in check and reminds me what truly matters.",
    },
    {
        id: 8,
        label: "Books",
        imageSrc: "/stickers/books.webp",
        rotate: "rotate(-4deg)",
        tilt: "rotate(2deg)",
        fact: "I read fiction and non-fiction, English and Chinese. I recommend The Alchemist and The Subtle Art of Not Giving an F.",
    },
    {
        id: 10,
        label: "Films",
        imageSrc: "/stickers/films.webp",
        rotate: "rotate(-2deg)",
        tilt: "rotate(3deg)",
        fact: "These days we all watch a lot of movies. My recent favs are Django Unchained, The Great Gatsby, and The Dark Knight.",
    },
    {
      id: 7,
      label: "Globe",
      imageSrc: "/stickers/globe.webp",
      rotate: "rotate(3deg)",
      tilt: "rotate(-4deg)",
      fact: "I'm mostly rotating between Zhejiang, Singapore, and California. Still reminiscing my time in Tokyo and Thailand.",
    },
    {
      id: 6,
      label: "Games",
      imageSrc: "/stickers/games.webp",
      rotate: "rotate(0deg)",
      tilt: "rotate(3deg)",
      fact: "Best games I've played: RDR2, Zelda BOTW, Black Myth Wukong. I grew up playing NBA 2K and Football Manager.",
    },
  ];

  return (
    <section className="mt-16 mb-24">
      <div className="flex justify-center mb-12">
        <div className="
          inline-block px-6 py-3 
          bg-[url('/wooden-board.png')] bg-cover bg-center 
          rounded-md shadow-md rotate-[-1deg] relative
        ">
          <h3 className="text-2xl md:text-3xl font-handwriting font-bold tracking-wide text-[#3e2b1e] drop-shadow-sm">
            Stickers Board
          </h3>
        </div>
      </div>

      {/* GRID: 3 cols on small/med → 4 cols on lg+, rows fill automatically */}
      <div 
        ref={containerRef}
        className="grid grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 place-items-center relative"
      >
        {stickers.map((s) => {
          const isActive = hoveredId === s.id;

          return (
            <div
            key={s.id}
            className={`
                relative cursor-pointer
                transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]
                ${isActive ? "z-50" : "z-10"}
            `}
            onMouseEnter={(e) => {
                setHoveredId(s.id);
                setTooltipStyle(calculateTooltipPosition(e));
            }}
            onTouchStart={(e) => {
                const newId = s.id === hoveredId ? null : s.id;
                setHoveredId(newId);
                if (newId !== null) setTooltipStyle(calculateTooltipPosition(e));
            }}
            onMouseLeave={() => setHoveredId(null)}
            style={{
                transform: `${s.rotate}${isActive ? ` translateY(-4px) scale(1.1) ${s.tilt}` : ""}`,
            }}
            >
              {/* Sticker image */}
              <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
                <Image
                    src={s.imageSrc}
                    alt={s.label}
                    width={240}
                    height={240}
                    loading="lazy"
                    className={`
                        select-none pointer-events-none
                        transition-[transform,filter] duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]
                    `}
                    style={{
                        transform: isActive ? `${s.tilt} scale(1.2)` : undefined,
                        filter: isActive
                        ? "drop-shadow(0 12px 20px rgba(0,0,0,0.25))"
                        : "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
                    }}
                />
              </div>

              {/* Fact bubble */}
              {isActive && (
                <div
                  className="absolute w-60 p-4 rounded-xl leading-snug font-body text-text
                             bg-white/90 backdrop-blur-sm shadow-xl pointer-events-none"
                  style={tooltipStyle}
                >
                  {s.fact}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-center font-handwriting text-muted mt-10">
        Tap or hover to see little pieces of me!
      </p>
    </section>
  );
};

export default ScrapbookSection;
