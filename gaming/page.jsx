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
            <img src={"https://m.media-amazon.com/images/I/71Qo3W3zXsL._AC_SX569_.jpg"} data-did-mount="1" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Victus, HP Gaming Laptop</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>
                (11)
              </p>
            </div>
            <h4>
            BEYOND FAST GRAPHICS - 24GB GDDR6 dedicated NVIDIA GeForce RTX 4050 Graphics.
            </h4>
            <p className="Price"> $2,230.99 <b style={{textDecoration: 'line-through'}}>
          $2,776.99
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
            <form action="/api/checkout_sessionsS" method="POST">
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
      Free Shipping !!!
      </div>
    </div>
  )
}
