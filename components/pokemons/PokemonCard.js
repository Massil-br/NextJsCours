"use client";
import Image from "next/image";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-gradient-to-b from-white to-blue-50 hover:shadow-lg hover:scale-105 transition-transform w-full h-full border border-slate-100">
      <p className="font-bold text-gray-900 capitalize mb-2">{pokemon.name.fr}</p>
      <div className="relative w-[100px] h-[100px]">
        <Image
          src={pokemon.sprites.regular}
          fill
          sizes="100px"
          alt={pokemon.name.fr}
          className="object-contain"
        />
      </div>
    </div>
  );
}