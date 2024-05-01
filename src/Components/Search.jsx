

const Search = ({buscar, setBusq, buscarPoke}) =>{

    return(
        <form className="flex flex-row w-full bg-sky-800 shrink-0 h-screen justify-center drop-shadow-xl shadow-slate-200"
            onSubmit={buscarPoke}>
            <input
            type="text"
            placeholder="Name, Id..."
            value={buscar}
            onChange={(e) =>setBusq(e.target.value)}
            className="py-3 px-4 my-auto w-96 border-sky-100 rounded text-sm max-w-2xl focus:border-blue-900 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-black dark:border-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
            </input>
            <div className="flex-center my-auto mx-2 cursor-pointer">
               <img src="/assets/game.png" alt="pokeball" width={44} height={40}></img> 
            </div>
            

             
        </form>
    )
}

export default Search