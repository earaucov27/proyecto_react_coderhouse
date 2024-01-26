import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const [showThankYou, setShowThankYou] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [confirmCorreo, setConfirmCorreo] = useState('');
    const [orderNumber, setOrderNumber] = useState('');

    const isFormValid = () => {
        return nombre &&  apellido && correo && confirmCorreo && correo === confirmCorreo;
    };

    useEffect(() => {
        if (showThankYou) {
            clearCart();
        }
    }, [showThankYou]);

    if (cart.length === 0 && !showThankYou) {
        return (
            <div id='h1CarritoVacio'>
                <h1>El carrito está vacío.</h1>
                <h3>- Agrega productos al carrito -</h3>
                <Link to="/">Ver productos</Link>
            </div>
        );
    }

    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

    const handleCheckout = () => {
        if (isFormValid()) {
            // Generar número de orden
            const newOrderNumber = 'ORD' + new Date().getTime() + Math.floor(Math.random() * 1000);
            setOrderNumber(newOrderNumber);
            setShowThankYou(true);
            clearCart();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: '' }}>
            <div>
                <p id='productosSeleccionados'>Productos Seleccionados</p>
                {cart.map((item) => (
                    <div key={item.id}>
                        <Card style={{ width: 'auto', margin: '10px' }}>
                            <Card.Body>
                                <div className='row'>
                                    <div className='col'>
                                        <h3>{item.titulo}</h3>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Precio: ${item.precio}</p>
                                        <Button variant="danger" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                                    </div>
                                    <div className='col'>
                                    <img src={item.imagen} alt={item.titulo} style={{ width: 'auto', height: '200px', marginLeft: '200px' }} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <div id='div-resumen-del-producto'>
                <Card style={{ minWidth: '300px', maxWidth: '500px', margin: '10px' }}>
                    <Card.Body>
                        <Card.Title id='resumenDelCarrito'>Resumen del Carrito</Card.Title>
                        {cart.map((item, index) => (
                            <div key={index}>
                                <p>{item.titulo} </p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Total: ${item.precio * item.quantity}</p>
                                <hr />
                            </div>
                        ))}
                        <p><strong>Valor total de compra: </strong></p>
                        <p><strong>${total}</strong></p>
                    </Card.Body>
                </Card>
            </div>

            <div id='div-informacion-del-comprador'>
                <Form>
                    <Card style={{ minWidth: '300px', maxWidth: '500px', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title id='informacionDelComprador'>Información del Comprador</Card.Title>
                            {/* Nombre */}
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </Form.Group>
                            {/* Apellido */}
                            <Form.Group className="mb-3" controlId="formApellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu apellido paterno"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </Form.Group>
                            {/* Correo Electrónico */}
                            <Form.Group className="mb-3" controlId="formCorreo">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </Form.Group>
                            {/* Confirmar Correo Electrónico */}
                            <Form.Group className="mb-3" controlId="formConfirmCorreo">
                                <Form.Label>Confirmar Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Confirma tu correo electrónico"
                                    value={confirmCorreo}
                                    onChange={(e) => setConfirmCorreo(e.target.value)}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={handleCheckout}
                                disabled={!isFormValid()}
                            >
                                Pagar
                            </Button>
                        </Card.Body>
                    </Card>
                </Form>
            </div>
            <Modal show={showThankYou} onHide={() => setShowThankYou(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Gracias por tu compra</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tu producto llegará en los próximos días!
                    <br />
                    <strong>Número de orden: {orderNumber}</strong>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Cart;
