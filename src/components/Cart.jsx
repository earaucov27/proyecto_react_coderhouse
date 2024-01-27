import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const [showThankYou, setShowThankYou] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [confirmCorreo, setConfirmCorreo] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [cartDetails, setCartDetails] = useState([]);
    const [isBackgroundHidden, setIsBackgroundHidden] = useState(false);

    // Calcula si el carrito está vacío
    const cartIsEmpty = cart.length === 0 && !showThankYou;

    const isFormValid = () => {
        return nombre && apellido && correo && confirmCorreo && correo === confirmCorreo;
    };

    const saveOrderDataToFirebase = async (orderData) => {
        try {
            const db = getFirestore();
            const datosCompraCollection = collection(db, 'datos_compra');

            // Agrega los datos del comprador a la colección 'datos_compra'
            const orderRef = await addDoc(datosCompraCollection, orderData);

            // Los datos del comprador se han guardado exitosamente en la base de datos
            console.log('Datos del comprador guardados en Firebase con ID: ', orderRef.id);

            // Ahora, también guardaremos los detalles de los productos en la orden si existen
            if (cartDetails.length > 0) { // Verificamos si hay detalles del carrito para guardar
                const productosOrdenCollection = collection(db, 'productos_orden');

                for (const productDetail of cartDetails) {
                    await addDoc(productosOrdenCollection, {
                        orderId: orderRef.id,
                        productId: productDetail.id,
                        cantidad: productDetail.quantity,
                        precioUnitario: productDetail.precio,
                        plataforma: productDetail.plataforma,
                        titulo: productDetail.titulo,
                    });
                }

                console.log('Detalles de los productos en la orden guardados en Firebase.');
            } else {
                console.log('No se encontraron productos en la orden para guardar.');
            }
        } catch (error) {
            console.error('Error al guardar los datos en Firebase:', error);
        }
    };

    // Función para agregar los detalles del carrito al estado
    const updateCartDetails = () => {
        const details = cart.map(item => ({
            id: item.id,
            quantity: item.quantity,
            precio: item.precio,
            plataforma: item.plataforma,
            titulo: item.titulo,
        }));
        setCartDetails(details);
    };

    useEffect(() => {
        if (showThankYou) {
            clearCart();
        }
    }, [showThankYou]);

    // Actualizar los detalles del carrito cada vez que cambie el carrito
    useEffect(() => {
        updateCartDetails();
    }, [cart]);

    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

    const handleCheckout = () => {
        if (isFormValid()) {
            // Generar número de orden
            const newOrderNumber = 'ORD' + new Date().getTime() + Math.floor(Math.random() * 1000);
            setOrderNumber(newOrderNumber); // Actualiza el estado aquí

            // Crea el objeto orderData con los datos del comprador, incluyendo el número de orden
            const orderData = {
                nombre,
                apellido,
                correo,
                numeroOrden: newOrderNumber,
                productos: cartDetails // Agrega los detalles del carrito al objeto orderData
            };

            // Guardar los datos del comprador en Firebase
            saveOrderDataToFirebase(orderData);

            setShowThankYou(true);
            clearCart();
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                {cartIsEmpty && !showThankYou && (
                    <div id='h1CarritoVacio' className="full-screen-message">
                        <h1>El carrito está vacío.</h1>
                        <h3>- Agrega productos al carrito -</h3>
                        <Link to="/">Ver productos</Link>
                    </div>
                )}
            </div>

            {!cartIsEmpty && !showThankYou && (
                <div>
                    <p id='productosSeleccionados'>Productos Seleccionados</p>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <Card style={{ width: 'auto', margin: '10px' }}>
                                <Card.Body>
                                    <div className='row'>
                                        <div className='col'>
                                            <h3>{item.titulo}</h3>
                                            <p>Plataforma: {item.plataforma}</p> {/* Mostrar plataforma */}
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
            )}

            {!cartIsEmpty && !showThankYou && (
                <div id='div-resumen-del-producto'>
                    <Card style={{ minWidth: '300px', maxWidth: '500px', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title id='resumenDelCarrito'>Resumen del Carrito</Card.Title>
                            {cart.map((item, index) => (
                                <div key={index}>
                                    <p>{item.titulo} </p>
                                    <p>Plataforma: {item.plataforma}</p>
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
            )}

            {!cartIsEmpty && !showThankYou && (
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
            )}

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
            {isBackgroundHidden && <div className="background-overlay"></div>}
        </div>
    );
};

export default Cart;
