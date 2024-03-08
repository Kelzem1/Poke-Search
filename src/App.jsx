
import './App.css'
import PokeApi from './Services/Poke_api'
import Header from './Components/Header'
import PokeCard from './Components/Poke_cards'

function App() {
  
  return (
    <main className='bg-stone-200'>
    <Header />
    <div className='grid-rows-2 xl:grid xl:grid-cols-4 md:grid md:grid-cols-2'>
    <PokeApi />
    </div>
    
    </main>
  )
}

export default App
