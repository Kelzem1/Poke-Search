import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";




const PokeApi = () =>{

    
    const [pokeName, setPokeName] = useState([''])

    useEffect(() =>{
       axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
       .then(res => {setPokeName(res.data)})
       .catch(err => console.log(err))
    }, [])
    
    return(
        <div>
            {pokeName[2].name
        </div>
        
    )
}

export default PokeApi