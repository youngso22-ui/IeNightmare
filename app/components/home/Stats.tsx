export default function Stats() {
  const stats = [
    {
      number: "18-2",
      label: "TEAM RECORD",
    },
    {
      number: "37",
      label: "POINTS PER GAME",
    },
    {
      number: "20",
      label: "ASSISTS PER GAME",
    },
    {
      number: "22",
      label: "REBOUNDS PER GAME",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* Section Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Smoke */}
      <div
        className="absolute inset-0 smoke opacity-10"
        style={{
          backgroundImage: "url('/smoke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#08364b_0%,transparent_65%)] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-black tracking-[6px] text-cyan-400">
            TEAM STATS
          </h2>

          <p className="mt-4 text-gray-400">
            The Numbers Behind The Nightmare
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-2xl border border-cyan-500/20 bg-[#0a0a0a]/70 p-10 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.30)]"
            >

              <h3 className="text-6xl font-black text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-5 text-sm tracking-[4px] text-gray-400">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}