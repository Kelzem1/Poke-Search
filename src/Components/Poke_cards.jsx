const PokeCard = ({id, img, name, tipo, height, weight, abilities}) =>{
    return(
        <div className="flex-col bg-green-600 w-96 h-full rounded-sm">
            <div className="flex-col m-10">
                <span>{id}</span>
                <img src={img} alt={id}></img>
                <h1>{name}</h1>
                <span className="black">{tipo}</span>
            </div>

            <div className="flex-col p-2">
                <span className="p-1">{height}</span>
                <span className="p-1">{weight}</span>
                <span className="p-1">{abilities}</span>
            </div>

            <div>
                <h1>
                    Stats
                </h1>
                <span>Hp</span>
                <span>Attack</span>
                <span>Defense</span>
                <span>Special Attack</span>
                <span>Special Defense</span>
                <span>Speed</span>

            </div>

        </div>
    )
}

export default PokeCard