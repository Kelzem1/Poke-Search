import { useEffect } from "react";
import { useState } from "react";




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
                            <div className="bg-yellow-100 p-4 flex w-96">
                                
                                    <img className="bg-black" src={pokemon.img} alt={pokemon.name} />
                                    <p className="flex-col">{pokemon.name}</p>
                                    <p>{pokemon.id}</p> 
                                
                               
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default PokeApi