import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../Components/Poke_cards";




const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([])
    const pName = 'Pikachu'

    useEffect(() =>{
       const getPokemon = async () =>{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const listaPoke = await response.json()
            const { results } = listaPoke


            const newPokemones = results.map( async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()
                console.log(poke)


                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default,
                    tipo: poke.types[0].type.name,
                    height: poke.height,
                    weight: poke.weight,
                    abilities: poke.abilities[0].ability.name,
                }

            })

            setPokeName(await (Promise.all(newPokemones)))

            const buscaPoke = async () =>{
                const response = await(`https://pokeapi.co/api/v2/${pName}?`)
                const pokeBus = await response.json()
                console.log(pokeBus)
                return{
                    namePoke : pokeBus.name
                }
            }

            buscaPoke( await(Promise.all(buscaPoke)))
       }
       getPokemon()
    }, [])
    
    return(
        <div>
            <div className="bg-slate-700 h-full grid grid-cols-1 p-2 gap-3 xl:grid-cols-5">
                {
                    pokeName.map(pokemon =>{
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <PokeCard 
                            key={pokemon.id}
                            id={pokemon.id} 
                            name={pokemon.name} 
                            img={pokemon.img} 
                            tipo={pokemon.tipo} 
                            height={pokemon.height} 
                            weight={pokemon.weight} 
                            abilities={pokemon.abilities}

                            />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default PokeApi