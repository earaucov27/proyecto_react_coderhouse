import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Row, Col, Button } from 'react-bootstrap';


const ItemDetailPS5 = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [juego, setJuego] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "videojuegos", id);

        getDoc(docRef).then((snapshot) => {
            if (snapshot.exists()) {
                setJuego({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!juego) {
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
                    <img className='estilos-imagen-detalle-juego' src={juego.imagen} alt={juego.titulo} />
                </Col>
                <Col xs={12} md={12} lg={6} className='descripcion-detalle-juego'>
                    <h2>{juego.titulo}</h2>
                    <h4>{juego.plataforma}</h4>
                    <p>{juego.descripcion}</p>
                    <p><strong>Precio: ${juego.precio}</strong></p>
                    <Button variant='dark' onClick={handleBack}>Volver</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ItemDetailPS5;
