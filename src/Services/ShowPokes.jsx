
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../Components/Search";
import { useState } from "react";
import FindedPoke from "../Components/FindedPoke";

const ShowPokes = () =>{

    const {pokeName, masPokemons, verMas, searchPokemon,} = usePokemons([])
    const [buscar, setBusq] = useState('')
    const [pokeEncontrado, setPokeEncontrado] = useState(null)
    const buscarPoke = async (e) =>{
        e.preventDefault() 
        if (!buscar) return

        const pokeS = await searchPokemon(buscar)
        if (pokeS) {
            setPokeEncontrado(pokeS)
        }else {
            setPokeEncontrado(null)
        }
        console.log(pokeS)
    }
  

    return(
            <section className="h-screen">
            <Search buscar={buscar} setBusq={setBusq} buscarPoke={buscarPoke}/>
            {pokeEncontrado ? (<PokeCard {...pokeEncontrado}/>) :(
                <InfiniteScroll
            className="xl:m-20 md:m-12  m-6 grid-rows-2 lg:grid-cols-3 xl:grid xl:grid-cols-4 md:grid md:grid-cols-2"
            dataLength={pokeName.length}
            next={masPokemons}
            hasMore={verMas}
            loader={<h3>Loading...</h3>}
            endMessage={<h3>No more Pokemons</h3>}
            > 
                 {pokeName.map(pokemon =><PokeCard key={pokemon.name} {...pokemon} />)}
            </InfiniteScroll> 
            )
            
           
            
                
            }
         </section>
        
    )
}

export default ShowPokes