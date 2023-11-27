const PokeCard = ({title, id, img, name, tipo, height, weight, abilities, hp, attack, defense, specialAttack, specialDefense, speed}) =>{
    return(
        <div className="flex-col justify-center align-middle bg-green-600 opacity-90 w-72 h-full rounded-sm">
            <div className="flex-col m-10 justify-center align-middle">
                <span>#{id}</span>
                <img className="w-76 h-16 m-auto flex justify-center align-middle" src={img} alt={id} width={100} height={100}></img>
                <h1 className="font-bold pt-4 capitalize flex justify-center align-middle">{name}</h1>
                <span className="black">Type: {tipo}</span>
            </div>

            <div className="flex-col flex-nowrap">
                <span className="p-1">Height: {height}</span>
                <span className="p-1">Weight: {weight}</span>
                <span className="p-1">Ability: {abilities}</span>
            </div>

            <div>
                <h1>
                    {title}
                </h1>
                <span>{hp}</span>
                <span>{attack}</span>
                <span>{defense}</span>
                <span>{specialAttack}</span>
                <span>{specialDefense}</span>
                <span>{speed}</span>

            </div>

        </div>
    )
}

export default PokeCard