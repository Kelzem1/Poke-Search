import { useState } from 'react'
import './App.css'
import PokeApi from './Services/Poke_api'
import Search from './Components/Search'


function App() {
  
  return (
    <>
    <Search />
    <PokeApi />

    </>
  )
}

export default App
