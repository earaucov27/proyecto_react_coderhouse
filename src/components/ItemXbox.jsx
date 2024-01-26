import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Item = ({ id, titulo, descripcion, precio, imagen, plataforma}) => {
    const { addToCart } = useContext(CartContext);

    return (
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{plataforma}</Card.Text>
                <Card.Text>${precio}</Card.Text>
                <ItemCount item={{ id, titulo, descripcion, precio, imagen, plataforma }} addToCart={addToCart} />
                <Link to={`/productXbox/${id}`}>Ver detalles</Link>
            </Card.Body>
        </Card>
    );
}

export default Item;
