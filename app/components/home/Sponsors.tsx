export default function Sponsors() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-black text-cyan-400">
            Sponsors
          </h2>

          <p className="mt-4 text-gray-400">
            Thank you to the organizations that support IE Nightmares Basketball.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-10 text-center">
            Sponsor Logo
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-10 text-center">
            Sponsor Logo
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-10 text-center">
            Sponsor Logo
          </div>

        </div>

      </div>
    </section>
  );
}