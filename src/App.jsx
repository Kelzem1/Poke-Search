
import './App.css'
import ShowPokes from './Services/ShowPokes'
import Header from './Components/Header'

function App() {
  
  return (
    <main className='bg-neutral-200'>
    <Header />
    <div className='xl:m-16 md:m-12 m-6 grid-rows-2 lg:grid-cols-3 xl:grid xl:grid-cols-4 md:grid md:grid-cols-2'>
    <ShowPokes />
    </div>
    
    </main>
  )
}

export default App
