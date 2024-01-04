import React, { useState, useEffect } from 'react';
import { pedirProductoByCategory } from '../pedirProductos/pedirProductosByCategory'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import GrowExample from '../Helpers/spinner';
import NoEncontrado from './NoEncontrado';

const ItemListFilter = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState(null)
    const [error, setError] = useState (false)
    

    useEffect(() => {
        const obtenerProducto = async () => {
          try {
            const productoObtenido = await pedirProductoByCategory(id);
            setProductos(productoObtenido);
          } catch (error) {
            console.error("Error al obtener el producto", error);
            setError(true)
          }
        };
    
        obtenerProducto();
      }, [id]);

      if (error) {
        return <NoEncontrado />
      }

      if (!productos) {
        return <div className='Animacion'>
                 <GrowExample />
                </div>;
    
      }      

 return (
    <div>
        <ItemList productos= {productos} />
    </div>
    
    )
}

export default ItemListFilter
