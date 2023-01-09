import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    

    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "items", "cBViyTmwjscGFlbMCXY7")
        getDoc(queryDoc)
        .then(res => setProductDetail({id: res.id, ...res.data()}))
    }, [])

    console.log(productDetail);

    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;
