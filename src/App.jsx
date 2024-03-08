
import './App.css'
import PokeApi from './Services/Poke_api'
import Header from './Components/Header'
import PokeCard from './Components/Poke_cards'

function App() {
  
  return (
    <>
    <Header />
    <div className='bg-stone-100 grid-rows-3 xl:grid xl:grid-cols-3 xl:grid-rows-3 md:grid md:grid-cols-2'>
    <PokeApi />
    </div>
    
    </>
  )
}

export default App
