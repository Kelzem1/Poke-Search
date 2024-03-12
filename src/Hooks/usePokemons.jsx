import { useState, useEffect } from "react";

const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
const URL_SEARCH = 'https://pokeapi.co/api/v2/pokemon/'

function usePokemons() {
    const [pokeName, setPokeName] = useState([])
    const [nextUrl, setNextUrl] =useState('')
    const [verMas, setVerMas] = useState(true)
    

    const fetchPokemons = async (url) =>{
        const response = await fetch(url)
        const poke = await response.json()
       //Datos completos aqui abajo.
        const speciesRes = await fetch(poke.species.url)
        const speciesData = await speciesRes.json()
        const color = speciesData.color.name
        console.log(poke)
       
        return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.versions["generation-v"]["black-white"].animated.front_shiny || poke.sprites.front_default,
            tipo: poke.types[0].type.name,
            height: poke.height,
            weight: poke.weight,
            abilities: poke.abilities[0].ability.name,
            color: color, 
            hp: poke.stats[0].base_stat,
            attack: poke.stats[1].base_stat,
            defense: poke.stats[2].base_stat,
            specialAttack: poke.stats[3].base_stat,
            specialDefense: poke.stats[4].base_stat,
            speed: poke.stats[5].base_stat 
        }
    }   


    const getPokemon = async (url = URL_DEFAULT) =>{
             const response = await fetch(url)
             const listaPoke = await response.json()
             const { next, results } = listaPoke

         
             const newPokemones = await Promise.all(
                results.map((pokemon) => fetchPokemons(pokemon.url))
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

    const searchPokemon = async (buscar) =>{
        const url = `${URL_SEARCH}${buscar.toLocaleLowerCase()}`
        return await fetchPokemons(url)
    }

   


    useEffect(() =>{
        
        obtenerPokemones()
     },[])
     return{pokeName, masPokemons, verMas, searchPokemon,}
}
export default usePokemons