const Search = () =>{


    const placeHolder = 'name, id, type.'
    return(
        <div className="flex justify-center h-24 align-middle mt-12">
            <input className={`bg-white-700/20 bg-opacity-30 border-4 rounded-full font-Mulish  border-t-ballColor border-r-ballColor border-b-stone-200 border-l-stone-200 w-2/6 p-2 h-14 text-black-900 capitalize focus:border-ballColor focus:w-5/6 transition-all focus:decoration-transparent shadow-md shadow-neutral-400 focus:outline-none`} placeholder={placeHolder}></input>
        </div>
    )
}

export default Search