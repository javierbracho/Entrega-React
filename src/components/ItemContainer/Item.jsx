import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { pedirProductoById } from '../pedirProductos/pedirProductosById';
import GrowExample from '../Helpers/spinner';
import ItemCount from './ItemCount';
import { CartContext } from '../../Context/CartContext';

const Item = () => {
  
  const {formatearPrecio}=useContext(CartContext)

  const { id } = useParams();
  const [producto, setProducto] = useState(null);


  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const productoObtenido = await pedirProductoById(id);
        setProducto(productoObtenido);
      } catch (error) {
        console.error("Error al obtener el producto", error);
      }
    };

    obtenerProducto();
  }, [id]);

  if (!producto) {
    return  <div className='Animacion'>
              <GrowExample />
            </div>;

  }



  return (
    <div className='Items'>
       <div className='Producto-img'>
    <img src={`/${producto.img}`} className="Producto-detalle-img" alt={producto.modelo}/>
      </div>

      <div className='Producto-detalle'>
        <h2>{producto.marca} {producto.modelo}</h2>
        <p>{producto.descripcion}</p>
        <p> Stock disponible: {producto.stock} </p>
        <p>Precio {formatearPrecio(producto.precio)}</p>
        <ItemCount item= {producto}/>
      </div>

    </div>
    
  );
};

export default Item;
