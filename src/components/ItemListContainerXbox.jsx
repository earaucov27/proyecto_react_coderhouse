// ItemListContainerXbox.jsx
import React from 'react';
import ItemList from './ItemListXbox.jsx';

const ItemListContainerXbox = ({ geeting }) => {
    const juegosxbox = [
        { 
            id: 1,
            titulo: "Forza Horizon 5",
            descripcion: "XBOX",
            precio: 64990,
            imagen: "/src/assets/images/xbox-fh5.png"
        },
        {   
            id: 2,
            titulo: "Gears 5",
            descripcion: "XBOX",
            precio: 49990,
            imagen: "/src/assets/images/xbox-gow5.png"
        },
        {
            id: 3,
            titulo: "Halo Infinite",
            descripcion: "XBOX",
            precio: 74990,
            imagen: "/src/assets/images/xbox-halo.jpg"
        },

        {
            id: 4,
            titulo: "Starfield",
            descripcion: "XBOX",
            precio: 74990,
            imagen: "/src/assets/images/xbox-starfield.jpg"
        }

        
    ];

    const mostrarJuegosXBOX = new Promise((resolve, reject) => {
        if (juegosxbox.length > 0) {
            setTimeout(() => {
                resolve(juegosxbox);
            }, 3000);
        } else {
            reject("No hay productos disponibles.");
        }
    });

    mostrarJuegosXBOX
        .then((juegosxbox) => {
            console.log("Productos disponibles:", juegosxbox);
        })
        .catch((error) => {
            console.error("Error al cargar productos:", error);
        });

    return (
        <div>
            <ItemList juegosxbox={juegosxbox} />
        </div>
    );
};

export default ItemListContainerXbox;
