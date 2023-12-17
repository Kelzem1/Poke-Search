
import './App.css'
import PokeApi from './Services/Poke_api'
import Search from './Components/Search'
import Header from './Components/Header'
import SearchPoke from './Services/SearchPoke'

function App() {
  
  return (
    <>
    <Header />
    <PokeApi />
    <SearchPoke />

    </>
  )
}

export default App
