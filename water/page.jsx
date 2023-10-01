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
            <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3ddfa09dde787ca4761675ad6511add5.jpg?imageView2/2/w/800/q/70"} data-was-processed="true" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Water Resistant, Travel Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (60)
              </p>
            </div>
            <h4>
            multifunction large capacity.
            </h4>
            <p className="Price"> $87.46 <b style={{textDecoration: 'line-through'}}>
          $137.46
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
