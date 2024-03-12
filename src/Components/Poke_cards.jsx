import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {
    
    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)

    const statsStyle = `text-${color} capitalize p-3 bg-black/80 rounded-md`
 
   
    return(
       
        <div className={`bg-${color} rounded-md shadow-md shadow-black flex-col m-6 p-5  border-2 border-stone-950 hover:shadow-lg hover:shadow-black transition-all duration-150 `}>
            <div className='w-full m-auto'>
                
                    <div className="">
                                     
                        <div className="flex-col">

                                <div className='h-full w-full'>
                                    <h1 className="text-neutral-950/10 font-Poppins font-extrabold xl:text-8xl text-7xl text-center h-full w-full">#{id}</h1>  
                                </div>

                                <div className='flex justify-center w-full h-full m-auto'>
                                    <img className="hover:drop-shadow-2xl  transition-all content-center w-48 h-48" src={img} alt={id}></img>
                                </div>

                                <div className='flex justify-center align-middle m-2'>
                                   <h1 className="text-neutral-950/80 font-extrabold text-center capitalize text-3xl md:text-3xl xl:text-4xl">{name}</h1> 
                                </div>
                                 
                                                                           
                        </div>   
                             
                     </div>

            <div className="grid grid-row gap-3 p-1">

                <div className=' gap-1 grid grid-cols-4 m-auto align-middle justify-center text-center'>

                            <div className=''>
                            <h2  className={statsStyle}> Type:<br />{tipo}</h2>
                            </div>
                            <div className=''>
                                <h2 className={statsStyle}>Ability:<br />{abilities}</h2>
                            </div>
                            <div className=''>
                                <h2  className={statsStyle}>Height:<br /> {AltuReal} mtrs</h2>
                            </div>
                            <div className=''>
                                <h2 className={statsStyle}>Weight:<br /> {PesoReal} Kgs</h2>
                            </div>
                </div>

                <div className='flex-col font-bold text-md w-full h-full flex justify-center m-auto'>
                    <h3>Hp: {hp} <progress value={hp} max={110} /></h3>
                    <h3>Attack: {attack}<progress value={attack} max={110} /></h3>
                    <h3>Defense: {defense}<progress value={defense} max={110} /></h3>
                    <h3>Special Attack: {specialAttack}<progress value={specialAttack} max={110} /></h3>
                    <h3>Special Defense: {specialDefense}<progress value={specialDefense} max={110} /></h3>
                    <h3>Speed: {speed}<progress value={speed} max={110} /></h3>
                </div>
                
                
            </div>

        </div>
    
       </div>
    )
}

export default PokeCard