// Item.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = ({ titulo, descripcion, precio, imagen }) => {
    return (
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <Button variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
