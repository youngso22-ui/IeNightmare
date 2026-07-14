"use client";

import Link from "next/link";
import { players } from "../data/players";

export default function RosterPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            IE NIGHTMARES
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Official 2026 Team Roster
          </p>

        </div>

      </section>

      {/* Players */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {players.map((player) => (

            <Link
              key={player.slug}
              href={`/players/${player.slug}`}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={player.image}
                  alt={player.name}
                  className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <div className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-black">
                    {player.position}
                  </div>

                </div>

              </div>

              {/* Info */}

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-black">
                    {player.name}
                  </h2>

                  <span className="text-4xl font-black text-cyan-400">
                    {player.number}
                  </span>

                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">

                  <div className="rounded-xl bg-black/40 py-4 text-center">

                    <div className="text-2xl font-bold text-cyan-400">
                      {player.ppg}
                    </div>

                    <div className="text-xs text-gray-400">
                      PPG
                    </div>

                  </div>

                  <div className="rounded-xl bg-black/40 py-4 text-center">

                    <div className="text-2xl font-bold text-cyan-400">
                      {player.rpg}
                    </div>

                    <div className="text-xs text-gray-400">
                      RPG
                    </div>

                  </div>

                  <div className="rounded-xl bg-black/40 py-4 text-center">

                    <div className="text-2xl font-bold text-cyan-400">
                      {player.apg}
                    </div>

                    <div className="text-xs text-gray-400">
                      APG
                    </div>

                  </div>

                </div>

                <button className="btn-primary mt-8 w-full">
                  VIEW PLAYER PROFILE
                </button>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}