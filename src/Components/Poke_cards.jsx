import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {

    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)

    const statsStyle = `text-${color} p-2 capitalize font-bold bg-black/70 rounded-lg`

    const idNumber = id.toString().padStart(3, '0')
    
    
 
   
    return(
       
        <div
        
         className={` bg-${color} rounded-xl flex-col mt-20 shadow-md shadow-zinc-500 xl:hover:scale-105 transition-all ease-in-out duration-300`}>
            <div className='p-3'>
                
                    <div className="">
                                     
                        <div className="relative">

                                <div className='static w-full h-full'>
                                    <h1 className="text-neutral-950/20 w-full h-full font-Poppins font-extrabold text-9xl mt-2 xl:text-9xl text-center">#{idNumber}</h1>  
                                </div>

                                <div className='flex justify-center align-top w-72 h-52 m-auto'>
                                    <img className="hover:brightness-125 transition-all w-72 h-72 absolute top-14" src={img} alt={id}></img>
                                </div>

                                <div className='flex justify-center align-middle'>
                                   <h1 className="text-neutral-950/80 font-extrabold text-center capitalize text-6xl xl:text-6xl">{name}</h1> 
                                </div>
                                 
                                                                           
                        </div>   
                             
                     </div>

            <div className="text- grid grid-rows-auto gap-8 mt-8">

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