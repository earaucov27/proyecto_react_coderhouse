// ItemList.jsx
import React from 'react';
import Item from './Item';
import { Row, Col } from 'react-bootstrap';

const ItemList = ({ productos }) => {
    console.log(productos);

    return (
        <Row xs={1} md={2} lg={4}>
            {productos.map((p) => (
                <Col key={p.titulo}>
                    <Item
                        titulo={p.titulo}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        imagen={p.imagen}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ItemList;
