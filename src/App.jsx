import { NavBar } from './components/NavBar/NavBar'
import './style/App.css'
import ItemListContainer from './components/ItemContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './components/ItemContainer/Main'
import Item from './components/ItemContainer/Item'
import PromDiciembre from './components/ItemContainer/promDiciembre'
import ItemListFilter from './components/ItemContainer/ItemListFilter'
import CartProvider from './Context/CartContext'
import Carrito from './components/NavBar/Cart/Carrito'
import ComprobanteCompra from './components/Checkout/ComprobanteCompra'
import NoEncontrado from './components/ItemContainer/NoEncontrado'
import QuienesSomos from './components/ItemContainer/QuienesSomos'
import Footer from './components/Footer/footer'

function App() {



  return (
    <>
      <CartProvider> 
        <BrowserRouter>
          <div className='app-container'>
            <div className='main-content'>
              <NavBar />
              <PromDiciembre />
              <Routes>
                <Route path='/' element={< Main/> } /> 
                <Route path='/Productos' element={<ItemListContainer /> } />
                <Route path='/Productos/Category/:id' element={<ItemListFilter /> } />
                <Route path='/Producto/:id' element={<Item />} /> 
                <Route path='/Carrito' element={<Carrito /> } />
                <Route path='/orden/:ordenId' element={<ComprobanteCompra />} />
                <Route path='/Quienessomos' element={<QuienesSomos />} />
                <Route path={'*'} element={ <NoEncontrado /> } />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
  
  
}

export default App
