
import { supabase } from "@/lib/supabase";

export async function GetAllPokemons(){
    try{
        const {data,error} = await supabase.from('pokemon').select('*').order('pokedex_id',{ascending: true})
        if(error) {
            throw new isCustomErrorPage(error.message)
        }
        return data;
    }catch(error){
        console.error('Error fetching pokemon', error.message)
        return [];
    }
}

export async function GetPokemonById(id){
    try{
        const {data,error} = await supabase.from('pokemon').select('*').eq('pokemon_id', id).order('pokedex_id',{ascending: true})
        if(error) {
            throw new isCustomErrorPage(error.message)
        }
        return data;
    }catch(error){
        console.error('Error fetching pokemon', error.message)
        return [];
    }
}