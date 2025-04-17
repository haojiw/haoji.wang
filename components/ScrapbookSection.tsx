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
    // --- Row 1 ---
    {
      id: 1,
      label: "Lexus",
      color: "#BF9270",
      top: "10%",
      left: "12%",
      rotate: "rotate(-6deg)",
      fact:
        "I drive a 2005 Lexus LS430. Yes my car is 20 years old. Yes it's perfect for me. Yes I'll drive it till it breaks.",
    },
    {
      id: 10,
      label: "Films",
      color: "#9BADB7",
      top: "8%",
      left: "45%",
      rotate: "rotate(-4deg)",
      fact:
        "These days we all watch a lot of movies. My recent favs are Django Unchained, The Great Gatsby, and The Dark Knight.",
    },
    {
      id: 4,
      label: "Album",
      color: "#6A8D73",
      top: "12%",
      left: "78%",
      rotate: "rotate(5deg)",
      fact:
        "The College Dropout is my favourite album. I'm also into Kendrick Lamar, Tyler the Creator, and some R&B.",
    },

    // --- Row 2 ---
    {
      id: 7,
      label: "Globe",
      color: "#E3B5A4",
      top: "37%",
      left: "10%",
      rotate: "rotate(4deg)",
      fact:
        "I'm mostly rotating between Zhejiang, Singapore, and California. Still reminiscing my time in Tokyo and Thailand.",
    },
    {
      id: 6,
      label: "Games",
      color: "#8197AB",
      top: "36%",
      left: "35%",
      rotate: "rotate(-2deg)",
      fact:
        "Best games I've played: RDR 2, Zelda BOTW, Black Myth Wukong. But I grew up playing NBA 2K and Football Manager.",
    },
    {
      id: 2,
      label: "Guitar",
      color: "#7D8E95",
      top: "38%",
      left: "60%",
      rotate: "rotate(8deg)",
      fact:
        "I play guitar and record song covers sometimes. I got some friends who love to come over for Mandopop karaoke.",
    },
    {
      id: 5,
      label: "Soccer",
      color: "#A4C3B2",
      top: "37%",
      left: "85%",
      rotate: "rotate(-7deg)",
      fact:
        "Huge soccer / NBA nerd. I won the NBA trivia at Bruin Sports Analytics, and I love talking about soccer tactics.",
    },

    // --- Row 3 ---
    {
      id: 3,
      label: "Cooking",
      color: "#D3AB9E",
      top: "67%",
      left: "12%",
      rotate: "rotate(-10deg)",
      fact:
        "I run a food Instagram account. When everything's over I want to open a seafood restaurant. Who wants sushi?",
    },
    {
      id: 8,
      label: "Books",
      color: "#B8D8BA",
      top: "65%",
      left: "35%",
      rotate: "rotate(-8deg)",
      fact:
        "Love juggling one fiction & one non-fiction. Recently on The Alchemist and The Subtle Art of Not Giving an F.",
    },
    {
      id: 9,
      label: "Math",
      color: "#AA8976",
      top: "70%",
      left: "58%",
      rotate: "rotate(12deg)",
      fact:
        "I was 18th in Singapore Math Olympiad, and math club president in high school. Haven't grinded math the same way since.",
    },
    {
      id: 11,
      label: "Faith",
      color: "#D3AB9E",
      top: "69%",
      left: "82%",
      rotate: "rotate(3deg)",
      fact: "I grew up in a Christian household and I got baptized recently. Faith keeps my ego in check and reminds me what truly matters.",
    },
  ];

  /* ---------------------------------------------------------------- */
  /*  Render                                                          */
  /* ---------------------------------------------------------------- */
  return (
    <section className="mt-16 mb-24">
      <h3 className="text-2xl md:text-3xl font-serif mb-8">Bits &amp; Pieces</h3>

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
              {/* circle */}
              <div
                className="w-20 h-20 rounded-full shadow-md flex items-center justify-center"
                style={{ backgroundColor: s.color, transform: s.rotate }}
              >
                <span className="text-white font-sans2 font-bold text-sm select-none">
                  {s.label}
                </span>
              </div>

              {/* Fact bubble */}
              {isActive && (
                <div
                  className="absolute w-56 p-4 bg-white rounded-xl shadow-xl font-body text-sm leading-snug pointer-events-none"
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

      <p className="text-center font-sans2 text-sm text-muted mt-4">
        Hover over the stickers to learn fun facts about me!
      </p>
    </section>
  );
};

export default ScrapbookSection;
