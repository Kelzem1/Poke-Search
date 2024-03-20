import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {
    
    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)

 
   
    return(
       
        <div className={`bg-${color} flex min-w-80 w-[22em] xl:w-[42em] md:w-[25em] justify-center h-full align-middle m-auto rounded-xl`}>
                     
                <div className="flex justify-center w-full align-middle h-20 gap-2">

                                <div className='w-30 justify-center m-auto'>
                                        <h1 className="xl:text-6xl text-[2em] flex m-2 font-Poppins">#{id}</h1>  
                                </div>

                                <div className='w-20 flex justify-center align-middle'>
                                    <img className="drop-shadow-2xl shadow-slate-400 p-2 w-full h-20" src={img} alt={id}></img>
                                </div>
                             

                                <div className='flex w-20 justify-center align-middle m-auto'>
                                   <h1 className="text-neutral-950/80 end-1 xl:w-72 xl:h-30 font-extrabold text-left xl:p-2 capitalize md:text-2xl xl:text-4xl text-lg">{name}</h1>
                                </div>

                                 <div className='flex w-30 justify-end m-auto align-middle rounded-r-full'>
                            <h2  className={`capitalize justify-end rounded-r-lg w-20 bg-black text-${color} p-4`}><br/> {tipo}</h2>     
                                     </div>
                                             
                        </div>   
                             

                
               
                

        </div>
    
       
    )
}

export default PokeCard