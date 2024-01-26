// ItemListPs5.jsx
import React from 'react';
import ItemPS5 from './ItemPS5';
import { Row, Col } from 'react-bootstrap';

const ItemListPs5 = ({ juegosps5 }) => {
    return (
        <Row xs={1} md={2} lg={4}>
            {juegosps5.map((ps5) => (
                <Col key={ps5.id}>
                    <ItemPS5
                        id={ps5.id}
                        titulo={ps5.titulo}
                        plataforma={ps5.plataforma}
                        precio={ps5.precio}
                        imagen={ps5.imagen}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ItemListPs5;
