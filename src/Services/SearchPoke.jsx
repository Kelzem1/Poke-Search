import axios from "axios"
import { useEffect, useState } from "react"

const pokeBusc = 'Pikachu'
const apiBusqueda = 'https://pokeapi.co/api/v2/pokemon/'

const SearchPoke = () =>{
    const [search, setSearch] = useState([])
    useEffect(() =>{
    const buscaApi = async () =>{
        const apiPoke = await axios.get(`${apiBusqueda}/${pokeBusc}`)

        setSearch(await (Promise.all(apiPoke.results.name)))
        console.log(apiPoke)
    }

    buscaApi()
    
}, [])
return(
    <h1>Test</h1>
)
}

