// ItemListContainerPS5.jsx
import React, { useState } from 'react'; // Importa useState
import ItemListPs5 from './ItemListPs5';
import ItemDetail from './ItemDetail';

const ItemListContainerPS5 = ({ geeting }) => {
    const [juegosps5, setJuegosps5] = useState([ // Cambia el nombre de la variable
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
    ]);

    return (
        <div>
            <ItemListPs5 juegosps5={juegosps5} />
        </div>
    );
};

export default ItemListContainerPS5;
