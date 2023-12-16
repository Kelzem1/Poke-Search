import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {

    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)

    const statsStyle = `text-${color} p-2 capitalize font-bold bg-black/70 rounded-lg`
    
 
   
    return(
       
        <div
        
         className={`justify-center h-full bg-${color} rounded-xl shadow-md shadow-zinc-500 xl:hover:-translate-y-2 transition-all ease-in-out duration-300`}>
            <div className='p-3'>
                
                    <div className="grid grid-cols-2 content-center mb-8">
                                     
                        <div className='justify-center align-middle m-auto'>
                                    <h1 className="text-neutral-950 font-extrabold opacity-90 text-8xl mt-2 xl:text-9xl text-center">#{id}</h1>  
                                    <h1 className=" text-neutral-950 font-bold capitalize text-4xl p-1 xl:text-4xl ">{name}</h1> 
                                      
                        </div>   
                           <img className="hover:brightness-125 object-fit object-right flex m-auto justify-center transition-all w-48 h-48 xl:ml-5" src={img} alt={id}></img>
                     </div>

            <div className="text- grid grid-rows-auto gap-8">

                <div className='grid-cols-max gap-2 object-cover align-middle flex text-center'>

                            <div className='flex-col w-1/4 '>
                            <h2  className={statsStyle}> Type:<br />{tipo}</h2>
                            </div>
                            <div className='flex-col w-1/4 '>
                                <h2 className={statsStyle}>Ability:<br />{abilities}</h2>
                            </div>
                            <div className='flex-col w-1/4 '>
                                <h2  className={statsStyle}>Height:<br /> {AltuReal} mtrs</h2>
                            </div>
                            <div className='flex-col w-1/4 '>
                                <h2 className={statsStyle}>Weight:<br /> {PesoReal} Kgs</h2>
                            </div>
                </div>

                <div className='flex-col font-bold text-lg w-full h-full'>
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