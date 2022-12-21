import React, { useState } from 'react'
import { createContext } from "react";

//Primero declara el context
export const Shop = createContext();

//Paso dos, crear el provider (proveedor) que me va a envolver a la aplicación
const ShopProvider = ({children}) => {
    
    //Dentro del context irían: estados, efectos y funciones auxiliares
    const [cart, setCart] = useState([])



    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    //Completar la lógica
    const removeItem = (item) => {

    }

    const clearCart = () => {

    }

    // const [mensaje, setMensaje] = useState("Hola")

    return (
        <Shop.Provider value={{ cart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;