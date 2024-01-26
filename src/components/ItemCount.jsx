import React, { useState } from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ItemCount = ({ item, addToCart }) => {
    const [contador, setContador] = useState(0);
    const [mostrarModalAgregar, setMostrarModalAgregar] = useState(false);
    const [mostrarModalError, setMostrarModalError] = useState(false);

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const sumar = () => {
        setContador(contador + 1);
    };

    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const agregarAlCarrito = () => {
        if (contador > 0) {
            setCantidadAgregada(contador);
            addToCart(item, contador);

            setContador(0);
            setMostrarModalAgregar(true);
        } else {
            setMostrarModalError(true);
        }
    };

    const cerrarModalAgregar = () => {
        setMostrarModalAgregar(false);
    };

    const cerrarModalError = () => {
        setMostrarModalError(false);
    };

    return (
        <div>
            <Row className="btn-contador-agregar">
                <Col className="d-flex justify-content-start align-items-center">
                    <Button variant="danger" onClick={restar} className="btn-contador">-</Button>
                    <Button variant="secondary" onClick={agregarAlCarrito} className="btn-agregar">
                        Agregar
                    </Button>
                    <Button variant="success" onClick={sumar} className="btn-contador">+</Button>
                </Col>
                <p className='fuente-contador'>{contador} {contador === 1 ? 'unidad' : 'unidades'}</p>
            </Row>

            <Modal show={mostrarModalAgregar} onHide={cerrarModalAgregar} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Agregado al carrito: {cantidadAgregada} {cantidadAgregada === 1 ? 'unidad' : 'unidades'}</p>
                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={cerrarModalAgregar}>
                            Seguir Comprando
                        </Button>
                        <Link to="/cart">
                            <Button variant="primary" onClick={cerrarModalAgregar}>
                                Ir al Carrito
                            </Button>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={mostrarModalError} onHide={cerrarModalError} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Debes agregar al menos un producto al carrito.</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ItemCount;
