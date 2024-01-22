import Search from "./Search"

const Header = () =>{
    return(
        <div className="bg-gradient-to-b from-black to-neutral-950 text-ballColor font-bold h-screen flex justify-center items-center m-auto">
        <div className=" flex-col justify-center align-middle">
            <h1 className="font-bold text-center text-8xl font-Poppins">Pokeapp</h1>
             <Search />
        </div>
        
        </div>
    )
}
export default Header