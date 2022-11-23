import React from 'react'

const Item = ({product}) => {
  return (
    <div>
      <img src={product.image} width={250} alt="product"/>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Item