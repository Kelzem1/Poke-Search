
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../Components/Search";
import { useState } from "react";
import PokeList from "../Components/PokeList";

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
            <div className="h-full">
            <Search buscar={buscar} setBusq={setBusq} buscarPoke={buscarPoke}/>
            <section className="h-full">
            {pokeEncontrado 
            ?(  <div className="grid grid-cols1 gap-3 mt-10">
                <PokeCard {...pokeEncontrado}/>
                </div>
                ) :(
                <InfiniteScroll
            className="grid grid-cols1 gap-3 mt-20"
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
            </div>
           
        
    )
}

export default ShowPokes