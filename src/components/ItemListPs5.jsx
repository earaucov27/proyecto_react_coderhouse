// ItemListPs5.jsx
import React from 'react';
import Item from './Item';

import { Row, Col } from 'react-bootstrap';

const ItemListPs5 = ({ juegosps5 }) => {
    return (
        <Row xs={1} md={2} lg={4}>
            {juegosps5.map((ps5) => (
                <Col key={ps5.id}>
                    <Item
                        
                        id={ps5.id}
                        titulo={ps5.titulo}
                        descripcion={ps5.descripcion}
                        precio={ps5.precio}
                        imagen={ps5.imagen}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ItemListPs5;
