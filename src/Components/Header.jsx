import Search from "./Search"

const Header = () =>{
    return(
        <div className="bg-gradient-to-b from-black to-neutral-950 text-ballColor w-full h-screen flex-col justify-center align-middle">
        <div className="h-1/2 grid place-content-center">
            <h1 className="font-bold text-center text-7xl">Pokeapp</h1>
        </div>
            
        <div>
           <Search /> 
        </div>
        
        </div>
    )
}
export default Header