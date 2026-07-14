"use client";

export default function WeekendCentralPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}

      <section className="bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            WEEKEND CENTRAL
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Everything parents and players need for this weekend.
          </p>

        </div>

      </section>

      {/* Tournament */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="card p-10">

          <h2 className="text-4xl font-black text-cyan-400">
            HoopNation Las Vegas Legacy
          </h2>

          <p className="mt-4 text-gray-300">
            July 24–26, 2026
          </p>

          <p className="mt-2 text-gray-400">
            Las Vegas, Nevada
          </p>

        </div>

      </section>

      {/* Game Schedule */}

      <section className="mx-auto max-w-7xl px-6 pb-16">

        <h2 className="section-title mb-8">
          Game Schedule
        </h2>

        <div className="space-y-6">

          {[
            {
              day: "Friday",
              opponent: "Coming Soon",
              time: "TBD",
              court: "TBD",
            },
            {
              day: "Saturday",
              opponent: "Coming Soon",
              time: "TBD",
              court: "TBD",
            },
            {
              day: "Sunday",
              opponent: "Coming Soon",
              time: "TBD",
              court: "TBD",
            },
          ].map((game, index) => (

            <div
              key={index}
              className="card p-6 flex flex-col md:flex-row md:justify-between md:items-center"
            >

              <div>

                <h3 className="text-2xl font-bold">
                  {game.day}
                </h3>

                <p className="text-gray-400">
                  vs {game.opponent}
                </p>

              </div>

              <div className="mt-4 md:mt-0 text-right">

                <p>{game.time}</p>

                <p className="text-gray-400">
                  Court {game.court}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Parent Information */}

      <section className="mx-auto max-w-7xl px-6 pb-16">

        <h2 className="section-title mb-8">
          Parent Information
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-cyan-400">
              Uniform
            </h3>

            <p className="mt-4">
              Black Uniform
            </p>
          </div>

          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-cyan-400">
              Arrival
            </h3>

            <p className="mt-4">
              60 Minutes Early
            </p>
          </div>

          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-cyan-400">
              Coach Notes
            </h3>

            <p className="mt-4">
              Stay hydrated and be ready.
            </p>
          </div>

          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-cyan-400">
              Parking
            </h3>

            <p className="mt-4">
              Venue Parking Available
            </p>
          </div>

        </div>

      </section>

      {/* Hotels */}

      <section className="mx-auto max-w-7xl px-6 pb-16">

        <h2 className="section-title mb-8">
          Hotels
        </h2>

        <div className="card p-8">

          <p className="text-gray-400">
            Team hotel information will be posted here before each tournament.
          </p>

        </div>

      </section>

      {/* Restaurants */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="section-title mb-8">
          Nearby Restaurants
        </h2>

        <div className="card p-8">

          <p className="text-gray-400">
            Family-friendly restaurant recommendations will appear here.
          </p>

        </div>

      </section>

    </main>
  );
}