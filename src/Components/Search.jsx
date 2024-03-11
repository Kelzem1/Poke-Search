

const Search = ({buscar, setBusq, buscarPoke}) =>{

    return(
        <form className="flex justify-center h-12 align-middle m-10"
            onSubmit={buscarPoke}>
            <input
            type="text"
            placeholder="Name, Id..."
            value={buscar}
            onChange={(e) =>setBusq(e.target.value)}

            className={`bg-red-500 w-5/6 pl-5 xl:w-72 border-4 rounded-l-full font-Mulish  border-t-black border-r-black border-b-stone-900 border-l-black p-2 h-14 text-black-900 capitalize focus:border-black focus:w-96 transition-all focus:decoration-transparent shadow-md shadow-neutral-400 focus:outline-none`}></input>


             <button className={`bg-white font-bold  border-4 rounded-r-full font-Mulish  border-t-black border-r-black border-b-black border-l-black p-2 h-14 text-black-900 capitalize focus:border-ballColor transition-all focus:decoration-transparent shadow-md shadow-neutral-400 focus:outline-none`} type="submit">Buscar</button>
        </form>
    )
}

export default Search