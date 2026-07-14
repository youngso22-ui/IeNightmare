"use client";

export default function ParentPortalPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header */}

      <section className="bg-gradient-to-b from-[#08131c] to-black py-20">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <h1 className="text-6xl font-black text-cyan-400">
            PARENT PORTAL
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            One place for everything your family needs.
          </p>

        </div>

      </section>

      {/* Login Placeholder */}

      <section className="mx-auto max-w-xl px-6 py-20">

        <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-10">

          <h2 className="text-3xl font-black text-center">
            Secure Login
          </h2>

          <p className="mt-4 text-center text-gray-400">
            Parent accounts will be enabled soon.
          </p>

          <input
            type="password"
            placeholder="Password"
            className="mt-10 w-full rounded-xl border border-cyan-500/20 bg-black p-4 outline-none focus:border-cyan-400"
          />

          <button className="mt-6 w-full rounded-xl bg-cyan-500 py-4 font-bold text-black hover:bg-cyan-400 transition">
            LOGIN
          </button>

        </div>

      </section>

      {/* Preview */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <h2 className="text-center text-5xl font-black text-cyan-400 mb-12">
          Coming Soon
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <PortalCard
            title="Practice Schedule"
            description="Weekly practice times and locations."
          />

          <PortalCard
            title="Tournament Hotels"
            description="Recommended hotels and booking information."
          />

          <PortalCard
            title="Team Documents"
            description="Waivers, forms and team policies."
          />

          <PortalCard
            title="Payment Center"
            description="Fees and payment reminders."
          />

          <PortalCard
            title="Coach Announcements"
            description="Important updates from the coaching staff."
          />

          <PortalCard
            title="Travel Information"
            description="Weekend itineraries and logistics."
          />

        </div>

      </section>

    </main>
  );
}

function PortalCard({
  title,
  description,
}:{
  title:string;
  description:string;
}){

  return(

    <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.35)] transition">

      <h3 className="text-2xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {description}
      </p>

    </div>

  );

}