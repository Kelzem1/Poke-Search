const Search = ({pokemon}) =>{
    return(
        <div className="flex-col">
            <input className="" placeholder="Nombre"></input>
            {
                pokemon
            }
        </div>
    )
}

export default Search