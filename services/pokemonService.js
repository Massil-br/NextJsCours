
import { supabase } from "@/lib/supabase";
//import { isCustomErrorPage } from "next/dist/build/utils";

export async function GetAllPokemons(){
    try{
        const {data,error} = await supabase.from('pokemon').select('*').order('pokedex_id',{ascending: true})
        if(error) {
            console.log(error.message);
        }
        return data;
    }catch(error){
        console.error('Error fetching pokemon', error.message)
        return [];
    }
}

export async function GetPokemonById(id){
    try{
        const {data,error} = await supabase.from('pokemon').select('*').eq('id', id)
        if(error) {
             console.log(error.message);
        }
        return data[0];
    }catch(error){
        console.error('Error fetching pokemon', error.message)
        return [];
    }
}


export async function CreatePokemon(pokemon){
   try{
        const {data,error}= await supabase.from('pokemon').insert([
            {
                name:pokemon.name,
                pokedex_id: pokemon.pokedex_id
            }
        ]).select()
        if (error){
            console.log(error.message);
        }
        return data[0]
   }catch(error){
    console.error('error saving pokemon', error.message)
    return [];
   }

}