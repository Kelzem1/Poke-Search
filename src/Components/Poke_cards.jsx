import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed }
    ) =>{

    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)
   
   
    return(
       
        <div 
         className={`justify-center h-full bg-${color} rounded-md shadow-md shadow-zinc-200`}>
            <div className={`w-full`}>
                
                    <div className="grid grid-cols-2 m-auto opacity-100 hover:opacity-100 transition-all p-2">

                        <div className='flex-col justify-center m-auto'>
                           <h1 className="text-amber-50 font-extrabold opacity-90 m-auto text-7xl mt-5 xl:text-9xl">#{id}</h1>
                            <h1 className=" text-yellow-100 font-bold m-auto capitalize text-4xl">{name}</h1> 
                        </div>
                        
                        
                        <img className="object-contain right-5 h-44 hover:brightness-125 flex m-auto justify-center transition-all w-46 xl:h-64 xl:p-3" src={img} alt={id}></img>
                        
                        
                    </div>
                
                
                
            </div>

            <div className="text-yellow-50 grid grid-cols-2 pb-6 m-auto mt-1">

                <div className='flex-col justify-center align-middle m-auto text-lg'>
                    <p className="text-yellow-100 capitalize font-bold">Type: 
                    {tipo}</p>

                    <p className="text-yellow-100 capitalize font-bold">Ability: {abilities}</p>
                    
                    <p className="text-yellow-100 capitalize font-bold">Height: {AltuReal} mtrs
                    </p>
                    <p className="text-yellow-100 capitalize font-bold">Weight: {PesoReal} Kgs
                    </p>
                    
                </div>


                <div className='flex-col justify-center align-middle m-auto'>
                    <h3>Hp: <progress value={hp} max={110} /></h3>
                    <h3>Attack:<progress value={attack} max={110} /></h3>
                    <h3>Defense: <progress value={defense} max={110} /></h3>
                    <h3>Special Attack: <progress value={specialAttack} max={110} /></h3>
                    <h3>Special Defense:<progress value={specialDefense} max={110} /></h3>
                    <h3>Speed: <progress value={speed} max={110} /></h3>
                    
                    
                    
                    
                    
                </div>
                
                
            </div>

        </div>
    )
}

export default PokeCard