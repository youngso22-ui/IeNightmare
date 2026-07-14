import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h3 className="text-2xl font-black text-cyan-400">
              IE NIGHTMARES
            </h3>

            <p className="mt-2 text-gray-400">
              AAU Basketball
            </p>
          </div>

          <div className="flex gap-8 text-sm font-semibold">

            <Link
              href="/"
              className="transition hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="/roster"
              className="transition hover:text-cyan-400"
            >
              Roster
            </Link>

            <Link
              href="/schedule"
              className="transition hover:text-cyan-400"
            >
              Schedule
            </Link>

            <Link
              href="/media"
              className="transition hover:text-cyan-400"
            >
              Media
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>

        </div>

        <div className="mt-8 border-t border-cyan-500/10 pt-6 text-center">

          <p className="text-gray-500">
            © 2026 IE Nightmares Basketball. All Rights Reserved.
          </p>

          <a
            href="https://instagram.com/theIENightmares"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-cyan-400 transition hover:text-cyan-300"
          >
            @theIENightmares
          </a>

        </div>

      </div>
    </footer>
  );
}