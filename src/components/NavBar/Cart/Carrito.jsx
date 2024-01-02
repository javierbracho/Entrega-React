import React, { useContext} from 'react'
import { CartContext } from '../../../Context/CartContext'
import Button from 'react-bootstrap/Button';
import FormularioDeCheckout from '../../Checkout/Checkout';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito, eliminarProducto,formatearPrecio} =useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }



  return (
    <div className='carrito'>

        <div className='carrito-titulo'>
            <h1>CARRITO</h1>
        </div>



        <div className='carrito-checkout'>
            <div className='items-carrito'>
                <div className='items-carrito-titulos'>
                    <div className='item-carrito-producto'>
                        <h5>Productos</h5>
                    </div>
                    <div className='items-carrito-titulos-separacion'>
                        <h5>Precio</h5>
                        <h5>Cantidad</h5>
                        <h5>Precio Total</h5>
                    </div>
                </div>
                {
                carrito.map((product) => (
                    <div className='items-carrito-individual' key={product.id}>
                        <div>
                            <Button className='eliminar-item' variant="danger" onClick={() => eliminarProducto(product.id)} >
                                <p>x</p>
                            </Button>
                        </div>
                        
                        <div>
                            <img src={`/${product.img}`} className="carrito-card-img" alt={product.modelo} />
                        </div>
                        <div className='product-modelo'>
                            <p> {product.modelo} </p>
                        </div>
                        <div className='product-precio'>
                            <p> {formatearPrecio(product.precio)} </p>                        
                        </div>
                        <div className='product-cantidad'>
                            <p> {product.cantidad} </p>
                        </div>
                        <div className='product-preciototal'>
                        <p> {formatearPrecio(product.precio)} </p>                        
                        </div>
                    </div>
                ))
                }  
                <div className='boton-vaciar'>
                    <Button variant="danger" onClick={handleVaciar}>Vaciar</Button>
                </div>
            </div>
            <div className='formulario-checkout'>
                <FormularioDeCheckout/>
            </div>
        </div>    
    </div>
  )
}

export default Carrito