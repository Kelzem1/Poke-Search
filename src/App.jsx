
import './App.css'
import Header from './Components/Header'
import ShowPokes from './Services/ShowPokes'

function App() {
  
  return (
    <main className='bg-black flex m-auto justify-center'>
    <Header />
    <ShowPokes />
    </main>
  )
}

export default App
