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
            <img src={"https://i5.walmartimages.com/seo/SwissTech-Urban-Trek-18-Travel-Backpack-with-USB-Port-Unisex-Adult-ages-Green-Walmart-Exclusive_2660d1ee-c484-4002-9575-5ecc1dd6e42a.b4ca7f7fb9c2fc8e5d414e41fea31755.jpeg?"} data-did-mount="1" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>USB, Trek Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (33)
              </p>
            </div>
            <h4>
            An integrated USB port for use with a power bank (battery pack not included).
            </h4>
            <p className="Price"> $100.00 <b style={{textDecoration: 'line-through'}}>
          $150.26
        </b> </p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick=""><AiOutlineMinus/>
                </span>
                <span className="num" onClick="">0
                </span>
                <span className="plus" onClick=""><AiOutlinePlus/>
                </span>
              </p>
            </div>
            <div className='buttons'>
              <button type="button" className="buy-now" onClick="">Buy Now</button>
            </div>
          </div>
      </div>
      <div className='peep-conainer'>
            You may also like
      </div>
    </div>
  )
}
