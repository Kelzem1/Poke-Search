import { useEffect, useState } from "react"

const SearchPoke = () =>{
    const [search, setSearch] = useState()
    useEffect(() =>{
        const usePokemon = async () =>{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?')
            const bicho = await response.json()
            const { results } = listaPo
        }
    })



    return{
        bichoName : results.name
    }

    
}
export default SearchPoke