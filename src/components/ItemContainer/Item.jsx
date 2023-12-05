import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pedirProductoById } from '../pedirProductos/pedirProductosById';
import LoadingButton from '../Helpers/Button';
import GrowExample from '../Helpers/spinner';

const Item = () => {
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

const formatearPrecio = (precio) => {
  return precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

}

  return (
    <div className='Items'>
       <div className='Producto-img'>
    <img src={`/${producto.img}`} className="Producto-detalle-img" alt={producto.modelo}/>
      </div>

      <div className='Producto-detalle'>
        <h2>{producto.marca} {producto.modelo}</h2>
        <p>{producto.descripcion}</p>
        <p>{formatearPrecio(producto.precio)}</p>
        <LoadingButton  info= {"Agregar al carrito"} />
      </div>

    </div>
    
  );
};

export default Item;
