
import './App.css'
import PokeApi from './Services/Poke_api'
import Header from './Components/Header'
import PokeCard from './Components/Poke_cards'
import Card_container from './Components/Card_container'

function App() {
  
  return (
    <>
    <Header />
    <div className='bg-neutral-800 xl:grid xl:grid-cols-3 md:grid md:grid-cols-2'>
    
    <PokeApi />
    </div>
    
    </>
  )
}

export default App
