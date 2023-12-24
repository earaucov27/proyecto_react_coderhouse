// NavBar.jsx
import React from 'react'
import CartWidget from './CartWidget';

/* IMPORTACIONES BOOTSTRAP */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (

        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
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
                            <NavDropdown title="videojuegos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">PS5</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Xbox Series</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Switch</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="consolas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PS5</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Xbox Series</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Switch</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="accesorios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PS5</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Xbox Series</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Switch</NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar