import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   // Inicializa el carrito con los datos de LocalStorage o un array vacío
    const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
});
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

    // Cargar el carrito desde LocalStorage al iniciar
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    // Guardar el carrito en LocalStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        setCart(currentCart => {
            // Buscar si el producto ya existe en el carrito
            const existingProductIndex = currentCart.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                // Si el producto ya existe, actualiza su cantidad
                const updatedCart = [...currentCart];
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    quantity: updatedCart[existingProductIndex].quantity + quantity
                };
                return updatedCart;
            } else {
                // Si el producto no está en el carrito, añádelo
                return [...currentCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
