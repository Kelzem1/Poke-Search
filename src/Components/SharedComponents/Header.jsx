
import Search from "./Search"

const Header = () =>{
    return(
        <div className="flex flex-col w-full">
            <header className="bg-sky-800 border-b-2 w-full border-black py-3 px-6 flex">
                <Search />
            </header>
        </div>
    )
}

export default Header