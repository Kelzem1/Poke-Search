import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {

    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)

    const statsStyle = `text-${color} p-2 capitalize font-bold bg-black/70 rounded-lg`

    
    
 
   
    return(
       
        <div className={`bg-${color} rounded-md flex-col m-3 shadow-[inset_80px_8px_800px_#46464620]`}>
            <div className='w-full m-auto]'>
                
                    <div className="">
                                     
                        <div className="relative">

                                <div className=''>
                                    <h1 className="text-neutral-950/10 p-2 font-Poppins font-extrabold text-7xl xl:text-9xl text-center">#{id}</h1>  
                                </div>

                                <div className='flex justify-center align-top w-72 h-44 m-auto'>
                                    <img className="hover:brightness-125 transition-all w-44 h-44 absolute top-20" src={img} alt={id}></img>
                                </div>

                                <div className='flex justify-center align-middle'>
                                   <h1 className="text-neutral-950/80 font-extrabold text-center capitalize text-4xl xl:text-5xl">{name}</h1> 
                                </div>
                                 
                                                                           
                        </div>   
                             
                     </div>

            <div className="grid grid-rows gap-3 p-2">

                <div className='text-md w-4/5 font-bold gap-3 m-auto object-cover align-middle flex justify-center text-center'>

                            <div className='flex-col'>
                            <h2  className={statsStyle}> Type:<br />{tipo}</h2>
                            </div>
                            <div className='flex-col'>
                                <h2 className={statsStyle}>Ability:<br />{abilities}</h2>
                            </div>
                            <div className='flex-col '>
                                <h2  className={statsStyle}>Height:<br /> {AltuReal} mtrs</h2>
                            </div>
                            <div className='flex-col '>
                                <h2 className={statsStyle}>Weight:<br /> {PesoReal} Kgs</h2>
                            </div>
                </div>

                <div className='flex-col font-bold text-md w-full h-full flex justify-center m-auto'>
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