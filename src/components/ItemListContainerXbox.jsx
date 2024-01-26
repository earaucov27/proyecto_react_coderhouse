// ItemListContainerXbox.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListXbox from './ItemListXbox.jsx';
import LoaderModal from './LoaderModal'; // Importa el componente


const ItemListContainerXbox = () => {
    const [juegosxbox, setJuegosXbox] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "videojuegosxbox");

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setJuegosXbox(docs);
        });
    }, []);

    return (
        <>
            {/* Usa el componente LoaderModal aquí */}
            <LoaderModal show={showLoader} />

            {/* Contenido principal */}
            <ItemList juegos={juegos} />
        </>
    );
};

export default ItemListContainerXbox;
