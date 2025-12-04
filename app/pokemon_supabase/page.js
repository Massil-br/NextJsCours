import { GetAllPokemons } from "@/services/pokemonService";

export default async function PokemmonSupabasePage(){
    const pokemons = await GetAllPokemons();
    return (
        <div>
            <h1>Pokemon Supabase</h1>
            <ul>
                {pokemons.map((pokemon) =>{
                    <li key={pokemon.id_pokedex}>{pokemon.name}</li>
                })}
            </ul>
        </div>
    )
}