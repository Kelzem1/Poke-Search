import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../Components/Poke_cards";




const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([])

    useEffect(() =>{
       const getPokemon = async () =>{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const listaPoke = await response.json()
            const { results } = listaPoke

            const newPokemones = results.map( async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default
                }
            })
            console.log(await (Promise.all(newPokemones)))

            setPokeName(await (Promise.all(newPokemones)))
       }
       getPokemon()
    }, [])
    
    return(
        <div>
            <div>
                {
                    pokeName.map(pokemon =>{
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <PokeCard id={pokemon.id} name={pokemon.name} img={pokemon.img} />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default PokeApi