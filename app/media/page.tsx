export default function MediaPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="border-b border-cyan-500/20 bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            MEDIA
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Photos and Highlights
          </p>

        </div>

      </section>

      {/* Highlight Videos */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-10 text-4xl font-black">
          Latest Highlights
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-900">

            <div className="flex h-[350px] items-center justify-center text-gray-500">
              Highlight Video Coming Soon
            </div>

          </div>

          <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-zinc-900">

            <div className="flex h-[350px] items-center justify-center text-gray-500">
              Highlight Video Coming Soon
            </div>

          </div>

        </div>

      </section>

      {/* Photo Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="mb-10 text-4xl font-black">
          Photo Gallery
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[1,2,3,4,5,6].map((photo) => (

            <div
              key={photo}
              className="flex aspect-square items-center justify-center rounded-2xl border border-cyan-500/20 bg-zinc-900 text-gray-500"
            >
              Photo Coming Soon
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}