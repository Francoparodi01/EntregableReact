import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt="product-detail"/>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail