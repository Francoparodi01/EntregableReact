import React, {useState, useEffect} from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        if(count !== 0) {
            setCount(count-1);
        } else {
            
            alert("No hay nada que quitar");
        }
    }
    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    //Montaje del componente
    useEffect(()=> {
        //El array de dependencias vacío implica que el callback se ejecutará cuando se MONTA el componente por UNICA vez.
        console.log("Se montó el ItemCount");
    }, []);

    //La función callback dentro del useEffect se ejecutará cuando se MONTE el componente, y cuando se ACTUALICE el valor del count
    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);

    return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
