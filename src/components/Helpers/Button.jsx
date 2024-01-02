import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';



function LoadingButton({ info, item, cantidad}) {
  const [isLoading, setLoading] = useState(false);
  





  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          handleAgregar(); 
        }, 1000);
      });
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  const handleAgregar = () => {
    const itemAgregado = {...item,cantidad}

    setCarrito ()

  };

  return (
    <div className='Button-agregar'>
      <Button
        variant="dark"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Cargando...' : info}
      </Button>
    </div>
  );
}

export default LoadingButton;



