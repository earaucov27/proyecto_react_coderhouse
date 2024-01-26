import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Row, Col, Button } from 'react-bootstrap';
import ImageLoader from './ImageLoader';


const ItemDetailXbox = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [juegoXbox, setJuegoXbox] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "videojuegosxbox", id);

        getDoc(docRef).then((snapshot) => {
            if (snapshot.exists()) {
                setJuegoXbox({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!juegoXbox) {
        return (
            <div id='productoNoEncontrado'>
                <h1>Producto no encontrado</h1>
                <Link to="/">Ver más productos</Link>
            </div>
        );
    }

    return (
        <div>
            <Row>
            <Col xs={12} md={12} lg={6} className='imagen-detalle-juego d-flex justify-content-center'>
                    <ImageLoader className='estilos-imagen-detalle-juego' src={juegoXbox.imagen} alt={juegoXbox.titulo} />
                </Col>
                <Col xs={12} md={12} lg={6} className='descripcion-detalle-juego'>
                    <h2>{juegoXbox.titulo}</h2>
                    <h4>{juegoXbox.plataforma}</h4>
                    <p>{juegoXbox.descripcion}</p>
                    <p><strong>Precio: ${juegoXbox.precio}</strong></p>
                    <Button variant='dark' onClick={handleBack}>Volver</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ItemDetailXbox;
