
import './App.css'
import PokeApi from './Services/Poke_api'
import Header from './Components/Header'
import PokeCard from './Components/Poke_cards'
import Card_container from './Components/Card_container'

function App() {
  
  return (
    <>
    <Header />
    <PokeApi />
    <Card_container />
    </>
  )
}

export default App
