import Search from "./Search"

const Header = () =>{
    return(
        <div className="bg-gradient-to-b from-black to-neutral-800 text-ballColor font-bold h-96 flex justify-center items-center pt-6 m-auto">
        <div className=" flex-col justify-center align-middle">
            <h1 className="font-bold text-center text-7xl font-Poppins">PokeSearch</h1>
             <Search />
        </div>
        
        </div>
    )
}
export default Header