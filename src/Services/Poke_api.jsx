
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";

const PokeApi = () =>{

    const {pokeName} = usePokemons([])

    return(
  
            <> 
                 {pokeName.map(pokemon =><PokeCard key={pokemon.id} {...pokemon} color={pokemon.species.color} />)}
            </>
                
            
        
        
    )
}

export default PokeApi