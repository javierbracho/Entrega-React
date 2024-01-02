import React, { useContext } from 'react'
import LoadingButton from '../Helpers/Button';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


const ItemList = ({productos}) => {
    
const {formatearPrecio}=useContext(CartContext)
        
  return (
        <div className='productos'>
            {
                productos.length > 0 &&
                productos.map ((producto) => {
                    return  (
                        <div key={producto.id} className={`productos-card`}>
                            <img src={`/${producto.img}`} className="card-img-top" alt={producto.modelo}/>
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