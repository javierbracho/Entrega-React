import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ComprobanteCompra = () => {
  const location = useLocation();
  const { ordenId } = location.state || {};

  console.log(ordenId)

  useEffect(() => {
    if (!ordenId) {
      console.error('Error: No se proporcionó un número de orden válido.');
    }
  }, [ordenId]);

  if (!ordenId) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='ComprobanteCompra'>
      <h2>Hemos recibido tu pedido con exito</h2>
      <h2>muchas gracias por tu compra!</h2>
      <h3>Comprobante de pedido</h3>
      {ordenId && <p>Tu número de orden es: <span>{ordenId} </span></p>}
    </div>
  );
};

export default ComprobanteCompra;
