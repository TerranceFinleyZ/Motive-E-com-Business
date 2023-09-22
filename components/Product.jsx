import React from 'react'

const Product = ({ product: {image} }) => {
  return (
    <div className="product-card">
      <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/ae45a29cf021310430a492ad406ba1eb.jpg?imageView2/2/w/800/q/70"} draggable="false" width={250} height={250} className="product-image" />
    </div>
  )
}

export default Product
