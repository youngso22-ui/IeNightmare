"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#08364b_0%,transparent_70%)] opacity-20" />

      {/* Smoke */}
      <div
        className="absolute inset-0 smoke opacity-10"
        style={{
          backgroundImage: "url('/smoke.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <form
        onSubmit={signIn}
        className="relative w-full max-w-md rounded-3xl border border-cyan-500/20 bg-[#0a0a0a]/80 p-10 backdrop-blur-sm"
      >
        <div className="text-center">

          <img
            src="/download.jpg"
            alt="IE Nightmares"
            className="logoGlow mx-auto w-28"
          />

          <h1 className="mt-6 text-4xl font-black text-cyan-400">
            ADMIN LOGIN
          </h1>

          <p className="mt-2 text-gray-400">
            IE Nightmares Dashboard
          </p>

        </div>

        <div className="mt-10 space-y-6">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-cyan-500/20 bg-black/40 p-4 outline-none focus:border-cyan-400"
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            {loading ? "Signing In..." : "LOGIN"}
          </button>

        </div>

      </form>

    </main>
  );
}