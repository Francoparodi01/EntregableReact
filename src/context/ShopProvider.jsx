import React, { useState } from 'react'
import { createContext } from "react";


export const Shop = createContext();


const ShopProvider = ({children}) => {
    

    const [cart, setCart] = useState([])



    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }


    const removeItem = (item) => {

    }

    const clearCart = () => {

    }

   

    return (
        <Shop.Provider value={{ cart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;