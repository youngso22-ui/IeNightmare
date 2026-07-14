"use client";

const stats = [
  { label: "Team Record", value: "18-3" },
  { label: "PPG", value: "74.2" },
  { label: "RPG", value: "39.8" },
  { label: "APG", value: "17.6" },
  { label: "SPG", value: "11.4" },
  { label: "BPG", value: "5.1" },
];

export default function TeamStats() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-cyan-400 font-bold">
            TEAM STATS
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            2026 Season
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-8 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.5)]"
            >
              <h3 className="text-4xl font-black text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 uppercase tracking-[3px] text-gray-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}