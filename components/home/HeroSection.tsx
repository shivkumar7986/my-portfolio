"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { HoverLink } from "@/components/ui/HoverLink";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderOverlayRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameImages = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload video frames on mount (using frames 100 to 200 only)
    frameImages.current = []; // Prevent strict mode duplication
    for (let i = 1; i <= 200; i++) {
      const img = new Image();
      img.decoding = "async"; // Optimize image decoding
      img.src = `/frames/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
      frameImages.current.push(img);
    }
  }, []);

  useEffect(() => {
    if (
      !containerRef.current ||
      !loaderOverlayRef.current ||
      !textContainerRef.current
    )
      return;

    const tl = gsap.timeline({ delay: 0.1 });
    const letters = containerRef.current.querySelectorAll(".hero-letter");
    const fadeElements = containerRef.current.querySelectorAll(".hero-fade-in");

    // Initial setup: move text to center and scale it up
    gsap.set(textContainerRef.current, {
      y: "-20vh",
      scale: 0.5,
      transformOrigin: "center center",
    });

    // Hide rest of the UI initially
    gsap.set(fadeElements, { opacity: 0 });
    gsap.set(letters, { y: 150, opacity: 0 });

    tl.to(letters, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.05,
    });

    tl.to(
      loaderOverlayRef.current,
      {
        y: "-100%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.4,
      },
      "transition",
    );

    tl.to(
      textContainerRef.current,
      {
        y: "0vh",
        scale: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.4,
      },
      "transition",
    );

    tl.to(
      fadeElements,
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => {
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=400%",
              scrub: true,
              pin: true,
            },
          });

          scrollTl.to(
            textContainerRef.current,
            { y: "-20vh", ease: "none", duration: 1 },
            0,
          );
          scrollTl.to(
            fadeElements,
            { opacity: 0, ease: "none", duration: 1 },
            0,
          );

          scrollTl.to(
            ".shiv-text",
            { x: "-100vw", ease: "power1.inOut", duration: 1 },
            1,
          );
          scrollTl.to(
            ".creates-text",
            { x: "100vw", ease: "power1.inOut", duration: 1 },
            1,
          );

          scrollTl.fromTo(
            canvasRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, ease: "power2.inOut", duration: 1 },
            1,
          );

          const frameSequence = { frame: 0 };
          scrollTl.to(
            frameSequence,
            {
              frame: 199, // Fixed from 200 to 199 to prevent undefined array index at the end
              ease: "none",
              duration: 1,
              onUpdate: () => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const ctx = canvas.getContext("2d", { alpha: false });
                if (!ctx) return;
                
                const frameIndex = Math.round(frameSequence.frame);
                const img = frameImages.current[frameIndex];
                if (img && img.complete) {
                  // Removed clearRect for performance, drawing fully opaque image
                  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
              },
            },
            1,
          );
        },
      },
      "transition+=0.5",
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        <span className="inline-block hero-letter opacity-0">
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between"
      style={{
        paddingLeft: "2vw",
        paddingRight: "2vw",
        paddingTop: "6vh",
        paddingBottom: "4vh",
      }}
      ref={containerRef}
    >
      {/* Black Loader Overlay */}
      <div
        ref={loaderOverlayRef}
        className="fixed inset-0 bg-black z-40 pointer-events-none "
      />

      {/* Video Canvas Layer */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-[45] pointer-events-none opacity-0"
        style={{ transform: "scale(0)" }}
      />

      {/* Top layer */}
      <div className="w-full flex justify-start z-10 hero-fade-in opacity-0">
        <p
          className="text-[11px] md:text-[16px] leading-relaxed text-[#f0f0f0] font-medium"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Quiet creator,{" "}
          <span
            className="italic"
            style={{ fontFamily: "var(--font-breton), serif" }}
          >
            bringing ideas to life,
          </span>
          <br />
          through motion, detail and softness.
        </p>
        ``
      </div>

      {/* Center huge text */}
      <div
        ref={textContainerRef}
        className="flex-1 flex items-end w-full relative z-[50] select-none"
      >
        <h1 className="text-[25vw] md:text-[17vw] leading-none flex flex-col md:flex-row items-center md:items-baseline justify-center md:justify-between w-full">
          <span
            className="font-normal tracking-tight text-[#e8e8e8] whitespace-nowrap shiv-text"
            style={{ fontFamily: "var(--font-breton), sans-serif" }}
          >
            {splitText("Shiv")}
          </span>
          <span
            className="italic text-[#e8e8e8] whitespace-nowrap creates-text"
            style={{ fontFamily: "var(--font-machine), serif" }}
          >
            {splitText("Creates.")}
          </span>
        </h1>
      </div>

      {/* Bottom footer area */}
      <div
        className="w-full border-t-1 border-gray-400 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[16px] font-bold tracking-[0.2em] uppercase z-10 hero-fade-in opacity-0"
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          paddingTop: "2rem",
        }}
      >
        <div className="flex items-center w-full md:w-auto justify-center md:justify-start mb-6 md:mb-0">
          <span className="text-white">→ V3.0</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6 md:mb-0 w-full md:w-auto text-white">
          <HoverLink href="https://behance.net" text="BEHANCE" />
          <span className="text-[rgba(255,255,255,0.2)] font-light">/</span>
          <HoverLink
            href="https://www.linkedin.com/in/shiv-creates/"
            text="LINKEDIN"
          />
          <span className="text-[rgba(255,255,255,0.2)] font-light">/</span>
          <HoverLink href="https://github.com/shivkumar7986" text="GITHUB" />
        </div>

        <div className="flex items-center justify-center md:justify-end gap-6 md:gap-8 text-white w-full md:w-auto">
          <HoverLink href="/works" text="WORK" />
          <HoverLink href="/info" text="INFO" />
          <HoverLink href="/contact" text="CONTACT" />
        </div>
      </div>
    </section>
  );
}
