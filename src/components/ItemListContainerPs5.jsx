// ItemListContainerPS5.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListPs5 from './ItemListPs5';

const ItemListContainerPS5 = () => {
    const [juegosps5, setJuegosPS5] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "videojuegos");

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setJuegosPS5(docs);
        });
    }, []);

    return (
        <ItemListPs5 juegosps5={juegosps5} />
    );
};

export default ItemListContainerPS5;
