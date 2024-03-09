
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";

const ShowPokes = () =>{

    const {pokeName, masPokemons} = usePokemons([])

    return(
  
            <> 
                 {pokeName.map(pokemon =><PokeCard key={pokemon.name} {...pokemon} color={pokemon.species.color} />)}
                 <button className="bg-stone-400 rounded-lg w-44 h-8 flex justify-center border-2 shadow-inner" onClick={masPokemons}>Show More</button>
            </>
                
            
        
        
    )
}

export default ShowPokes