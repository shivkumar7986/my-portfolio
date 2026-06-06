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
  const videoRef = useRef<HTMLVideoElement>(null);
  const blurTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !loaderOverlayRef.current ||
      !textContainerRef.current ||
      !blurTriggerRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      const letters = containerRef.current?.querySelectorAll(".hero-letter");
      const fadeElements = containerRef.current?.querySelectorAll(".hero-fade-in");

      if (!letters || !fadeElements) return;

      // Create scroll timeline immediately to establish the pin spacer correctly.
      // This prevents subsequent sections (like AboutSection) from calculating
      // wrong start/end scroll triggers due to delayed layout shifts.
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          // Dynamically set the scroll distance based on the video duration
          end: () => `+=${(videoRef.current?.duration || 4) * 500}`,
          scrub: true,
          pin: true,
        },
      });

      // Independent scroll trigger to blur the HeroSection as it scrolls out of view (-50vh)
      gsap.fromTo(
        [containerRef.current, videoRef.current],
        { filter: "blur(0px)" },
        {
          filter: "blur(20px)",
          ease: "none",
          scrollTrigger: {
            trigger: blurTriggerRef.current,
            start: "top bottom",
            end: "top 50%",
            scrub: true,
          },
        }
      );

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
              { x: "-100vw", ease: "none", duration: 1 },
              1,
            );
            scrollTl.to(
              ".creates-text",
              { x: "100vw", ease: "none", duration: 1 },
              1,
            );

            scrollTl.fromTo(
              videoRef.current,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, ease: "none", duration: 1 },
              1,
            );

            const videoProxy = { progress: 0 };
            scrollTl.to(
              videoProxy,
              {
                progress: 1,
                ease: "none",
                duration: 1,
                onUpdate: () => {
                  if (videoRef.current && videoRef.current.duration) {
                    // Some browsers need a slight offset from the very end to avoid stopping
                    const targetTime =
                      videoProxy.progress * (videoRef.current.duration - 0.001);
                    videoRef.current.currentTime = targetTime;
                  }
                },
              },
              1,
            );

            scrollTl.to(
              ".quote-container",
              { opacity: 1, duration: 0.1, ease: "none" },
              1.4,
            );

            scrollTl.fromTo(
              ".quote-line",
              { y: "100%" },
              { y: "0%", duration: 0.5, stagger: 0.1, ease: "power2.out" },
              1.4,
            );

            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);
          },
        },
        "transition+=0.5",
      );

      // Refresh ScrollTrigger when video metadata is fully loaded to get the accurate duration
      const handleLoadedMetadata = () => {
        ScrollTrigger.refresh();
      };
      
      if (videoRef.current) {
        videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      }

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        }
      };
    }, containerRef);

    return () => ctx.revert();
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
    <>
    <section
      className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-between"
      style={{
        paddingLeft: "2vw",
        paddingRight: "2vw",
        paddingTop: "4vh",
        paddingBottom: "4vh",
      }}
      ref={containerRef}
    >
      {/* Black Loader Overlay */}
      <div
        ref={loaderOverlayRef}
        className="fixed inset-0 bg-black z-40 pointer-events-none "
      />

      {/* Video Layer */}
      <video
        ref={videoRef}
        src="/video/output_hq.mp4"
        preload="auto"
        playsInline
        muted
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-[45] pointer-events-none opacity-0 mix-blend-screen"
        style={{ transform: "scale(0)" }}
      />

      {/* Quote Layer */}
      <div className="absolute right-[5vw] top-1/2 -translate-y-1/2 z-[60] flex flex-col items-end text-right pointer-events-none quote-container opacity-0">
        <div className="overflow-hidden mb-1">
          <p
            className="text-[#e8e8e8] text-[12px] md:text-[2vw] font-bold uppercase tracking-widest quote-line"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Those who see through the lies
          </p>
        </div>
        <div className="overflow-hidden my-2 py-1">
          <p
            className="text-red-600 font-bold text-[30px] md:text-[5vw] leading-none uppercase tracking-tighter quote-line drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            style={{ fontFamily: "var(--font-machine), serif" }}
          >
            SUFFERS
          </p>
        </div>
        <div className="overflow-hidden mt-1">
          <p
            className="text-[#e8e8e8] text-[12px] md:text-[2vw] font-bold uppercase tracking-widest quote-line"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            the most
          </p>
        </div>
      </div>

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
      </div>

      {/* Center huge text */}
      <div
        ref={textContainerRef}
        className="flex-1 flex items-end w-full relative z-[50] select-none"
      >
        <h1 className="text-[25vw] md:text-[17vw] leading-none flex flex-col md:flex-row items-center md:items-baseline justify-center md:justify-between w-full">
          <span
            className="italic font-normal tracking-tight text-[#e8e8e8] whitespace-nowrap shiv-text"
            style={{ fontFamily: "var(--font-machine), sans-serif" }}
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
        className="w-full border-t border-white/20 md:border-gray-400 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[16px] font-bold tracking-[0.2em] uppercase z-10 hero-fade-in opacity-0"
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
    <div ref={blurTriggerRef} className="w-full h-[1px] pointer-events-none" />
    </>
  );
}
