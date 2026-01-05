"use client" ;

import { HandleSubmit } from "./action";

export default  function  CreatePokemonForm() {
    return (
        <div>
            <h1>Formulaire de création de Pokémon</h1>
            <form action={HandleSubmit}>
                <input type="text" name="name" placeholder="Nom du Pokémon" />
                <input type="text" name="pokedex_id" placeholder="Description du Pokémon" />
                <button type="submit">Créer</button>
            </form>
        </div>
    )
}