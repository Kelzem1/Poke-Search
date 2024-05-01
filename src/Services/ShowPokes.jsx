
import PokeCard from "../Components/Poke_cards";
import usePokemons from "../Hooks/usePokemons";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../Components/Search";
import { useState } from "react";
import PokeList from "../Components/Modal";

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

    const [show, setShow] = useState({show: false, pokemon: {}})
    const showPoke = (pokemon) => setShow({show: true, pokemon})
    const notShowPoke = () => setShow({show: false, pokemon:{}})
  

    return( 
            <div className="flex flex-col justify-center m-auto">
            <PokeList {...show} cerrar={notShowPoke} />
            <Search buscar={buscar} setBusq={setBusq} buscarPoke={buscarPoke}/>
            <section className="">
            {pokeEncontrado 
            ?(  <div className="h-full my-10 flex align-middle justify-center">
                <PokeCard {...pokeEncontrado}/>
                </div>
                ) :(
            <InfiniteScroll
            className="grid grid-cols-5 xl:grid-cols-6 gap-2 m-auto my-10"
            dataLength={pokeName.length}
            next={masPokemons}
            hasMore={verMas}
            loader={<h3>Loading...</h3>}
            endMessage={<h3>No more Pokemons</h3>}
            >       
                {pokeName.map(pokemon =><PokeCard key={pokemon.name} {...pokemon} showPoke={()=> showPoke(pokemon)} />)}
            </InfiniteScroll> 
            )   
            }
         </section>
            </div>
           
        
    )
}

export default ShowPokes