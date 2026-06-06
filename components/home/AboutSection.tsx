"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const v3Ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const text = textRef.current;
    const v3 = v3Ref.current;
    const image = imageRef.current;

    if (!section || !heading || !text || !v3 || !image) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // MOBILE TIMELINE (No scrub, plays normally on scroll)
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%", // Triggers slightly earlier to ensure visibility
          },
        });

        // 1. Clear blur on section
        tl.fromTo(section, { filter: "blur(20px)" }, { filter: "blur(0px)", duration: 0.5 });
        
        // 2. Image and Texts appear rapidly
        tl.fromTo(image, { autoAlpha: 0, y: 40, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, "-=0.2");
        tl.fromTo(heading, { autoAlpha: 0, y: 40, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, "-=0.6");
        tl.fromTo(text, { autoAlpha: 0, y: 40, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, "-=0.6");
        tl.fromTo(v3, { autoAlpha: 0, y: 40, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out" }, "-=0.6");
      });

      // DESKTOP TIMELINE (Scrubbed and with parallax)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom top", 
            scrub: 1,
          },
        });

        tl.fromTo(section, { filter: "blur(20px)" }, { filter: "blur(0px)", duration: 1, ease: "power2.out" });
        tl.fromTo(image, { autoAlpha: 0, y: 100, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }, "-=0.5");
        tl.fromTo(heading, { autoAlpha: 0, y: 80, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }, "-=0.8");
        tl.fromTo(text, { autoAlpha: 0, y: 80, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }, "-=0.8");
        tl.fromTo(v3, { autoAlpha: 0, y: 80, filter: "blur(20px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power2.out" }, "-=0.8");
        
        // Parallax drift
        tl.to(heading, { y: -120, duration: 2, ease: "none" }, "parallax");
        tl.to(text, { y: -80, duration: 2, ease: "none" }, "parallax");
        tl.to(v3, { y: -60, duration: 2, ease: "none" }, "parallax");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-auto min-h-screen md:h-[150vh] bg-[#0a0a0a] text-white flex flex-col md:flex-row items-center py-20 px-8 md:px-0 md:py-0 overflow-hidden"
    >
      {/* Container for content */}
      <div
        className="w-full h-full flex flex-col md:flex-row items-center md:items-stretch justify-between relative gap-12 md:gap-0"
      >
        <div 
          className="w-full md:w-[60%] flex flex-col gap-10 md:gap-0 justify-center md:justify-evenly z-10 md:pt-0"
          style={{ 
            paddingLeft: "max(1.5rem, 5vw)", 
            paddingRight: "max(1.5rem, 5vw)",
            paddingTop: "max(3rem, 8vh)"
          }}
        >
          {/* Main Headline */}
          <div ref={headingRef} className="md:mb-32 invisible">
            <h2
              className="text-[28px] md:text-[2.8vw] leading-tight font-medium"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              As a{" "}
              <span
                className=" font-light text-white/90"
                style={{ fontFamily: "var(--font-breton), serif" }}
              >
                full-stack developer
              </span>
              , I build digital experiences
              <br className="hidden md:block" /> that combine thoughtful design
              with{" "}
              <span
                className=" font-light text-white/90"
                style={{ fontFamily: "var(--font-breton), serif" }}
              >
                robust engineering
              </span>
              .
            </h2>
          </div>

          {/* Bottom Details */}
          <div
            ref={textRef}
            className="flex flex-row justify-start md:justify-center items-center w-full invisible"
          >
            <div className="w-full md:max-w-[400px]">
              <p
                className="text-[16px] md:text-[24px] leading-relaxed text-gray-300 md:text-gray-100 mb-6 md:mb-16 font-normal"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                My name is Shiv. A passionate creator and computer science
                student, I build memorable digital experiences, always seeking
                the symbiosis between art and information.
              </p>
              <span
                className="text-[11px] md:text-[11px] tracking-[0.2em] font-bold uppercase text-white/50 md:text-white"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                INFO
              </span>
            </div>
          </div>

          {/* V3.0 Label */}
          <div
            ref={v3Ref}
            className="flex items-center justify-end gap-2 text-white/80 md:text-white text-[16px] md:text-[44px] font-medium invisible md:mt-16 w-full"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            <span>➔</span>
            <span>V3.0</span>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="w-full md:w-[45%] h-[60vh] md:h-[90%] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-6 md:mt-0 mb-10 md:mb-0">
          <div
            ref={imageRef}
            className="w-full h-full relative overflow-hidden rounded-2xl md:rounded-t-none md:rounded-l-[15vw]"
          >
            <Image
              src="/images/profile/me.png"
              alt="Shiv"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Right Edge 'About' Line */}
      <div className="absolute right-[2vw] top-[15vh] hidden md:flex flex-col items-center gap-3 z-20">
        <div className="w-[1px] h-[100px] bg-white/70"></div>
        <span
          className="text-[10px] tracking-widest text-white/90"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          About
        </span>
      </div>
    </section>
  );
}
