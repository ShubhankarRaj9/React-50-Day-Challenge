import React from 'react'

const Product = (p) => {
  return (
    <div>
        <h2>Product Name: {p.name}</h2>
        <p>Product Price: ${p.price}</p>
    </div>
  )
}

export default Product