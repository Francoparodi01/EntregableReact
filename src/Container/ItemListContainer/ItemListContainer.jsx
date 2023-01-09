import React, { useEffect, useState } from "react";
import ItemList from '../../components/ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "items")
      if (categoryId) {
          const queryFilter = query(queryCollection, where('category', '==', categoryId))
          getDocs(queryFilter)
            .then(res => setProductos(res.docs.map(productos =>({id: productos.id, ...productos.data()}))) )    
        }else{
          getDocs(queryCollection)
            .then(res => setProductos(res.docs.map(productos =>({id: productos.id, ...productos.data()}))) )  
        }
  }, [categoryId]);
  return <ItemList products={productos} />;
};
  export default ItemListContainer;