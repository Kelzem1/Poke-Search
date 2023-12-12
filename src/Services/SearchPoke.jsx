import axios from "axios"
import { useEffect, useState } from "react"
import { URL_POKEMON } from "../urlApis/apisUrls"



const SearchPoke = () =>{

    const [search, setSearch] = useState([])
    console.log(search)

    useEffect(() => {
    const buscaApi = async () => {

        const apiPoke = await axios.get(`${URL_POKEMON}/{'Pikachu'}`)

        setSearch(apiPoke.data.results.name)
        
    }

    buscaApi()
    
}, [])

return(
    <h1>Test</h1>
)
}
export default SearchPoke

