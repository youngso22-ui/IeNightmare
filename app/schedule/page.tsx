import Link from "next/link";
import { schedule } from "../data/schedule";

export default function SchedulePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#08364b_0%,transparent_70%)] opacity-20" />

      {/* Smoke */}
      <div
        className="absolute inset-0 smoke opacity-10"
        style={{
          backgroundImage: "url('/smoke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-cyan-400">
            2026 Season
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[6px] text-white md:text-7xl">
            TEAM SCHEDULE
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Stay up to date with tournament schedules, game times,
            locations, and results throughout the season.
          </p>

        </div>

        <div className="mt-16 space-y-8">

          {schedule.map((game) => (

            <div
              key={game.id}
              className="rounded-3xl border border-cyan-500/20 bg-[#0a0a0a]/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.30)]"
            >

              <div className="grid gap-8 md:grid-cols-6 md:items-center">

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-cyan-400">
                    Date
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {game.date}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-cyan-400">
                    Time
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {game.time}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-cyan-400">
                    Opponent
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {game.opponent}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-cyan-400">
                    Location
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {game.location}
                  </h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[3px] text-cyan-400">
                    Court
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    {game.court}
                  </h3>
                </div>

                <div className="text-center md:text-right">

                  <span
                    className={`inline-block rounded-full px-5 py-2 font-semibold ${
                      game.status === "Upcoming"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : game.status === "Final"
                        ? "bg-green-500/20 text-green-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {game.status}
                  </span>

                  {game.score && (
                    <p className="mt-3 text-xl font-bold text-white">
                      {game.score}
                    </p>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/home"
            className="rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            BACK TO HOME
          </Link>

        </div>

      </section>

    </main>
  );
}