import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './components/ItemContainer/Main'
import Item from './components/ItemContainer/Item'
import PromDiciembre from './components/ItemContainer/promDiciembre'
import ItemListFilter from './components/ItemContainer/ItemListFilter'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <PromDiciembre />

    <Routes>

    <Route path='/' element={<   Main /> } /> 
    <Route path='/Productos' element={<ItemListContainer /> } />
    <Route path='/Productos/Category/:id' element={<ItemListFilter /> } />

    <Route path='/Producto/:id' element={<Item />} /> 





    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
