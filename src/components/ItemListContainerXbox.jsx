import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListXbox from './ItemListXbox.jsx';
import Loader from './Loader'; // Importa el componente de loader

const ItemListContainerXbox = () => {
    const [juegosxbox, setJuegosXbox] = useState([]);
    const [showLoader, setShowLoader] = useState(true); // Mostrar el loader al principio

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "videojuegosxbox");

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setJuegosXbox(docs);
            setShowLoader(false); // Ocultar el loader cuando los datos estén cargados
        });
    }, []);

    return (
        <>
            {showLoader ? (
                <Loader /> // Muestra el loader mientras los datos se cargan
            ) : (
                <ItemListXbox juegosxbox={juegosxbox} /> // Muestra la lista de juegos cuando los datos están listos
            )}
        </>
    );
};

export default ItemListContainerXbox;
