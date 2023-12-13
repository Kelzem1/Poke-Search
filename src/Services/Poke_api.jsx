import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../Components/Poke_cards";
import { URL_LIST_POKEMONS } from "../urlApis/apisUrls";
import { URL_SPECIES } from "../urlApis/apisUrls";



const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([])
    const [pokeColor, setPokeColor] = useState([])
    console.log(pokeColor)

    useEffect(() =>{
        const getPokemon = async () =>{
             const response = await fetch(`${URL_LIST_POKEMONS}`)
             const listaPoke = await response.json()
             const { results } = listaPoke
 
 
             const newPokemones = results.map( async (pokemon) => {
                 const response = await fetch(pokemon.url)
                 const poke = await response.json()
                 //console.log(poke)
 
 
                 return {
                     id: poke.id,
                     name: poke.name,
                     img: poke.sprites.other["official-artwork"].front_default,
                     tipo: poke.types[0].type.name,
                     height: poke.height,
                     weight: poke.weight,
                     abilities: poke.abilities[0].ability.name,
                 }
 
             })
             
 
             setPokeName(await (Promise.all(newPokemones)))

             

            
 
        }
        getPokemon()
     }, [])

     useEffect(() =>{
        const getColor = async () =>{
            const res = await fetch(`${URL_SPECIES}`)
            const speList = await res.json()
            const { results } = speList
            
             setPokeColor(await (Promise.all(getColor)))
        }

       
     }, [])

    
    return(
        <div>
            <div className="bg-black h-full grid font-Mulish font grid-cols-1 p-10 gap-7 xl:grid-cols-3 ">
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