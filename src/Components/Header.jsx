import ResetButton from "./ResetButton"
import Search from "./Search"

const Header = () =>{
    return(
        <div>
            <header className="bg-sky-800 border-b-2 border-black py-3 px-6 flex">
                <h1 className="font-bold px-2 py-4">PokeSearch</h1>
                <Search />
            </header>
        </div>
    )
}

export default Header