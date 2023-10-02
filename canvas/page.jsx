import React from 'react'
import { Navbar } from '../../components'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Water() {
  return (
    <div>
      <Link href="/">
        <Navbar />
      </Link>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6c11fa05917a5cb8419f7f164936edfd.jpg?imageView2/2/w/800/q/70"} data-did-mount="1" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>CrossBody, Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (66)
              </p>
            </div>
            <h4>
            Excellent for storing all your stuff while heading off to work or school.
            </h4>
            <p className="Price"> $60.17 <b style={{textDecoration: 'line-through'}}>
          $80.17
        </b> </p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
              <span className="num">
                  In Stock
                </span>
              </p>
            </div>
            <div className='buttons'>
              <button type="button" className="buy-now" onClick="">Buy Now</button>
            </div>
          </div>
      </div>
      <div className='peep-conainer'>
      <h3>You may also like</h3>
            <Link href="/gym">
            <img src={"https://img.kwcdn.com/product/open/2023-08-19/1692416560286-1c61a62c1d474d4d8d6b8fe0ba7fe6be-goods.jpeg?imageView2/2/w/800/q/70/format/webp"} data-was-processed="true" width={250} height={250} className="product-image-T" />
            </Link>
      </div>
    </div>
  )
}
