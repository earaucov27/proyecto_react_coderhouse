import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListPs5 from './ItemListPs5';
import Loader from './Loader';

const ItemListContainerPS5 = () => {
    const [juegosps5, setJuegosPS5] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "videojuegos");

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setJuegosPS5(docs);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <ItemListPs5 juegosps5={juegosps5} />
            )}
        </div>
    );
};

export default ItemListContainerPS5;
