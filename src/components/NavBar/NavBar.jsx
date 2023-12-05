import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from "./Cart/Cart";
import { Logo } from './logo';
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"> <Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Productos/Category/Notebook">Notebook</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Productos/Category/Desktop">Desktop</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Productos/Category/Teclados">Teclados</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Productos/Category/Mouse">Mouse</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Productos/Category/Grafica">Grafica</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/Productos">Todos los Productos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/QuienesSomos">Quienes somos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Cart />
            </Container>
        </Navbar>
    );
}
