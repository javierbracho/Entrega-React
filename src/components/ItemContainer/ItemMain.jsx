import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemMain = () => {
  return (
    <Container>
    <Row>
      {/* Primera imagen que ocupa dos columnas */}
      <Col md={12}>
        <img src="../../../public/img/conlogo.png" alt="Primera Imagen" className="img-fluid" />
      </Col>
    </Row>

    <Row>
      {/* Segunda imagen que ocupa una columna */}
      <Col md={6}>
        <img src="../../../public/img/conlogo.png" alt="Segunda Imagen" className="img-fluid" />
      </Col>

      {/* Tercera imagen que NO ocupa espacio */}
      <Col md={0}>
        {/* Deja este espacio vacío o coloca contenido opcional si es necesario */}
      </Col>

      {/* Cuarta imagen que ocupa una columna */}
      <Col md={6}>
        <img src="../../../public/img/conlogo.png" alt="Cuarta Imagen" className="img-fluid" />
      </Col>
    </Row>
  </Container>
);
};

export default ItemMain;

//   ../../../public/img/conlogo.png