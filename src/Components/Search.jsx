

const Search = ({buscar, setBusq, buscarPoke}) =>{

    return(
        <form className="flex flex-col shrink-0 h-screen justify-center w-full drop-shadow-xl shadow-slate-200"
            onSubmit={buscarPoke}>
            <input
            type="text"
            placeholder="Name, Id..."
            value={buscar}
            onChange={(e) =>setBusq(e.target.value)}
            className="w-20"></input>


             <button className="w-20 bg-white" type="submit"><span className="m-auto">Search</span></button>
        </form>
    )
}

export default Search