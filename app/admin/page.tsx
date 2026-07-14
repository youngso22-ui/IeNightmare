import Link from "next/link";

const cards = [
  {
    title: "Roster",
    description: "Add players, update jersey numbers, positions, and photos.",
    href: "/admin/roster",
  },
  {
    title: "Schedule",
    description: "Update games, opponents, times, locations, and results.",
    href: "/admin/schedule",
  },
  {
    title: "News",
    description: "Post announcements and tournament updates.",
    href: "/admin/news",
  },
  {
    title: "Media",
    description: "Upload photos, highlight videos, and galleries.",
    href: "/admin/media",
  },
  {
    title: "Sponsors",
    description: "Manage sponsor logos and partner information.",
    href: "/admin/sponsors",
  },
  {
    title: "Team Settings",
    description: "Update team record, social links, contact info, and homepage content.",
    href: "/admin/settings",
  },
];

export default function AdminPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#08364b_0%,transparent_70%)] opacity-20" />

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

      <section className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-cyan-400">
            Administration
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[6px] text-white md:text-7xl">
            ADMIN DASHBOARD
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Manage every part of the IE Nightmares website from one place.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (

            <Link
              key={card.title}
              href={card.href}
              className="rounded-3xl border border-cyan-500/20 bg-[#0a0a0a]/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.30)]"
            >

              <h2 className="text-2xl font-black text-cyan-400">
                {card.title}
              </h2>

              <p className="mt-4 leading-7 text-gray-400">
                {card.description}
              </p>

              <div className="mt-8 font-semibold text-cyan-400">
                Open →
              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}