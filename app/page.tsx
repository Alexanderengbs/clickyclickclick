"use client";

import { useState } from "react";

export default function Home() {
  const [klikk, setKlikk] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Hei, det fungerer!</h1>
      <p className="text-gray-500">Din første webapp kjører lokalt på maskinen din.</p>
      <button
        onClick={() => setKlikk(klikk + 1)}
        className="rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800 transition-colors"
      >
        Trykk på meg
      </button>
      {klikk > 0 && (
        <p className="text-lg font-medium">Du har trykket {klikk} gang{klikk !== 1 ? "er" : ""}!</p>
      )}
    </main>
  );
}
