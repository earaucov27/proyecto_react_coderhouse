// ItemListContainer.jsx
import React from 'react';
import ItemList from './ItemList';

// Importación de css
import './ItemListContainer.css';

const ItemListContainer = ({ geeting }) => {
    const productos = [
        {
            titulo: "God of War Ragnarok",
            descripcion: "PS5",
            precio: 64990,
            imagen: "/src/assets/images/ps5-gow.png"
        },
        {
            titulo: "Horizon Forbidden West",
            descripcion: "PS5",
            precio: 49990,
            imagen: "/src/assets/images/ps5-hfw.png"
        },
        {
            titulo: "Spider-Man 2",
            descripcion: "PS5",
            precio: 74990,
            imagen: "/src/assets/images/ps5-sm2.png"
        },

        {
            titulo: "The last of Us Part I",
            descripcion: "PS5",
            precio: 74990,
            imagen: "/src/assets/images/ps5-tlou.jpg"
        }

        
    ];

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        } else {
            reject("No hay productos disponibles.");
        }
    });

    mostrarProductos
        .then((productos) => {
            console.log("Productos disponibles:", productos);
        })
        .catch((error) => {
            console.error("Error al cargar productos:", error);
        });

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
