import axios from "axios";
import { list } from "postcss";
import { useEffect } from "react";
import { useState } from "react";




const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([])

    useEffect(() =>{
       const getPokemon = async () =>{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
            const listaPoke = await response.json()
            const { results } = listaPoke
            console.log(listaPoke)
            setPokeName(results)
       }
       getPokemon()
    }, [])
    
    return(
        <div>
            {pokeName.map(pokemon => <p>{pokemon.name}</p>)}
        </div>
        
    )
}

export default PokeApi