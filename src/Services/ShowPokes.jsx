
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";

const ShowPokes = () =>{

    const {pokeName, masPokemons} = usePokemons([])

    return(
  
            <> 
                 {pokeName.map(pokemon =><PokeCard key={pokemon.name} {...pokemon} color={pokemon.species.color} />)}
                 <button className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-100 text-teal-800 hover:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-900 dark:text-teal-500 dark:hover:text-teal-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 m-auto" onClick={masPokemons}>Show More</button>
            </>
                
            
        
        
    )
}

export default ShowPokes