import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({product}) => {
    const [productDetail, setProductDetail] = useState({})
    const {productId} = useParams()
    

    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "items", productId)
        getDoc(queryDoc)
        .then(res => setProductDetail({id: res.id, ...res.data()}))
    }, [productId])


    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;
