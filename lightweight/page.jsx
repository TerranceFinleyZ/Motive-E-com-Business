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
            <img src={"https://img.kwcdn.com/product/1e23315266/62a93479-b377-4dcb-86c0-dd504ad183c4_1600x1600.jpeg?imageView2/2/w/800/q/70"} data-was-processed="true" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Lightweight, Hiking Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (38)
              </p>
            </div>
            <h4>
            Large 40L capacity provides ample space for all your essentials.
            </h4>
            <p className="Price"> $77.94 <b style={{textDecoration: 'line-through'}}>
          $124.94
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
            <Link href="/vortex">
            <img src={"https://i5.walmartimages.com/seo/Outdoor-Products-Vortex-30-Ltr-Backpack-with-Bottle-Blue-Unisex-Adult-Teen_0d39c69f-989c-43f9-bb05-28d3588eec6e.0f11952f5ab8b4dc01728b7830bf81d1.jpeg?"} data-was-processed="true" width={250} height={250} className="product-image-T" />
            </Link>
      </div>
    </div>
  )
}
