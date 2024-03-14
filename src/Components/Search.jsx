

const Search = ({buscar, setBusq, buscarPoke}) =>{

    return(
        <form className="flex-col justify-center w-full align-middle mt-8 drop-shadow-xl shadow-slate-200"
            onSubmit={buscarPoke}>
            <input
            type="text"
            placeholder="Name, Id..."
            value={buscar}
            onChange={(e) =>setBusq(e.target.value)}

            className={`bg-stone-200 flex m-auto w-56 xl:w-[12%] border-[2px] rounded-t-full borber-b-4 font-Poppins text-xl text-center border-black h-28 text-black-900 capitalize focus:border-black focus:rounded-full focus:w-80 xl:focus:w-98 transition-all focus:decoration-transparent shadow-inner-xl shadow-neutral-200 focus:outline-none`}></input>


             <button className={`bg-red-500 flex justify-center align-middle m-auto w-56 h-28 xl:w-[12%] border-[2px] rounded-b-full font-Poppins text-2xl  border-black text-black capitalize focus:border-white transition-all focus:decoration-transparent shadow-md `} type="submit"><span className="m-auto">Search</span></button>
        </form>
    )
}

export default Search