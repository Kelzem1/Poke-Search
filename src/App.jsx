import Header from './Components/Header'
import './App.css'
import PokeApi from './Services/Poke_api'
import Search from './Components/Search'
import PokeCard from './Components/Poke_cards'

function App() {

  return (
    <>
    <Header />
    <h1 className='font-bold'>PokeSearch</h1>
   
    <Search />
    <PokeCard />
    
    <PokeApi />

    </>
  )
}

export default App
