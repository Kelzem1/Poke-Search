

const PokeCard = ({id, img, name, tipo, height, weight, abilities,}) =>{
    return(
        <div className="justify-center align-middle bg-sky-950 w-full h-96 rounded-md backdrop-blur-md backdrop-filter bg-opacity-30 shadow shadow-yellow-400">
            <div className="m-1 flex-col justify-center align-middle">
                <span className="text-amber-200 font-bold text-center p-5 text-3xl">#{id}</span>
                    <div className="shadow-xl shadow-slate-800 flex justify-center align-middle m-auto w-28 h-28 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full opacity-80 hover:opacity-100">
                        <img className="w-16 transition-all hover:w-48" src={img} alt={id} width={200} height={200}></img>
                    </div>
                
                <h1 className=" text-yellow-100 font-extrabold pt-4 capitalize flex justify-center align-middle">{name}</h1>
                <span className="text-yellow-100 capitalize p-3 font-bold">Type: {tipo}</span>
            </div>

            <div className="text-yellow-50 p-3 flex-col">
                <p className="p-2">Height: {height}</p>
                <p className="p-2">Weight: {weight}</p>
                <p className="p-2 capitalize">Ability: {abilities}</p>
            </div>

        </div>
    )
}

export default PokeCard