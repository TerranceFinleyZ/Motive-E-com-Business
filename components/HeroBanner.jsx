import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">Best Winter Sale on</p>
            <h3>Backpacks</h3>
            <h1>Ever</h1>
            <img src={"https://i.pinimg.com/originals/5e/5d/94/5e5d947e39e67a6ac5e803652b2c460d.jpg"} alt="Backpack" className="hero-banner-image" />

            <div>
                <Link href="/product/ID">
                    <button type="button">Shop Now</button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>Best stealth brand on the market.</p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
