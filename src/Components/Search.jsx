const Search = () =>{


    const placeHolder = 'nombre, id, type.'
    return(
        <div className="flex justify-center align-middle bg-black p-5">
            <input className="bg-slate-800 w-3/6 p-4 h-12 rounded-md text-yellow-400 capitalize" placeholder={placeHolder}></input>
        </div>
    )
}

export default Search