import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge'; // Importa Badge de react-bootstrap

const CartWidget = () => {
    const cartItemCount = 5; // Número hardcodeado (fijo) para representar la cantidad en el carrito

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaShoppingCart size={20} style={{ marginRight: '10px', color: 'white' }} />
            <Badge bg="danger">{cartItemCount}</Badge> {/* Utiliza Badge de Bootstrap para el número */}
        </div>
    );
};

export default CartWidget;