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
            <img src={"https://media.kohlsimg.com/is/image/kohls/4317872_Olive?"} width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Polyester, Litmus Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>
                (153)
              </p>
            </div>
            <h4>
            Padded back and straps with airmesh for breathability.
            </h4>
            <p className="Price"> $146.05 <b style={{textDecoration: 'line-through'}}>
          $202.05
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
