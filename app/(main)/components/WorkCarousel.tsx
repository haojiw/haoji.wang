'use client';

import Image from 'next/image';
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from 'react';
import { createPortal } from 'react-dom';

const slides = [
  {
    src: '/images/work/paperhouse-web-english.png',
    caption: 'PaperHouse Web (English Entry)',
  },
  {
    src: '/images/work/paperhouse-web-chinese.png',
    caption: 'PaperHouse Web (中文案例)',
  },
  {
    src: '/images/work/paperhouse-mobile-record.png',
    caption: 'PaperHouse Mobile - Record Flow',
  },
  {
    src: '/images/work/paperhouse-mobile-retrieve.png',
    caption: 'PaperHouse Mobile - Retrieve Flow',
  },
];

export default function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const previewButtonRef = useRef<HTMLButtonElement>(null);
  const didSwipe = useRef(false);

  useEffect(() => {
    slides.slice(1).forEach((slide) => {
      const image = new window.Image();
      image.src = slide.src;
    });
  }, []);

  useEffect(() => {
    if (!previewOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previewTrigger = previewButtonRef.current;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
      previewTrigger?.focus();
    };
  }, [previewOpen]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  const handlePreviewKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (event.key === 'Escape') {
      setPreviewOpen(false);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNext();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLButtonElement>) => {
    didSwipe.current = false;
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLButtonElement>) => {
    if (touchStart === null) return;

    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 50) {
      didSwipe.current = true;
      if (distance > 0) {
        showPrevious();
      } else {
        showNext();
      }
    }
    setTouchStart(null);
  };

  const openPreview = () => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }

    setPreviewOpen(true);
  };

  const activeSlide = slides[activeIndex];

  return (
    <>
      <div
        className="mt-10 outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
        role="region"
        aria-roledescription="carousel"
        aria-label="PaperHouse product gallery"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <figure>
          <button
            ref={previewButtonRef}
            type="button"
            onClick={openPreview}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label={`Open larger preview of ${activeSlide.caption}`}
            className="relative block w-full touch-pan-y cursor-zoom-in overflow-hidden rounded-[3px] border border-border bg-white shadow-[0_18px_40px_-22px_rgba(37,34,31,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            style={{ aspectRatio: '3100 / 2126' }}
          >
            <Image
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.caption}
              fill
              priority={activeIndex === 0}
              unoptimized
              sizes="(min-width: 1024px) 960px, calc(100vw - 48px)"
              className="object-contain"
            />
          </button>

          <figcaption className="mt-4 grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-3 font-sans text-base text-muted">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xl text-text hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              ←
            </button>

            <span className="text-center" aria-live="polite">
              {activeSlide.caption}
            </span>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next image"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xl text-text hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              →
            </button>
          </figcaption>
        </figure>

        <div className="mt-3 flex justify-center gap-2" aria-label="Choose an image">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}: ${slide.caption}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className="flex h-6 w-7 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <span
                className={`h-2 rounded-full transition-[width,background-color] ${
                  index === activeIndex
                    ? 'w-6 bg-brand'
                    : 'w-2 bg-border hover:bg-muted/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {previewOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Preview of ${activeSlide.caption}`}
            onClick={() => setPreviewOpen(false)}
          >
            <div
              className="relative flex max-h-full flex-col items-center"
              onClick={(event) => event.stopPropagation()}
              onKeyDown={handlePreviewKeyDown}
            >
              <button
                type="button"
                onClick={() => setPreviewOpen(false)}
                aria-label="Close image preview"
                autoFocus
                className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 font-sans text-2xl text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                ×
              </button>
              <div className="relative h-[78vh] w-[94vw] max-w-[1500px]">
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.caption}
                  fill
                  unoptimized
                  sizes="94vw"
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous image"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 font-sans text-2xl text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4"
              >
                ←
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Show next image"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 font-sans text-2xl text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4"
              >
                →
              </button>
              <p className="mt-3 font-sans text-sm text-white/80" aria-live="polite">
                {activeSlide.caption}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
