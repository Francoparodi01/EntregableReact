import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div>
        <img src={product.image} alt={product.title}/>
        <div>
            <p>Iitulo: {product.title}</p>
            <p>Cantidad:{product.newQuantity}</p>
            <p>Precio u.: {product.price}</p>
            <p>Subtotal: ${product.newQuantity * product.price}</p>
            <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart