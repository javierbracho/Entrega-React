import React from 'react'
import LoadingButton from '../Helpers/Button';
import { Link } from 'react-router-dom';


const ItemList = ({productos}) => {
    const formatearPrecio = (precio) => {
        return precio.toLocaleString('es-CL', {
          style: 'currency',
          currency: 'CLP',
        });
      
      }
  return (
        <div className='productos'>
            {
                productos.length > 0 &&
                productos.map ((producto) => {
                    return  (
                        <div key={producto.id} className={`productos-card`}>
                            <img src={`/${producto.img}`} className="card-img-top" alt="notebook"/>
                            <div className="card-body">
                                <h5 className="card-title">{producto.marca} {producto.modelo}</h5>
                                <p>{formatearPrecio(producto.precio)}</p>
                                <Link to={`/producto/${producto.id}`}>
                                    <LoadingButton info= {"Detalles del producto"} />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>

  )
}

export default ItemList