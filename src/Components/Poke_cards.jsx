import '../App.css'

const PokeCard = (
    {id, img, name, tipo, height, weight, abilities, color, hp, attack, defense, specialAttack, specialDefense, speed}
    ) => {
    
    const PesoReal = (weight / 10).toFixed(1)
    const AltuReal = (height / 10).toFixed(1)

 
   
    return(
       
        <div className={`bg-${color} flex w-[80%] justify-center h-30 align-middle m-auto rounded-xl`}>
                     
                <div className="flex justify-center w-full align-middle h-20 m-auto gap-10">

                                <div className='w-[20%] h-30 justify-center m-auto'>
                                        <h1 className="xl:text-6xl text-3xl flex m-auto font-Poppins">#{id}</h1>  
                                </div>

                                <div className='w-30%] h-30 flex justify-center align-middle'>
                                    <img className="drop-shadow-2xl shadow-slate-400 p-2 w-48 h-30" src={img} alt={id}></img>
                                </div>
                             

                                <div className='flex w-[50%] h-30 justify-center align-middle m-auto'>
                                   <h1 className="text-neutral-950/80 xl:w-96 h-30 font-extrabold text-left xl:p-4 capitalize md:text-4xl xl:text-4xl text-xl">{name}</h1>
                                </div>

                                 <div className='flex h-full w-[20%] justify-center m-auto align-middle rounded-r-full'>
                            <h2  className={`capitalize rounded-r-lg bg-black text-${color} p-4`}><br/> {tipo}</h2>     
                                     </div>
                                             
                        </div>   
                             

                
               
                

        </div>
    
       
    )
}

export default PokeCard