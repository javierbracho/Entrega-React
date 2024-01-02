import React, { useState, useContext, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { CartContext } from '../../Context/CartContext';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/data';
import { useNavigate } from 'react-router-dom';

function FormularioDeCheckout() {
  const { carrito, precioTotal, vaciarCarrito, IvaCarrito } = useContext(CartContext);

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ordenId, setOrdenId] = useState('');
  

  const handleTelefonoChange = (e) => {
    const formattedTelefono = e.target.value.replace(/\D/g, '').slice(0, 9);
    setTelefono(formattedTelefono);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (ordenId) {
      navigate(`/orden/${ordenId}`, { state: { ordenId } });
      console.log(ordenId);
    }
  }, [ordenId, navigate]);

  console.log(carrito)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      event.stopPropagation();

      if (!nombre || !apellido || !telefono || !email || !confirmEmail || !direccion) {
        setError('Por favor complete todos los campos requeridos');
        return;

      }
      if (!email.includes('@')) {
        setError('Por favor ingrese un correo electrónico válido');
        return;
      }

      if( email !== confirmEmail){
        setError('Los email no coinciden');
        return;
       }

       if (telefono.length < 9) {
        setError('El número de teléfono debe tener al menos 9 caracteres');
        return;
      }

       else {
        console.log('Formulario válido.');
        setError('');
      }

      setValidated(true);

      const total = precioTotal();
      const orden = {
        items: carrito.map((producto) => ({
          id: producto.id,
          marca: producto.marca,
          modelo: producto.modelo,
          cantidad: producto.cantidad,
          categoria: producto.category,
        })),
        total: total,
        fecha: new Date(),
        nombre,
        apellido,
        email,
        telefono,
        direccion,
      };

      await Promise.all(
        orden.items.map(async (ordenDeProducto) => {
          const productoRef = doc(db, 'Productos', ordenDeProducto.id);
          const productoDoc = await getDoc(productoRef);
          const stockActual = productoDoc.data().stock;

          await updateDoc(productoRef, {
            stock: stockActual - ordenDeProducto.cantidad,
          });
        })
      );

      const docRef = await addDoc(collection(db, 'Ordenes'), orden);

      setOrdenId(docRef.id);
      vaciarCarrito();
      setEmail('');
      setConfirmEmail('');
      setNombre('');
      setApellido('');
      setDireccion('');
      setTelefono('');
      
      
    } catch (error) {
      console.error('Error al procesar la orden', error);
      setError('Error al procesar la orden');
    }
  };

  return ( 
 
      <Form className='formulario' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-1">
          <Form.Group as={Col} lg="12">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} lg="12" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese su apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />

          </Form.Group>
          </Row>
          <Row className="mb-1">
            <Form.Group as={Col} lg="12">
              <Form.Label>E-mail</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su e-mail"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingrese un correo electrónico válido.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-1">
          <Form.Group as={Col} lg="12">
            <Form.Label>Confirmar E-mail</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email" 
                placeholder="Confirme su e-mail"
                aria-describedby="inputGroupPrepend"
                required
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />

            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-1">
        <Form.Group as={Col} lg="12">
            <Form.Label>Número telefonico</Form.Label>
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+56</InputGroup.Text>
              <Form.Control
                type="text" 
                placeholder="Ingrese su número telefonico"
                aria-describedby="inputGroupPrepend"
                required
                value={telefono}
                onChange={handleTelefonoChange}
              />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese un número telefónico válido.
                  </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          </Row>
          <Row className="mb-4">
          <Form.Group as={Col} lg="12" controlId="validationCustomAddress">
            <Form.Label>Dirección</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text" 
                placeholder="Ingrese su dirección"
                aria-describedby="inputGroupPrepend"
                required
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingrese una dirección válida.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          </Row>

      <div>{error && <p>{error}</p>}</div>  
       
      <div className='totalCarrito'>
          <h3>Total Carrito</h3>  
      </div>  

      <div className='totalCheckout'>
        <div className='totalesDeCompra'>
            <p>Total:</p>  
            <p>{precioTotal()} </p>
        </div>  
        <div className='totalesDeCompra'>
            <p>IVA:</p>  
            <p>{IvaCarrito()} </p>
        </div>  
      </div>


      <div className='container-finalizarCompra'>   
        {carrito.length > 0 && (
          <Button type="button" onClick={handleSubmit}>
            Finalizar compra
          </Button>
        )}
      </div>

      </Form>
  
 

  );
}

export default FormularioDeCheckout;