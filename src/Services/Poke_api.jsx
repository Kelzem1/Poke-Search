import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";




const PokeApi = () =>{

    
    const [post, setPost] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                setPost(response.data.results)
                console.log(post)
            }catch (error) {
                console.error('No va esto illo', error)
            }
        }

      

        fetchData()
    }, [])
    return(
        <div>
            <p>{post[7].name}</p>

        </div>
        
    )
}

export default PokeApi