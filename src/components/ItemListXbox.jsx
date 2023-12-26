import React from 'react';
import Item from './Item';

import { Row, Col } from 'react-bootstrap';

const ItemListXbox = ({ juegosxbox }) => {
    return (
        <Row xs={1} md={2} lg={4}>
            {juegosxbox.map((x) => (
                <Col key={x.id}>
                    <Item
                        titulo={x.titulo}
                        descripcion={x.descripcion}
                        precio={x.precio}
                        imagen={x.imagen}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ItemListXbox;
