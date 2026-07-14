"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/home" },
  { name: "Weekend Central", href: "/weekend-central" },
  { name: "Coaches", href: "/coaches" },
  { name: "Roster", href: "/roster" },
  { name: "Schedule", href: "/schedule" },
  { name: "Stats", href: "/stats" },
  { name: "Media", href: "/media" },
  { name: "Merch", href: "/merch" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/home" className="flex items-center gap-3">
          <img
            src="/logos/nightmares-logo.jpg"
            alt="IE Nightmares"
            className="h-12 w-12 rounded-full border border-cyan-400 object-cover"
          />

          <div>
            <h1 className="text-xl font-black tracking-wide text-cyan-400">
              IE NIGHTMARES
            </h1>
            <p className="text-xs text-gray-400">
              Fear The Nightmare
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold transition ${
                pathname === link.href
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden text-3xl text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-cyan-500/20 bg-black lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-cyan-500/10 px-6 py-4 text-white hover:bg-cyan-500/10"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}