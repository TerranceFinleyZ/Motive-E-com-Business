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
            <img src={"https://img.kwcdn.com/product/open/2023-08-19/1692416560286-1c61a62c1d474d4d8d6b8fe0ba7fe6be-goods.jpeg?imageView2/2/w/800/q/70/format/webp"} data-did-mount="1" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Military, Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>
                (163)
              </p>
            </div>
            <h4>
            Strong GYM and Fitness backpack made for rough play.
            </h4>
            <p className="Price"> $107.20 <b style={{textDecoration: 'line-through'}}>
          $160.20
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
            <form action="/api/checkout_sessionsD" method="POST">
      <section>
        <button className="buy-now" type="submit" role="link">
          Buy Now
        </button>
      </section>
    </form>
    </div>
          </div>
      </div>
      <div className='peep-conainer'>
      <h3>You may also like</h3>
            <Link href="/adidas">
            <img src={"https://media.kohlsimg.com/is/image/kohls/4844670_Mini_Monogram_Black?"} data-was-processed="true" width={250} height={250} className="product-image-T" />
            </Link>
      </div>
    </div>
  )
}