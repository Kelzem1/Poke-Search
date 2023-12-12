const Search = () =>{


    const placeHolder = 'nombre, id, type.'
    return(
        <div className="flex justify-center align-middle bg-black p-5">
            <input className="bg-slate-900 opacity-80 w-3/6 p-4 h-12 rounded-md text-yellow-400 capitalize hover:opacity-100 transition-all" placeholder={placeHolder}></input>
        </div>
    )
}

export default Search