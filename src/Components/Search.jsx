

const Search = ({buscar, setBusq, buscarPoke}) =>{

    return(
        <form className="flex-col justify-center w-full align-middle mt-8"
            onSubmit={buscarPoke}>
            <input
            type="text"
            placeholder="Name, Id..."
            value={buscar}
            onChange={(e) =>setBusq(e.target.value)}

            className={`bg-stone-200 flex m-auto w-56 xl:w-[12%] pl-10 border-[3px] rounded-t-full font-Mulish  border-black h-28 text-black-900 capitalize focus:border-black focus:rounded-full focus:w-80 xl:focus:w-98 transition-all focus:decoration-transparent shadow-xl shadow-neutral-700 focus:outline-none`}></input>


             <button className={`bg-red-500 flex m-auto w-56 h-28 xl:w-[12%] border-[3px] rounded-b-full font-Mulish  border-black p-8 pl-10 xl:p-7 xl:pl-[62px] text-black capitalize focus:border-white transition-all focus:decoration-transparent shadow-md shadow-neutral-200  content-center justify-items-center text-center text-xl font-extrabold`} type="submit">Search</button>
        </form>
    )
}

export default Search