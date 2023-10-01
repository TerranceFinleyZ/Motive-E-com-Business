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
            <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/888686998e249a0a174f7c2266129a7d.jpg?imageView2/2/w/800/q/70/format/webp"} data-did-mount="1" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Laptop, Office Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4>
            Best Laptop carry on backpack for the office.
            </h4>
            <p className="Price"> $82.66 <b style={{textDecoration: 'line-through'}}>
          $130.66
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

