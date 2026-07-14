"use client";

export default function Instagramfeed() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black text-cyan-400">
            FOLLOW THE NIGHTMARES
          </h2>

          <p className="mt-4 text-gray-400">
            Instagram highlights, game day photos and behind-the-scenes content.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {[1,2,3,4,5,6,7,8].map((item)=>(

            <div
              key={item}
              className="aspect-square rounded-2xl bg-zinc-900 border border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 transition"
            >
              Photo
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}