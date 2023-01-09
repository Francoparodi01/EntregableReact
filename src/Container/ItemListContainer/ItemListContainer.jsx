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
  
  
  
  /*const q = query(itemsCollection, where("category", "==", "electronics"))
  getDocs(q).then((snapshot) => {
    const productos = snapshot.docs.map((doc) => ({
      id: doc.id,
   ...doc.data(),
}));
console.log(productos)
setProductos(productos);
});*/
    
    

   
    /*     getDocs(itemsCollection).then((snapshot) => {
    const productos = snapshot.docs.map((doc) => ({
      id: doc.id,
   ...doc.data(),
}));
console.log(productos)
setProductos(productos);
}); */


/*  Un solo item
     const itemRef = doc(db, 'items', '4LHbcNF7cuA1rQzvI8ZN');
     getDoc(itemRef).then((snapshot)=>{
       if(snapshot.exists()){
         setProductos([{id: "4LHbcNF7cuA1rQzvI8ZN", ...snapshot.data() }]);
       }
       console.log(productos);
     })
   }, [])
   return <ItemList products={productos} />;
   }
*/

/* Una coleccion */