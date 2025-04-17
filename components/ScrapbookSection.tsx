"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Sticker = {
  id: number;
  label: string;
  color: string;
  top: string;   // % string e.g. "40%"
  left: string;  // % string e.g. "65%"
  rotate: string; // css rotate() string
  fact: string;
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const ScrapbookSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  /* --------------------------------------- */
  /*  Sticker data                            */
  /* --------------------------------------- */
  const stickers: Sticker[] = [
    {
      id: 1,
      label: "Lexus",
      color: "#BF9270",
      top: "10%",
      left: "20%",
      rotate: "rotate(-5deg)",
      fact:
        "I drive a 2005 Lexus LS430. Yes my car is 20 years old. Yes it's perfect for me. Yes I'll drive it till it breaks.",
    },
    {
      id: 2,
      label: "Guitar",
      color: "#7D8E95",
      top: "35%",
      left: "65%",
      rotate: "rotate(8deg)",
      fact:
        "I play guitar and record song covers sometimes. I got some friends who love to come over for Mandopop karaoke.",
    },
    {
      id: 3,
      label: "Cooking",
      color: "#D3AB9E",
      top: "60%",
      left: "25%",
      rotate: "rotate(-10deg)",
      fact:
        "I run a food Instagram account. When everything's over I want to open a seafood restaurant. Who wants sushi?",
    },
    {
      id: 4,
      label: "Album",
      color: "#6A8D73",
      top: "15%",
      left: "75%",
      rotate: "rotate(5deg)",
      fact:
        "The College Dropout is my favourite album. I'm also into Kendrick Lamar, Tyler the Creator, and some R&B.",
    },
    {
      id: 5,
      label: "Soccer",
      color: "#A4C3B2",
      top: "70%",
      left: "70%",
      rotate: "rotate(-7deg)",
      fact:
        "Huge soccer / NBA nerd. I won the NBA trivia at Bruin Sports Analytics, and I love talking about soccer tactics.",
    },
    {
      id: 6,
      label: "Games",
      color: "#8D9EAB",
      top: "40%",
      left: "40%",
      rotate: "rotate(10deg)",
      fact:
        "Best games I've played: RDR 2, Zelda BOTW, Black Myth Wukong. But I grew up playing NBA 2K and Football Manager.",
    },
    {
      id: 7,
      label: "Globe",
      color: "#E3B5A4",
      top: "25%",
      left: "10%",
      rotate: "rotate(6deg)",
      fact:
        "I'm mostly rotating between Zhejiang, Singapore, and California. Still reminiscing my time in Tokyo and Thailand.",
    },
    {
      id: 8,
      label: "Books",
      color: "#B8D8BA",
      top: "55%",
      left: "55%",
      rotate: "rotate(-8deg)",
      fact:
        "Love juggling one fiction & one non-fiction. Recently on The Alchemist and The Subtle Art of Not Giving an F.",
    },
    {
      id: 9,
      label: "Math",
      color: "#AA8976",
      top: "80%",
      left: "15%",
      rotate: "rotate(12deg)",
      fact:
        "I was 18th in Singapore Math Olympiad, and math club president in high school. Haven't grinded math the same way since.",
    },
    {
      id: 10,
      label: "Films",
      color: "#9BADB7",
      top: "20%",
      left: "45%",
      rotate: "rotate(-4deg)",
      fact:
        "These days we all watch a lot of movies. My recent favs are Django Unchained, The Great Gatsby, and The Dark Knight.",
    },
  ];

  /* ---------------------------------------------------------------- */
  /*  Render                                                          */
  /* ---------------------------------------------------------------- */
  return (
    <section className="mt-16 mb-24">
      <h3 className="text-2xl md:text-3xl font-serif mb-8">Bits &amp; Pieces</h3>

      <div className="relative h-[500px] rounded-lg bg-[#f5f0e5] p-6 shadow-md">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-[#f9f6f0] opacity-70 mix-blend-overlay rounded-lg pointer-events-none" />

        {/* Decorative tape strips */}
        <div className="absolute top-0 left-[20%] w-[100px] h-[30px] bg-[#9DBEBB] opacity-40 rounded-sm -rotate-6 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[15%] w-[80px] h-[25px] bg-[#D8B4A0] opacity-40 rounded-sm rotate-12 pointer-events-none" />

        {/* Stickers */}
        {stickers.map((s) => {
          const isActive = hoveredId === s.id;

          return (
            <div
              key={s.id}
              style={{ top: s.top, left: s.left }}
              className={`absolute cursor-pointer transition-transform duration-300 ${
                isActive ? "z-50 scale-110" : "z-10"
              }`}
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* circle (rotated‐inside so wrapper keeps flat stacking context) */}
              <div
                className="w-20 h-20 rounded-full shadow-md flex items-center justify-center"
                style={{ backgroundColor: s.color, transform: s.rotate }}
              >
                <span className="text-white font-bold text-sm select-none">
                  {s.label}
                </span>
              </div>

              {/* Fact bubble */}
              {isActive && (
                <div
                  className="absolute w-56 p-4 bg-white rounded-xl shadow-xl text-sm leading-snug pointer-events-none"
                  style={{
                    top: "calc(100% + 8px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {s.fact}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-center font-serif text-sm text-muted mt-4">
        Hover over the stickers to learn fun facts about me
      </p>
    </section>
  );
};

export default ScrapbookSection;
