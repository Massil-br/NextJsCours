"use server"
import { CreatePokemon } from "../../services/pokemonService";



export async function HandleSubmit(formdata){
   const pokemon = {
    name:formdata.get("name"),
    pokedex_id: formdata.get("pokedex_id")
   }
   const newPokemon = await CreatePokemon(pokemon)
   console.log(formdata)
   console.log(newPokemon)
}