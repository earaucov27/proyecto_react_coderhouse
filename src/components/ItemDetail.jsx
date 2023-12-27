// ItemDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();

    // Array local de juegos
    const juegosps5 = [
        {   
            id: 'PS5-1',
            titulo: "God of War Ragnarok",
            descripcion: "PS5",
            precio: 64990,
            imagen: "/src/assets/images/ps5-gow.png"
        },
        {   
            id: 'PS5-2',
            titulo: "Horizon Forbidden West",
            descripcion: "PS5",
            precio: 49990,
            imagen: "/src/assets/images/ps5-hfw.png"
        },
        {   
            id: 'PS5-3',
            titulo: "Spider-Man 2",
            descripcion: "PS5",
            precio: 74990,
            imagen: "/src/assets/images/ps5-sm2.png"
        },
        {   
            id: 'PS5-4',
            titulo: "The last of Us Part I",
            descripcion: "PS5",
            precio: 74990,
            imagen: "/src/assets/images/ps5-tlou.jpg"
        }
        // ... otros juegos
    ];

    // Encuentra el juego específico usando el ID
    const juegoEncontrado = juegosps5.find(juego => juego.id === id);

    // Manejo si el juego no se encuentra
    if (!juegoEncontrado) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h2>{juegoEncontrado.titulo}</h2>
            <p>{juegoEncontrado.descripcion}</p>
            <p>Precio: ${juegoEncontrado.precio}</p>
            <img src={juegoEncontrado.imagen} alt={juegoEncontrado.titulo} />
        </div>
    );
};

export default ItemDetail;
