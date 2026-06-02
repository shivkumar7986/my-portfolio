"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export const HoverLink = ({ href, text }: { href: string; text: string }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!linkRef.current) return;
    const topLetters = linkRef.current.querySelectorAll(".top-letter");
    const bottomLetters = linkRef.current.querySelectorAll(".bottom-letter");
    gsap.killTweensOf([topLetters, bottomLetters]);
    gsap.to(topLetters, {
      y: "-100%",
      duration: 0.3,
      ease: "power2.inOut",
      stagger: 0.015,
    });
    gsap.fromTo(
      bottomLetters,
      { y: "100%" },
      { y: "0%", duration: 0.3, ease: "power2.inOut", stagger: 0.015 },
    );
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    const topLetters = linkRef.current.querySelectorAll(".top-letter");
    const bottomLetters = linkRef.current.querySelectorAll(".bottom-letter");
    gsap.killTweensOf([topLetters, bottomLetters]);
    gsap.to(topLetters, {
      y: "0%",
      duration: 0.3,
      ease: "power2.inOut",
      stagger: 0.015,
    });
    gsap.to(bottomLetters, {
      y: "100%",
      duration: 0.3,
      ease: "power2.inOut",
      stagger: 0.015,
    });
  };

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex overflow-hidden cursor-pointer"
    >
      <span className="flex">
        {text.split("").map((char, i) => (
          <span key={i} className="top-letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 flex">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="bottom-letter inline-block translate-y-[100%]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </Link>
  );
};
