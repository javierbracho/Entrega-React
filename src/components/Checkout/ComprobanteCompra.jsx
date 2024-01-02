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
    // Muestra un mensaje de carga o un esqueleto mientras esperas la información
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>Comprobante de Compra</h2>
      {ordenId && <p>Tu número de orden es: {ordenId}</p>}
      {/* ... Otros detalles de la compra */}
    </div>
  );
};

export default ComprobanteCompra;
