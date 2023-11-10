import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'

const PokeApi = () =>{

    const [post, setPost] = useState(null)
    useEffect(() =>{
        axios.get(apiUrl).then((response) =>{
            setPost(response.data)
            console.log(post)
        })
    }, [''])
    if (!post) return null
    return(
        <div>
            <h1></h1>
            <p></p>
        </div>
    )
}

export default PokeApi