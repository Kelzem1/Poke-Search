const Search = () =>{


    const placeHolder = 'name, id, type.'
    return(
        <div className="flex justify-center align-middle bg-black p-2">
            <input className="bg-indigo-700/20 bg-opacity-30 border-2 border-yellow-500 w-5/6 p-4 h-12 rounded-md text-yellow-400 capitalize" placeholder={placeHolder}></input>
        </div>
    )
}

export default Search