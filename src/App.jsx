
import './App.css'
import ShowPokes from './Services/ShowPokes'
import Header from './Components/Header'

function App() {
  
  return (
    <main className='bg-slate-600 h-full'>
    <Header />
    <ShowPokes />
    </main>
  )
}

export default App
