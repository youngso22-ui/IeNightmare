"use client";

import { coaches } from "../data/coaches";

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}

      <section className="bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            OUR COACHES
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Meet the leadership behind IE Nightmares Basketball.
          </p>

        </div>

      </section>

      {/* Coaches */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-2">

          {coaches.map((coach) => (

            <div
              key={coach.slug}
              className="card overflow-hidden"
            >

              <img
                src={coach.image}
                alt={coach.name}
                className="h-[500px] w-full object-cover"
              />

              <div className="p-8">

                <h2 className="text-4xl font-black">
                  {coach.name}
                </h2>

                <p className="mt-2 text-cyan-400 text-xl">
                  {coach.title}
                </p>

                <p className="mt-8 leading-8 text-gray-300">
                  {coach.bio}
                </p>

                <div className="mt-8 space-y-3">

                  <p>
                    <span className="text-cyan-400">Experience:</span>{" "}
                    {coach.experience}
                  </p>

                  <p>
                    <span className="text-cyan-400">Email:</span>{" "}
                    {coach.email}
                  </p>

                  <p>
                    <span className="text-cyan-400">Phone:</span>{" "}
                    {coach.phone}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}