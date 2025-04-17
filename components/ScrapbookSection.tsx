"use client";

import { useState } from "react";
import Image from "next/image";

type Sticker = {
  id: number;
  label: string;
  imageSrc: string;
  rotate: string;
  fact: string;
};

const ScrapbookSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const stickers: Sticker[] = [
    {
      id: 1,
      label: "Lexus",
      imageSrc: "/stickers/lexus.webp",
      rotate: "rotate(-6deg)",
      fact: "I drive a 2005 Lexus LS430. Yes my car is 20 years old. Yes it's perfect for me. Yes I'll drive it till it breaks.",
    },
    {
      id: 12,
      label: "Teenage",
      imageSrc: "/stickers/teenage.webp",
      rotate: "rotate(2deg)",
      fact: "At 15, I received a full scholarship from the Singapore government and moved abroad alone. Four years away from home taught me everything about independence.",
    },
    {
      id: 10,
      label: "Films",
      imageSrc: "/stickers/films.webp",
      rotate: "rotate(-4deg)",
      fact: "These days we all watch a lot of movies. My recent favs are Django Unchained, The Great Gatsby, and The Dark Knight.",
    },
    {
      id: 4,
      label: "Album",
      imageSrc: "/stickers/album.webp",
      rotate: "rotate(5deg)",
      fact: "The College Dropout is my favourite album. I'm also into Kendrick Lamar, Tyler the Creator, and some R&B.",
    },
    {
      id: 7,
      label: "Globe",
      imageSrc: "/stickers/globe.webp",
      rotate: "rotate(4deg)",
      fact: "I'm mostly rotating between Zhejiang, Singapore, and California. Still reminiscing my time in Tokyo and Thailand.",
    },
    {
      id: 6,
      label: "Games",
      imageSrc: "/stickers/games.webp",
      rotate: "rotate(-2deg)",
      fact: "Best games I've played: RDR2, Zelda BOTW, Black Myth Wukong. I grew up playing NBA 2K and Football Manager.",
    },
    {
      id: 2,
      label: "Guitar",
      imageSrc: "/stickers/guitar.webp",
      rotate: "rotate(8deg)",
      fact: "I play guitar and record song covers sometimes. I got some friends who love to come over for Mandopop karaoke.",
    },
    {
      id: 5,
      label: "Sports",
      imageSrc: "/stickers/sports.webp",
      rotate: "rotate(-7deg)",
      fact: "Huge soccer / NBA nerd. I won the NBA trivia at Bruin Sports Analytics, and I love talking about soccer tactics.",
    },
    {
      id: 3,
      label: "Cooking",
      imageSrc: "/stickers/cooking.webp",
      rotate: "rotate(-10deg)",
      fact: "I run a food Instagram account. When everything's over I want to open a seafood restaurant. Who wants sushi?",
    },
    {
      id: 8,
      label: "Books",
      imageSrc: "/stickers/books.webp",
      rotate: "rotate(-8deg)",
      fact: "Love juggling one fiction & one non‑fiction. Recently on The Alchemist and The Subtle Art of Not Giving an F.",
    },
    {
      id: 9,
      label: "Math",
      imageSrc: "/stickers/math.webp",
      rotate: "rotate(12deg)",
      fact: "I was 18th in Singapore Math Olympiad, and math club president in high school. Haven't grinded math the same way since.",
    },
    {
      id: 11,
      label: "Faith",
      imageSrc: "/stickers/faith.webp",
      rotate: "rotate(3deg)",
      fact: "I grew up in a Christian household and I got baptized recently. Faith keeps my ego in check and reminds me what truly matters.",
    },
  ];

  return (
    <section className="mt-16 mb-24">
      <h3 className="text-2xl md:text-3xl font-serif mb-8 text-center">
        Stickers Board
      </h3>

      {/* GRID: 3 cols on small/med → 4 cols on lg+, rows fill automatically */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 px-4 place-items-center">
        {stickers.map((s) => {
          const isActive = hoveredId === s.id;

          return (
            <div
              key={s.id}
              className={`relative transition-transform duration-300 ${
                isActive ? "z-50 scale-110" : "z-10"
              } cursor-pointer`}
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ transform: s.rotate }}
            >
              {/* Sticker image */}
              <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
                <Image
                  src={s.imageSrc}
                  alt={s.label}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="select-none pointer-events-none"
                />
              </div>

              {/* Fact bubble */}
              {isActive && (
                <div
                  className="absolute w-60 p-4 rounded-xl text-sm leading-snug font-body
                             bg-white/90 backdrop-blur-sm shadow-xl pointer-events-none"
                  style={{
                    top: "100%",
                    left: "50%",
                    transform: "translate(-50%, 12px)",
                  }}
                >
                  {s.fact}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-center font-sans2 text-sm text-muted mt-6">
        Hover over the stickers to learn fun facts about me!
      </p>
    </section>
  );
};

export default ScrapbookSection;
