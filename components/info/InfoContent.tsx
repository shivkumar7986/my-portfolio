"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "@/data/skills";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const whatIDo = [
  {
    title: "Frontend",
    description:
      "Building responsive, accessible interfaces with React, Next.js, and TypeScript. I obsess over smooth animations and pixel-perfect designs.",
  },
  {
    title: "Full-Stack",
    description:
      "From database design to API architecture, I build complete products. Node.js, PostgreSQL, and Supabase are my go-to tools.",
  },
  {
    title: "Design",
    description:
      "I design in Figma and translate vision into code. I believe great products live at the intersection of design and engineering.",
  },
];

export default function InfoContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Hero Header Animation
      const titleChars = gsap.utils.toArray(".title-char");
      gsap.fromTo(
        titleChars,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.05,
          delay: 0.2,
        },
      );

      // Section Reveals
      const sections = gsap.utils.toArray(".gsap-section");
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          },
        );
      });

      // Bio Section Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 75%",
        },
      });

      // Image clip-path reveal
      tl.fromTo(
        ".image-container",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power4.inOut",
        },
      );

      // Bio title and text stagger
      tl.fromTo(
        ".bio-title",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=1.0",
      );

      const bioParagraphs = gsap.utils.toArray(".bio-text p");
      tl.fromTo(
        bioParagraphs,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
        "-=0.8",
      );

      // Image Parallax (keeps scrubbing while scrolling past)
      gsap.to(".info-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Skills Stagger Animation
      const groups = gsap.utils.toArray(".skill-group");
      groups.forEach((group: any) => {
        const pills = group.querySelectorAll(".skill-pill");
        gsap.fromTo(
          pills,
          { scale: 0.8, opacity: 0, y: 10 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: group,
              start: "top 90%",
            },
          },
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full text-white mt-20 pt-10">
      {/* Massive Header */}
      <div className="mb-20 md:mb-40 border-b border-white/10 pb-12 overflow-hidden">
        <h1
          className="text-[15vw] md:text-[10vw] leading-[0.8] tracking-tight font-bold uppercase flex flex-wrap"
          style={{ fontFamily: "var(--font-machine), sans-serif" }}
        >
          {"Info.".split("").map((char, i) => (
            <span key={i} className="title-char inline-block">
              {char}
            </span>
          ))}
        </h1>
      </div>

      <div className="flex flex-col gap-32 md:gap-48">
        {/* Bio section */}
        <section className="bio-section grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2
              className="bio-title text-[10px] uppercase tracking-[0.3em] text-white/50 mb-10 font-bold"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Background
            </h2>
            <div
              className="bio-text space-y-8 text-[18px] md:text-[24px] text-white/80 leading-[1.6] font-medium"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              <p>
                I&apos;m a full-stack developer and UI engineer based in India.
                I build thoughtful, detail-oriented digital products — from
                healthcare SaaS platforms to creative web experiences.
              </p>
              <p>
                My work sits at the intersection of logic and feeling. I care
                deeply about how things work under the hood, but I care equally
                about how they feel to use. Every interaction, every transition,
                every pixel matters.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably exploring new design
                tools, experimenting with creative coding, or thinking about
                what makes a great user experience.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div
            className="lg:col-span-5 image-container bg-white/5"
            style={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/images/profile/me.png"
                alt="Vis"
                fill
                className="info-image object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-110"
              />
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="gsap-section">
          <h2
            className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-12 font-bold"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {whatIDo.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-6 bg-[#111] border border-white/5 hover:bg-[#1a1a1a] transition-colors duration-500"
                style={{ padding: "32px" }}
              >
                <span className="text-white/20 text-4xl font-bold font-mono">
                  0{i + 1}
                </span>
                <h3
                  className="text-2xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[15px] text-white/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Full skills list */}
        <section className="gsap-section pb-32">
          <h2
            className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-12 font-bold"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Skills & Arsenal
          </h2>
          <div className="flex flex-col gap-12">
            {skillGroups.map((group) => (
              <div key={group.category} className="skill-group flex flex-col">
                <div
                  className="skill-category flex items-center gap-6"
                  style={{ marginBottom: "clamp(1rem, 2vh, 2rem)" }}
                >
                  <h3
                    className="text-[16px] uppercase tracking-[0.2em] font-bold text-white/40 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {group.category}
                  </h3>
                  <div className="h-[1px] w-full bg-white/10" />
                </div>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-pill force-hover-pill relative inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent overflow-hidden cursor-crosshair transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                      style={{
                        padding:
                          "clamp(0.75rem, 1.5vh, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                      }}
                    >
                      {/* Solid white fill that slides up */}
                      <div className="force-hover-bg absolute inset-0 bg-[#e8e8e8] rounded-full" />

                      <span
                        className="force-hover-text relative z-10 text-[13px] md:text-[14px] leading-none font-medium tracking-wide text-white/50 transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
