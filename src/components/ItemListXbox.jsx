// ItemListXbox.jsx
import React from 'react';
import ItemXbox from './ItemXbox';
import { Row, Col } from 'react-bootstrap';

const ItemListXbox = ({ juegosxbox }) => {
    return (
        <Row xs={1} md={2} lg={4}>
            {juegosxbox.map((xbox) => (
                <Col key={xbox.id}>
                    <ItemXbox
                        id={xbox.id}
                        titulo={xbox.titulo}
                        plataforma={xbox.plataforma}
                        precio={xbox.precio}
                        imagen={xbox.imagen}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default ItemListXbox;
