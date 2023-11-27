const PokeCard = ({id, img, name, type, height, weight, abilities}) =>{
    return(
        <div className="Card-container bg-green-600 w-full h-full rounded-sm">
            <div className="">
                <span>{id}</span>
                <img src={img} alt={id}></img>
                <h1>{name}</h1>
                <p>{type}</p>
            </div>
            <div>
                <span>{height}</span>
                <span>{weight}</span>
                <span>{abilities}</span>
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