// ItemCount.jsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ItemCount = () => {
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

    const mostrarMensajeAgregar = () => {
        if (contador > 0) {
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
            <Button variant="danger" onClick={restar}>-</Button>{' '}
            <Button variant="success" onClick={sumar}>+</Button>{' '}
            <Button variant="secondary" onClick={mostrarMensajeAgregar}>Agregar {contador}</Button>{' '}

            <Modal show={mostrarModalAgregar} onHide={cerrarModalAgregar} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Agregado al carrito: {contador} {contador === 1 ? 'unidad' : 'unidades'}</p>
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
