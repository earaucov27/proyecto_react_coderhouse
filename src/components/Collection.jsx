//ItemListContainer
import { collection, getDocs, getFirestore, snapshotEqual } from "firebase/firestore"
import { useEffect, useState } from 'react'



const Collection = () => {
    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {

        const db = getFirestore()

        const itemCollection = collection(db, "videojuegos")

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducts(docs)

        })


    }, [])

    return (
        <div>
            {
                products.map((p) => (
                    <div>
                        <p>{p.titulo}</p>
                        <p>{p.plataforma}</p>
                        <p>{p.precio}</p>
                        <p>{p.descripcion}</p>
                        <img src={p.imagen} alt={p.titulo} style={{ maxWidth: '100px', maxHeight: 'auto' }} />
                    </div>

                ))
            }
        </div>
    )
}

export default Collection