import { news } from "../../data/news";

export default function LatestNews() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-black text-cyan-400">
          Latest News
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {news.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-8"
            >
              <p className="text-sm text-cyan-400">
                {item.date}
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}