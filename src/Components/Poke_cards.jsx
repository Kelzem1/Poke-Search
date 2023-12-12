

const PokeCard = ({id, img, name, tipo, height, weight, abilities,}) =>{

    const PesoReal = (weight / 10).toFixed(1)

    return(
        <div className="justify-center align-middle bg-sky-950 w-full h-full rounded-md backdrop-blur-xl backdrop-filter bg-opacity-30 shadow-md shadow-zinc-900">
            <div className="">
                
                    <div className="grid grid-cols-2 m-auto opacity-80 hover:opacity-100 transition-all">
                        
                        <h1 className="text-amber-50 w-full h-full opacity-20 p-3 text-9xl">#{id}</h1>
                        
                        
                        <img className="object-contain flex" src={img} alt={id}></img>
                        
                        
                    </div>
                
                <h1 className=" text-yellow-100 font-extrabold pt-4 capitalize flex justify-center align-middle">{name}</h1>
                
            </div>

            <div className="text-yellow-50 p-3 flex-col">
            <span className="text-yellow-100 capitalize p-2 font-bold">Type: {tipo}</span>

                <p className="p-2 capitalize">Ability: {abilities}</p>
                
                <p className="p-2">Height:
                <progress value={height / 10} max={20} />
                 {height}
                 </p>
                <p className="p-2">Weight:
                <progress value={PesoReal} max={999.9}/>
                 {PesoReal}
                 </p>
                
            </div>

        </div>
    )
}

export default PokeCard