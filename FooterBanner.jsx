import React from 'react'
import Link from 'next/link';

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>High</p>
          <h3>Quality</h3>
          <h3>Backpacks!</h3>
          <p>-50% off For a Limited time only-</p>
          <Link href="polyester">
          <button type="button">Shop Now</button>
          </Link>
          

          <img 
            src={"https://simcookie.com/wp-content/uploads/2022/08/man-g6800c80e4_1920-825x575.jpg"} className="footer-banner-image"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
