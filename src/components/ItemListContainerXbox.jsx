import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemListXbox from './ItemListXbox.jsx';
import Loader from './Loader';

const ItemListContainerXbox = () => {
    const [juegosxbox, setJuegosXbox] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "videojuegosxbox");

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setJuegosXbox(docs);
            setShowLoader(false);
        });
    }, []);

    return (
        <>
            {showLoader ? (
                <Loader />
            ) : (
                <ItemListXbox juegosxbox={juegosxbox} />
            )}
        </>
    );
};

export default ItemListContainerXbox;
