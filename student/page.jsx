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
            <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9d2b3f6e3d79b29cd240a53efe92319b.jpg?imageView2/2/w/800/q/70/format/webp"} data-was-processed="true" width={250} height={250} className="product-image-D" />
          </div>
        </div>
        <div className="product-detail-desc">
            <h1>Student & Rave Backpack</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>
                (233)
              </p>
            </div>
            <h4>
            Cute women's backpack, lots of pockets, good for School and Raves.
            </h4>
            <p className="Price"> $65.77 <b style={{textDecoration: 'line-through'}}>
          $115.77
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
            <form action="/api/checkout_sessionsJ" method="POST">
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
          <Link href="/essential">
            <img src={"https://img.kwcdn.com/product/1e2331480c/7b96ed57-244d-4eb2-a8b4-f58f6916549a_800x800.jpeg?imageView2/2/w/800/q/70/format/webp"} data-was-processed="true" width={250} height={250} className="product-image-T" />
          </Link>
      </div>
    </div>
  )
}
