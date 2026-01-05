import { GetAllPokemons } from "@/services/pokemonService";

export default async function PokemonSupabasePage(){
    const pokemons = await GetAllPokemons();
    console.log(pokemons);
    return (
        <div>
            <h1>Pokemon Supabase</h1>
            <ul>
                {pokemons.map((pokemon) =>(
                    <li key={pokemon.pokedex_id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}