import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {

    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)
   
   
    return(
       
        <div
         className={`justify-center h-full bg-${color} rounded-md shadow-md shadow-zinc-200`}>
            <div className=''>
                
                    <div className="grid grid-cols-2">
                        <div className='justify-center align-middle m-auto'>
                                    <h1 className=" text-yellow-100 font-bold capitalize text-4xl p-1 xl:text-5xl ">{name}</h1> 
                                    <h1 className="text-yellow-100 font-extrabold opacity-50 text-9xl mt-5 xl:text-9xl text-center">#{id}</h1>     
                        </div>
                                    <img className="hover:brightness-125 flex m-auto justify-center transition-all w-64 h-64" src={img} alt={id}></img>
                                            
                     </div>

            <div className="text-slate-900 grid grid-rows-2">

                <div className='grid-cols-4 gap-5 align-middle m-auto flex text-center'>

                            <div className='flex-col w-1/4 '>
                            <h2 className="text-yellow-100 capitalize font-bold"> Type:<br />{tipo}</h2>
                            </div>
                            <div className='flex-col w-1/4 '>
                                <h2 className="text-yellow-100 capitalize font-bold">Ability:<br />{abilities}</h2>
                            </div>
                            <div className='flex-col w-1/4 '>
                                <h2 className="text-yellow-100 capitalize font-bold">Height:<br /> {AltuReal} mtrs</h2>
                            </div>
                            <div className='flex-col w-1/4 '>
                                <h2 className="text-yellow-100 capitalize font-bold">Weight:<br /> {PesoReal} Kgs</h2>
                         </div>
                </div>

                <div className='flex-col p-3 font-bold text-lg w-full h-full'>
                    <h3>Hp: <progress value={hp} max={110} /></h3>
                    <h3>Attack:<progress value={attack} max={110} /></h3>
                    <h3>Defense: <progress value={defense} max={110} /></h3>
                    <h3>Special Attack: <progress value={specialAttack} max={110} /></h3>
                    <h3>Special Defense:<progress value={specialDefense} max={110} /></h3>
                    <h3>Speed: <progress value={speed} max={110} /></h3>
                </div>
                
                
            </div>

        </div>
    </div>
    )
}

export default PokeCard