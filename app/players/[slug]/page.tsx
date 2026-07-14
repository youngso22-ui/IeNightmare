import { notFound } from "next/navigation";
import { players } from "../../data/players";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlayerPage({ params }: Props) {
  const { slug } = await params;

  const player = players.find((p) => p.slug === slug);

  if (!player) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#08131c] to-black">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-14 lg:grid-cols-2">

            {/* Player Image */}

            <div>

              <img
                src={player.image}
                alt={player.name}
                className="w-full rounded-3xl border border-cyan-500/30 object-cover shadow-[0_0_40px_rgba(34,211,238,.25)]"
              />

            </div>

            {/* Player Info */}

            <div className="flex flex-col justify-center">

              <p className="uppercase tracking-[6px] text-cyan-400">
                IE Nightmares Basketball
              </p>

              <h1 className="mt-4 text-6xl font-black">
                {player.name}
              </h1>

              <p className="mt-4 text-2xl text-cyan-400">
                {player.number} • {player.position}
              </p>

              <div className="mt-12 grid grid-cols-2 gap-5">

                <InfoCard title="Height" value={player.height} />
                <InfoCard title="Weight" value={player.weight} />
                <InfoCard title="Class" value={player.gradYear} />
                <InfoCard title="Hometown" value={player.hometown} />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="section-title mb-12">
          Season Statistics
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <StatCard label="PPG" value={player.ppg} />
          <StatCard label="RPG" value={player.rpg} />
          <StatCard label="APG" value={player.apg} />

        </div>

      </section>

      {/* Biography */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="section-title mb-10">
          Player Biography
        </h2>

        <div className="card p-10">

          <p className="text-lg leading-9 text-gray-300">
            {player.bio || "Biography coming soon."}
          </p>

        </div>

      </section>

      {/* Highlight Video */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="section-title mb-10">
          Highlight Video
        </h2>

        <div className="card flex h-[420px] items-center justify-center">

          <p className="text-gray-500 text-xl">
            Highlight Video Coming Soon
          </p>

        </div>

      </section>

      {/* Gallery */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="section-title mb-10">
          Photo Gallery
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[1,2,3].map((photo)=>(
            <div
              key={photo}
              className="card aspect-square flex items-center justify-center"
            >
              Coming Soon
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

function InfoCard({
  title,
  value,
}:{
  title:string;
  value:string;
}){

  return(

    <div className="card p-6">

      <p className="text-cyan-400 uppercase text-sm">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>

    </div>

  );

}

function StatCard({
  label,
  value,
}:{
  label:string;
  value:string;
}){

  return(

    <div className="card p-10 text-center">

      <div className="text-6xl font-black text-cyan-400">
        {value}
      </div>

      <div className="mt-4 text-gray-400 uppercase">
        {label}
      </div>

    </div>

  );

}