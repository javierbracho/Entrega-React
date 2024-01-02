import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const { agregarAlCarrito, carrito } = useContext(CartContext);
  const stockEventual = item.stock;
  
  const productoEnCarrito = carrito.find(producto => producto.id === item.id);

  
 

  const cantidadEnCarrito = productoEnCarrito
    ? productoEnCarrito.cantidad + cantidad - 1
    : 0;

  const agregar = () => {
    agregarAlCarrito(item, cantidad);
    setAddedToCart(true);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div>
      <div className='item-count'>
        <Button onClick={handleRestar} variant="dark">-</Button>
        <p>{cantidad}</p>
        <Button onClick={handleSumar} variant="dark">+</Button>
        <Button disabled={cantidadEnCarrito >= stockEventual || stockEventual <= 0} onClick={agregar} variant="dark">
          Agregar al carrito
        </Button>
        {addedToCart && (
          <Link to="/Carrito">
            <Button variant="dark">Finalizar Compra</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemCount;




