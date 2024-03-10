
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";
import InfiniteScroll from "react-infinite-scroll-component";

const ShowPokes = () =>{

    const {pokeName, masPokemons, verMas} = usePokemons([])

    return(
  
            <InfiniteScroll
            className="xl:m-16 md:m-12 m-6 grid-rows-2 lg:grid-cols-3 xl:grid xl:grid-cols-4 md:grid md:grid-cols-2"
            dataLength={pokeName.length}
            next={masPokemons}
            hasMore={verMas}
            loader={<h3>Loading...</h3>}
            endMessage={<h3>No more Pokemons</h3>}
            > 
                 {pokeName.map(pokemon =><PokeCard key={pokemon.name} {...pokemon} color={pokemon.species.color} />)}
            </InfiniteScroll>
                
            
        
        
    )
}

export default ShowPokes