import '../App.css'

const PokeCard = ({id, img, name, tipo, height, weight, abilities,}) =>{

    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)
    return(
        <div className="justify-center align-middle bg-sky-950 w-full h-full rounded-md backdrop-blur-xl backdrop-filter bg-opacity-30 shadow-md shadow-zinc-900">
            <div className="w-full p-3">
                
                    <div className="grid grid-cols-2 m-auto opacity-80 hover:opacity-100 transition-all p-2">
                        <div>
                           <h1 className="text-amber-50 opacity-20 m-auto h-5/6 text-9xl mt-5">#{id}</h1>
                            <h1 className=" text-yellow-100 font-bold m-auto capitalize text-5xl">{name}</h1> 
                        </div>
                        
                        
                        <img className="object-contain flex h-full hover:brightness-125 transition-all" src={img} alt={id}></img>
                        
                        
                    </div>
                
                
                
            </div>

            <div className="text-yellow-50 p-1 m-auto ml-3 mt-3 flex-col">
            
                <p className="text-yellow-100 capitalize p-2 font-bold">Type: 
                {tipo}</p>

                <p className="text-yellow-100 capitalize p-2 font-bold">Ability: {abilities}</p>
                
                <p className="text-yellow-100 capitalize p-2 font-bold">Height: {AltuReal} mtrs
                 </p>
                <p className="text-yellow-100 capitalize p-2 font-bold">Weight: {PesoReal} Kgs
                 </p>
                
            </div>

        </div>
    )
}

export default PokeCard