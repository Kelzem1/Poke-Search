import '../App.css'

const PokeCard = (
    {id, img, name, tipo, color, showPoke }
    ) => {
    
   

 
   
    return(
       
        <div onClick={showPoke} className={`bg-${color} flex cursor-pointer min-w-80 w-[24em] xl:w-[44em] md:w-[30em] justify-center align-middle m-auto rounded-xl`}>
                     
                <div className="flex justify-center w-full align-middle xl:h-30 h-20 gap-2" >

                                <div className='w-30 justify-left m-2'>
                                        <h1 className="xl:text-6xl text-[2em] flex m-2 font-Poppins">#{id}</h1>  
                                </div>

                                <div className='w-full flex justify-center align-middle'>
                                    <img className="drop-shadow-2xl shadow-slate-400 p-2 w-20 h-20" src={img} alt={id}></img>
                                </div>
                             

                                <div className='flex xl:w-full w-full justify-center align-middle m-auto'>
                                   <h1 className="text-neutral-950/80 p-1 w-20 xl:w-72 xl:h-30 font-extrabold text-left xl:p-2 capitalize md:text-xl xl:text-4xl text-lg">{name}</h1>
                                </div>

                                 <div className='flex xl:m-2 xl:w-full w-20 m-1 justify-center align-middle'>
                                <h2  className={` flex justify-center align-middle m-auto capitalize rounded-md xl:w-14 h-12 w-full p-1 bg-stone-900/50 text-${color} p-4`}> {tipo}</h2>   
                                     </div>
                                             
                </div>   
                             

                
               
                

        </div>
    
       
    )
}

export default PokeCard