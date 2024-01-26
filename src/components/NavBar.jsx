import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ setSelectedPlatform }) => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> {/* Modifica aquí */}
                        <img
                            alt=""
                            src="/src/assets/images/3dpixels-logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        3DPixels
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Plataformas" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/ps5" >PS5</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/xbox" >Xbox</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/cart" className="cart-icon-link">
                                <CartWidget />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
