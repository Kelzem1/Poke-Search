import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'

const PokeApi = () =>{

    const pokeData = {}
    const [post, setPost] = useState(null)
    useEffect(() =>{
        axios.get(apiUrl).then((response) =>{
            setPost(response.data)
            console.log(response.data)
            response.data = pokeData
        })
        
    }, [''])
    if (!post) return null
    return(
        <div>
        </div>
        
    )
}

export default PokeApi