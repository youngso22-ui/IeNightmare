"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Particle = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

export default function HeroComponent() {
  const [flash, setFlash] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);

    const generatedParticles = Array.from({ length: 40 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 8,
    }));

    setParticles(generatedParticles);

    let timer: ReturnType<typeof setTimeout>;

    const flashLoop = () => {
      setFlash(true);

      setTimeout(() => {
        setFlash(false);
      }, 120);

      timer = setTimeout(flashLoop, Math.random() * 5000 + 3000);
    };

    timer = setTimeout(flashLoop, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

      {/* Smoke Layer 1 */}
      <div
        className="absolute inset-0 opacity-40 animate-[pulse_10s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/smoke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "screen",
        }}
      />

      {/* Smoke Layer 2 */}
      <div
        className="absolute inset-0 opacity-20 blur-md"
        style={{
          backgroundImage: "url('/smoke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "smokeMove 25s linear infinite",
          transform: "scale(1.2)",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Lightning */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-150 ${
          flash ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-cyan-300/40"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                animation: `float ${p.duration}s linear infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <img
          src="/download.jpg"
          alt="IE Nightmares"
          className="w-56 drop-shadow-[0_0_60px_#22d3ee] transition duration-700 hover:scale-105 sm:w-72 md:w-[420px]"
        />

        <h1 className="mt-8 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-5xl font-black tracking-[10px] text-transparent animate-pulse sm:text-6xl md:text-8xl">
          NIGHTMARE SZN
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-2xl">
          Built Different.
        </p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            href="/roster"
            className="rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_#22d3ee]"
          >
            VIEW ROSTER
          </Link>

          <Link
            href="/schedule"
            className="rounded-xl border border-cyan-400 px-10 py-4 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:shadow-[0_0_35px_#22d3ee]"
          >
            VIEW SCHEDULE
          </Link>

          <Link
            href="/media"
            className="rounded-xl border border-cyan-400 px-10 py-4 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:shadow-[0_0_35px_#22d3ee]"
          >
            WATCH HIGHLIGHTS
          </Link>

        </div>

        <div className="absolute bottom-8 flex animate-bounce flex-col items-center text-cyan-400">

          <span className="mb-2 text-xs tracking-[6px]">
            SCROLL
          </span>

          <div className="h-8 w-[2px] bg-cyan-400" />

        </div>

      </div>

    </section>
  );
}