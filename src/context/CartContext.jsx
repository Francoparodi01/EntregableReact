import React, { useContext, useState }from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () =>useContext(CartContext);

 const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const clearCart = () => setCart([])
        
    const isInCart = (id) => cart.find(product => product.id === id) ?true : false;

    const removeProduct = (id) => setCart((product => product.id !== id));

    const addProduct = (item, newQuantity) =>{
        const {quantity = 0 } = cart.find(product => product.item.id === item.id) || {};
        const newCart = cart.filter(product => product.item.id !== item.id);
        setCart([...newCart, {...item, quantity: quantity + newQuantity}])
    }
    console.log("carrito", cart);



  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct, 
        addProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider