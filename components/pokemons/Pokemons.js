"use client";
import PokemonCard from "./PokemonCard";
import Link from "next/link";

export default function Pokemons({ pokemons }) {
  return (
    <section className="p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pokédex</h1>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 list-none p-0 m-0">
        {pokemons.map((pokemon) => (
          // CORRECTION 1 : La 'key' va sur le <li>, qui est l'enfant direct du .map
          <li key={pokemon.pokedex_id}>
            {/* CORRECTION 2 : Le Link est DANS le li */}
            <Link href={"/pokemon/" + pokemon.pokedex_id.toString()} className="block h-full">
              <PokemonCard pokemon={pokemon} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}