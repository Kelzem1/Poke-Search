import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../Components/Poke_cards";
import { URL_LIST_POKEMONS } from "../urlApis/apisUrls";
import { URL_POKEMON } from "../urlApis/apisUrls";
import { URL_FULL } from "../urlApis/apisUrls";





const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([])
    

    useEffect(() =>{


        const getPokemon = async () =>{
             const response = await fetch(`${URL_LIST_POKEMONS}`)
             const listaPoke = await response.json()
             const { results } = listaPoke
             
             const newPokemones = results.map( async (pokemon) => {
                 const response = await fetch(pokemon.url)
                 const poke = await response.json()
                //Datos completos aqui abajo.
                 const speciesRes = await fetch(poke.species.url)
                 const speciesData = await speciesRes.json()
                console.log(poke)
                 return {
                     id: poke.id,
                     name: poke.name,
                     img: poke.sprites.versions["generation-v"]["black-white"].animated.front_default,
                     tipo: poke.types[0].type.name,
                     height: poke.height,
                     weight: poke.weight,
                     abilities: poke.abilities[0].ability.name,
                     species: {
                        color : speciesData.color.name
                     },
                     hp: poke.stats[0].base_stat,
                     attack: poke.stats[1].base_stat,
                     defense: poke.stats[2].base_stat,
                     specialAttack: poke.stats[3].base_stat,
                     specialDefense: poke.stats[4].base_stat,
                     speed: poke.stats[5].base_stat 
                 }

             })
             setPokeName(await (Promise.all(newPokemones)))

            
        }
        getPokemon()
     }, [])

    return(
  
            <> 
                 {pokeName.map(pokemon =><PokeCard {...pokemon} color={pokemon.species.color} />)}
            </>
                
            
        
        
    )
}

export default PokeApi