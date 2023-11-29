

const PokeCard = ({title, id, img, name, tipo, height, weight, abilities, hp, attack, defense, specialAttack, specialDefense, speed,}) =>{
    return(
        <div className="justify-center align-middle bg-black w-full h-96 rounded backdrop-blur-md backdrop-filter bg-opacity-70 border-amber-300 border-2">
            <div className="m-1 flex-col justify-center align-middle}">
                <span className="text-amber-500">#{id}</span>
                    <div className="shadow-xl shadow-sky-900 flex justify-center align-middle m-auto w-28 h-28 bg-teal-900 rounded-full opacity-80 hover:opacity-100">
                        <img className="w-16 transition-all hover:w-48" src={img} alt={id} width={200} height={200}></img>
                    </div>
                
                <h1 className=" text-yellow-100 font-extrabold pt-4 capitalize flex justify-center align-middle">{name}</h1>
                <span className="text-yellow-100 capitalize p-3 font-bold">Type: {tipo}</span>
            </div>

            <div className="text-yellow-50 p-3 grid">
                <span className="p-1">Height: {height}</span>
                <span className="p-1">Weight: {weight}</span>
                <span className="p-1 capitalize">Ability: {abilities}</span>
            </div>

            <div>
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