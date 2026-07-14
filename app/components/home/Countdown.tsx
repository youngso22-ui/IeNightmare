"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("July 24, 2026 08:00:00").getTime();

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    setMounted(true);

    const updateCountdown = () => {
      setTimeLeft(target - Date.now());
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [target]);

  if (!mounted) {
    return null;
  }

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  );
  const minutes = Math.max(
    0,
    Math.floor((timeLeft / (1000 * 60)) % 60)
  );
  const seconds = Math.max(
    0,
    Math.floor((timeLeft / 1000) % 60)
  );

  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-cyan-400 font-bold tracking-widest uppercase">
          NEXT TOURNAMENT
        </p>

        <h2 className="text-5xl font-black mt-4">
          HoopNation Las Vegas Legacy
        </h2>

        <p className="text-white/70 mt-3 text-xl">
          July 24–26 • Las Vegas, Nevada
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <TimeBox number={days} label="Days" />
          <TimeBox number={hours} label="Hours" />
          <TimeBox number={minutes} label="Minutes" />
          <TimeBox number={seconds} label="Seconds" />
        </div>

        <Link
          href="/schedule"
          className="inline-block mt-14 bg-cyan-500 text-black font-bold px-10 py-4 rounded-xl hover:bg-cyan-400 transition"
        >
          VIEW FULL SCHEDULE
        </Link>
      </div>
    </section>
  );
}

function TimeBox({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-black border border-cyan-500/30 py-10">
      <div className="text-5xl font-black text-cyan-400">
        {number}
      </div>

      <div className="mt-2 uppercase tracking-widest text-gray-400">
        {label}
      </div>
    </div>
  );
}