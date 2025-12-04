import Pokemons from "@/components/pokemons/Pokemons";

export default async function PokemonPage() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_PokemonApiBaseUrl+"/pokemon",
  );
  const pokemons = await response.json();
  return (
    <div>
      <Pokemons pokemons={pokemons} />
    </div>
  );
}