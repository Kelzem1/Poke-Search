import axios from "axios"
import { useEffect, useState } from "react"

const pokeBusc = 'Pikachu'
const apiBusqueda = 'https://pokeapi.co/api/v2/pokemon/'

const SearchPoke = () =>{

    const [search, setSearch] = useState([])


    useEffect(() => {
    const buscaApi = async () => {

        const apiPoke = await axios.get(`${apiBusqueda}/${pokeBusc}`)

        setSearch(apiPoke.data)
        console.log(search)
    }

    buscaApi()
    
}, [])
return(
    <h1>Test</h1>
)
}
export default SearchPoke

