import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="border-b border-cyan-500/20 bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            CONTACT
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Questions about the IE Nightmares? Get in touch with us.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2">

          {/* Coach */}
          <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8">

            <h2 className="text-3xl font-black text-cyan-400">
              Head Coach
            </h2>

            <p className="mt-4 text-2xl">
              Terrance Bass
            </p>

            <p className="mt-2 text-gray-400">
              IE Nightmares Basketball
            </p>

          </div>

          {/* Assistant */}
          <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8">

            <h2 className="text-3xl font-black text-cyan-400">
              Assistant Coach
            </h2>

            <p className="mt-4 text-2xl">
              Dallas Cox
            </p>

            <p className="mt-2 text-gray-400">
              Player Development
            </p>

          </div>

        </div>

        {/* Team Info */}
        <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8">

          <h2 className="text-3xl font-black text-cyan-400">
            Team Information
          </h2>

          <div className="mt-8 space-y-5 text-lg">

            <p>
              <span className="font-bold text-cyan-400">
                Instagram:
              </span>{" "}
              @theIENightmares
            </p>

            <p>
              <span className="font-bold text-cyan-400">
                Practice:
              </span>{" "}
              Monday & Wednesday
            </p>

            <p>
              <span className="font-bold text-cyan-400">
                Tournament:
              </span>{" "}
              HoopNation Las Vegas Legacy
            </p>

          </div>

        </div>

        {/* Contact Button */}
        <div className="mt-12 text-center">

          <Link
            href="https://instagram.com/theIENightmares"
            target="_blank"
            className="inline-block rounded-xl bg-cyan-500 px-10 py-4 font-bold text-black transition hover:bg-cyan-400 hover:scale-105"
          >
            MESSAGE US ON INSTAGRAM
          </Link>

        </div>

      </section>

    </main>
  );
}