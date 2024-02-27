import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../Components/Poke_cards";
import { URL_LIST_POKEMONS } from "../urlApis/apisUrls";
import { URL_POKEMON } from "../urlApis/apisUrls";
import { URL_FULL } from "../urlApis/apisUrls";
import Search from "../Components/Search";




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
    
                 return {
                     id: poke.id,
                     name: poke.name,
                     img: poke.sprites.other["official-artwork"].front_default,
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
                {
                    pokeName.map(pokemon =>{
                        return(
                            <PokeCard 
                            key={pokemon.id}
                            id={pokemon.id} 
                            name={pokemon.name} 
                            img={pokemon.img} 
                            tipo={pokemon.tipo} 
                            height={pokemon.height} 
                            weight={pokemon.weight} 
                            abilities={pokemon.abilities}
                            color={pokemon.species.color}
                            hp={pokemon.hp}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            specialAttack={pokemon.specialAttack}
                            specialDefense={pokemon.specialDefense}
                            speed={pokemon.speed}
                            
                            />
                        )
                    })
                }
            </>
                
            
        
        
    )
}

export default PokeApi