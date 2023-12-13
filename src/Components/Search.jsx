const Search = () =>{


    const placeHolder = 'name, id, type.'
    return(
        <div className="flex justify-center align-middle bg-black p-5">
            <input className="bg-sky-950 bg-opacity-30 border-2 border-sky-900  w-4/6 p-4 h-12 rounded-md text-yellow-400 capitalize hover:opacity-100 transition-all" placeholder={placeHolder}></input>
        </div>
    )
}

export default Search