// ItemListContainerPs5.jsx
import React from 'react';
import ItemListPs5 from './ItemListPs5';

const ItemListContainerPs5 = ({ geeting }) => {
    const juegosps5 = [
        {   
            id: 1,
            titulo: "God of War Ragnarok",
            descripcion: "PS5",
            precio: 64990,
            imagen: "/src/assets/images/ps5-gow.png"
        },
        {   
            id: 2,
            titulo: "Horizon Forbidden West",
            descripcion: "PS5",
            precio: 49990,
            imagen: "/src/assets/images/ps5-hfw.png"
        },
        {   
            id: 3,
            titulo: "Spider-Man 2",
            descripcion: "PS5",
            precio: 74990,
            imagen: "/src/assets/images/ps5-sm2.png"
        },

        {   id: 4,
            titulo: "The last of Us Part I",
            descripcion: "PS5",
            precio: 74990,
            imagen: "/src/assets/images/ps5-tlou.jpg"
        }

        
    ];

    const mostrarJuegosPS5 = new Promise((resolve, reject) => {
        if (juegosps5.length > 0) {
            setTimeout(() => {
                resolve(juegosps5);
            }, 3000);
        } else {
            reject("No hay productos disponibles.");
        }
    });

    mostrarJuegosPS5
        .then((juegosps5) => {
            console.log("Productos disponibles:", juegosps5);
        })
        .catch((error) => {
            console.error("Error al cargar productos:", error);
        });

    return (
        <div>
            <ItemListPs5 juegosps5={juegosps5} />
        </div>
    );
};

export default ItemListContainerPs5;
