// Item.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ id, titulo, descripcion, precio, imagen }) => {
    return (
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{id +' '+titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <ItemCount />
                <Link to={`/product/${id}`}>Ver detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;
