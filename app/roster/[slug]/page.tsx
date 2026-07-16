import { notFound } from "next/navigation";
import { players } from "@/app/data/players";

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
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src={player.image}
          alt={player.name}
          className="rounded-xl border-4 border-cyan-500"
        />

        <div>
          <h1 className="text-5xl font-bold">{player.name}</h1>

          <p className="text-cyan-400 text-xl mt-3">
            {player.number} • {player.position}
          </p>

          <p className="mt-6 text-gray-300">
            {player.bio}
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h2 className="text-3xl font-bold">{player.ppg}</h2>
              <p>PPG</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">{player.rpg}</h2>
              <p>RPG</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">{player.apg}</h2>
              <p>APG</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}