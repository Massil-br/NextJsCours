import { GetPokemonById } from "@/services/pokemonService";

export default async function PokemonSupabaseDetailPage({params}){
    const {id} = await params;
    const pokemon = await GetPokemonById(id);

    console.log(pokemon)
    return(
        <div>
            <h1>Pokemon Supabase</h1>
            <h3>{pokemon.name}</h3>
        </div>
    )

}6