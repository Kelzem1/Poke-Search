

const Search = ({buscar, setBusq, buscarPoke}) =>{

    return(
        <form className="flex-col justify-center w-full align-middle mt-8 antialiased"
            onSubmit={buscarPoke}>
            <input
            type="text"
            placeholder="Name, Id..."
            value={buscar}
            onChange={(e) =>setBusq(e.target.value)}

            className={`bg-stone-200 flex m-auto w-56 xl:w-[12%] pl-5 border-[3px] rounded-t-full font-Mulish  border-black h-28 text-black-900 capitalize focus:border-black focus:rounded-full focus:w-72 xl:focus:w-98 transition-all focus:decoration-transparent shadow-md shadow-neutral-400 focus:outline-none`}></input>


             <button className={`bg-red-500 flex m-auto font-bold w-56 xl:w-[12%] border-[3px] rounded-b-full font-Mulish  border-black h-28 p-7 pl-[16%] xl:p-7 xl:pl-[68px] text-black capitalize focus:border-white transition-all focus:decoration-transparent shadow-md shadow-neutral-400 focus:outline-none`} type="submit">Search</button>
        </form>
    )
}

export default Search