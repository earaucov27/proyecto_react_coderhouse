// CartWidget.jsx
import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaShoppingCart size={20} style={{ marginRight: '10px', color: 'white' }} />
            {cart.length > 0 && <Badge bg="danger">{itemCount}</Badge>}
        </div>
    );
};

export default CartWidget;
