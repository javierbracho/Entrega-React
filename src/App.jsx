import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { ItemContainer } from './components/ItemContainer/ItemContainer'

function App() {

  return (
    <>
    <NavBar />
    <ItemContainer saludo= "Bievenidos a nuestra Store muy pronto estaremos disponibles" />
    </>
  )
}

export default App
