"use client";

import Link from "next/link";

export default function FeaturedPlayer() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        {/* Player Image */}
        <div className="flex flex-1 justify-center">
          <img
            src="/players/Zayan-Vennie.jpg"
            alt="Zayan Vennie"
            className="w-full max-w-md rounded-3xl border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,.4)] transition duration-500 hover:scale-105"
          />
        </div>

        {/* Player Info */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-cyan-400 font-bold uppercase tracking-[8px]">
            Featured Player
          </p>

          <h2 className="mt-4 text-5xl font-black text-white md:text-6xl">
            ZAYAN VENNIE
          </h2>

          <p className="mt-2 text-2xl text-cyan-300">
            #4 • Guard
          </p>

          <p className="mt-8 max-w-xl leading-8 text-gray-300">
            One of the leaders of the IE Nightmares. A relentless competitor
            who impacts every game with defense, hustle, and scoring ability.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <Stat number="14.2" label="PPG" />
            <Stat number="7.1" label="RPG" />
            <Stat number="3.5" label="APG" />
          </div>

          <Link
            href="/players/zayan-vennie"
            className="mt-10 inline-block rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_#22d3ee]"
          >
            VIEW PLAYER PROFILE
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8 text-center">
      <div className="text-4xl font-black text-cyan-400">
        {number}
      </div>

      <div className="mt-2 text-sm uppercase tracking-[4px] text-gray-400">
        {label}
      </div>
    </div>
  );
}