
import './App.css'
import PokeApi from './Services/Poke_api'
import Header from './Components/Header'
import PokeCard from './Components/Poke_cards'

function App() {
  
  return (
    <>
    <Header />
    <PokeApi />
    </>
  )
}

export default App
