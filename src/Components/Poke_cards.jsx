const PokeCard = ({title, id, img, name, tipo, height, weight, abilities, hp, attack, defense, specialAttack, specialDefense, speed}) =>{
    return(
        <div className="justify-center align-middle bg-card-black w-full h-full rounded">
            <div className="m-1 flex-col justify-center align-middle w-1/2}">
                <span className="text-amber-500">#{id}</span>
                    <div className="shadow-xl shadow-amber-900 flex justify-center align-middle m-auto w-28 h-28 bg-amber-500 rounded-full opacity-80 hover:opacity-100 ">
                        <img className="w-16 hover:w-48" src={img} alt={id} width={200} height={200}></img>
                    </div>
                
                <h1 className=" text-yellow-100 font-bold pt-4 capitalize flex justify-center align-middle">{name}</h1>
                <span className="text-yellow-100 capitalize">Type: {tipo}</span>
            </div>

            <div className="text-yellow-50 p-3">
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