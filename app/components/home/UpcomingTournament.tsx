import Link from "next/link";

export default function UpcomingTournament() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Smoke */}
      <div
        className="absolute inset-0 smoke opacity-10"
        style={{
          backgroundImage: "url('/smoke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f4c63_0%,transparent_70%)] opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-cyan-500/20 bg-[#0a0a0a]/70 p-10 backdrop-blur-sm shadow-[0_0_45px_rgba(34,211,238,.15)] md:p-16">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[6px] text-cyan-400">
              Next Tournament
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              HoopNation Las Vegas Legacy
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">

              <div>

                <p className="text-sm uppercase tracking-[3px] text-cyan-400">
                  Location
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Las Vegas, NV
                </h3>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[3px] text-cyan-400">
                  Tournament
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Legacy Series
                </h3>

              </div>

              <div>

                <p className="text-sm uppercase tracking-[3px] text-cyan-400">
                  Status
                </p>

                <h3 className="mt-2 text-2xl font-bold text-green-400">
                  Coming Soon
                </h3>

              </div>

            </div>

            <p className="mx-auto mt-12 max-w-3xl text-lg leading-8 text-gray-400">

              Follow the IE Nightmares throughout tournament weekend for
              schedules, game results, highlights, photos, and live updates
              as we compete against some of the nation's top AAU programs.

            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <Link
                href="/schedule"
                className="rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_35px_#22d3ee]"
              >
                VIEW SCHEDULE
              </Link>

              <Link
                href="/weekend-central"
                className="rounded-xl border border-cyan-400 px-10 py-4 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:shadow-[0_0_35px_#22d3ee]"
              >
                WEEKEND CENTRAL
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}