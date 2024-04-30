import '../App.css'

const PokeCard = (
    {id, img, name, tipo, color, showPoke }
    ) => {
    
   
    return(
       
        <div onClick={showPoke} className={`bg-${color} flex cursor-pointer justify-center align-middle m-auto`}>
                     
                <div className="flex justify-center align-middle h-30" >
       
                   <img src={img} alt='img' className='h-36 w-36'></img>
                                                  
                </div>  

        </div>
    
       
    )
}

export default PokeCard