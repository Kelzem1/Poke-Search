import Header from './Components/Header'
import './App.css'
import PokeApi from './Services/Poke_api'
import Search from './Components/Search'

function App() {

  return (
    <>
    <h1 className='font-bold'>PokeSearch</h1>
    <Header />
    <Search />
    
    
    <PokeApi />

    </>
  )
}

export default App
