import axios from "axios"
import { useEffect, useState } from "react"
import {URL_LIST_POKEMONS}  from "../urlApis/apisUrls"
import { URL_SPECIES } from "../urlApis/apisUrls"



const SearchPoke = ( { card }) =>{

    const [search, setSearch] = useState([])
    console.log(search)

    useEffect(() => {
    const buscaApi = async () => {

        const apiPoke = await axios.get(`${URL_LIST_POKEMONS}`)
        //console.log(url)
        

        setSearch(apiPoke.data.url)
        
    }

    buscaApi()
    
}, [])
    



return(
    <h1>Test</h1>
)
}
export default SearchPoke

