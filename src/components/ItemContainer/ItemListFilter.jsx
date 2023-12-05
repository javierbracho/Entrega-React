import React from 'react';
import { pedirProductoByCategory } from '../pedirProductos/pedirProductosByCategory'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import GrowExample from '../Helpers/spinner';

const ItemListFilter = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState(null)
    

    useEffect(() => {
        const obtenerProducto = async () => {
          try {
            const productoObtenido = await pedirProductoByCategory(id);
            setProductos(productoObtenido);
            console.log(productoObtenido)
          } catch (error) {
            console.error("Error al obtener el producto", error);
          }
        };
    
        obtenerProducto();
      }, [id]);

      if (!productos) {
        return  <div className='Animacion'>
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
