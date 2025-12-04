

import PokemonDetail from "@/components/pokemons/PokemonDetail";

export default async function PokemonDetailPage({ params }) {
  const { id } = await params;

  const response = await fetch(
    process.env.NEXT_PUBLIC_PokemonApiBaseUrl + "/pokemon/" + id,
  );
  const data = await response.json();
  const pokemon = data;

  return (
    <div>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
}