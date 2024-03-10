import { useState, useEffect } from "react";

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

function usePokemons() {
    const [pokeName, setPokeName] = useState([])
    const [nextUrl, setNextUrl] =useState('')
    const [verMas, setVerMas] = useState(true)
    const getPokemon = async (url = URL_DEFAULT) =>{
             const response = await fetch(url)
             const listaPoke = await response.json()
             const { next, results } = listaPoke
             
             const newPokemones = await Promise.all(
                results.map( async (pokemon) => {
                 const response = await fetch(pokemon.url)
                 const poke = await response.json()
                //Datos completos aqui abajo.
                 const speciesRes = await fetch(poke.species.url)
                 const speciesData = await speciesRes.json()
                 console.log(poke)
                
                 return {
                     id: poke.id,
                     name: poke.name,
                     img: poke.sprites.versions["generation-v"]["black-white"].animated.front_default || poke.sprites.front_default,
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
             )
                
             return {next, newPokemones}
        }
    const obtenerPokemones = async () =>{
        const {next, newPokemones} = await getPokemon()
        setPokeName(newPokemones)
        setNextUrl(next)
    }

    const masPokemons = async () =>{
        const {next, newPokemones} = await getPokemon(nextUrl)
        setPokeName(prev => [...prev, ...newPokemones])
        next == null && setVerMas(false)
        setNextUrl(next)
    }


    useEffect(() =>{
        
        obtenerPokemones()
     }, [])
     return{pokeName, masPokemons, verMas}
}
export default usePokemons