import '../App.css'

const PokeCard = (
    {id, img, name, tipo, color, showPoke }
    ) => {
    
   
    return(
       
        <div onClick={showPoke} className={`bg-${color} rounded-lg flex cursor-pointer justify-center align-middle m-auto xl:mx-10`}>
                     
                <div className="flex justify-center align-middle h-30" >
       
                   <img src={img} alt='img' className='h-44 w-44'></img>
                                                  
                </div>  

        </div>
    
       
    )
}

export default PokeCard