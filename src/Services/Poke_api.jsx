import { useEffect } from "react";
import { useState } from "react";
import PokeCard from "../Components/Poke_cards";
import { URL_LIST_POKEMONS } from "../urlApis/apisUrls";




const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([])
    const [pokeColor, setPokeColor] = useState([])
    //console.log(pokeColor)

    useEffect(() =>{
        const getPokemon = async () =>{
             const response = await fetch(`${URL_LIST_POKEMONS}`)
             const listaPoke = await response.json()
             const { results } = listaPoke
 
 
             const newPokemones = results.map( async (pepe) => {
                 const response = await fetch(pepe.url)
                 const poke = await response.json()
                 //console.log(poke)
                //Datos con completos aqui abajo.
                 const speciesRes = await fetch(poke.species.url)
                 const speciesData = await speciesRes.json()
                 //console.log(speciesData)
                 setPokeColor(speciesData.color.name)
                
                 
 
 
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
                     }
                 }
                
 
             })
             
 
             setPokeName(await (Promise.all(newPokemones)))

            
        }
        getPokemon()
     }, [])

  



    
    return(
        <div className="bg-black">
            <div className='bg-${color} grid w-full font-Mulish grid-cols-1 p-5 gap-7 xl:grid-cols-3 xl:w-fit xl:m-auto xl:justify-center'>
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
                            color={pokemon.species.color}

                            />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default PokeApi