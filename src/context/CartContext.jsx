import React, { useContext, useState }from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () =>useContext(CartContext);

 const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const clearCart = () => setCart([])
        
    const isInCart = (id) => cart.find(product => product.id === id) ?true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, newQuantity) =>{
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
          product.newQuantity += newQuantity;
          newCart = [...cart]
        }else{
          product = {...item, newQuantity: newQuantity}
          newCart = [...cart, product]
        }
        setCart(newCart)
    }
    console.log("carrito", cart);


    const totalPrice = () =>{
      return cart.reduce((prev, act) => prev + act.newQuantity * act.price, 0).toFixed(2)
    }

    const totalProducts = () =>{cart.reduce((acumulador, productoActual) => acumulador + productoActual.newQuantity, 0).toFixed(2)};


  return (
    <CartContext.Provider value={{
        addProduct,
        clearCart,
        isInCart,
        removeProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider