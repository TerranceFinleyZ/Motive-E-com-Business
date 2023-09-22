import { Product, FooterBanner, HeroBanner } from '@/components';
import React from 'react'
import { client } from '../lib/client';

const Home = ({ products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />

      <div className="products-heading">
        <h2>
          Best Selling Products
        </h2>
        <p>Stay ready this winter </p>
      </div>

      <div className="products-container">
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/3ddfa09dde787ca4761675ad6511add5.jpg?imageView2/2/w/800/q/70"} data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">Water Resistant, Travel Backpack</p>
          <p className="product-price">$87.46 <span style={{textDecoration: 'line-through'}}>
          $137.46
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://media.kohlsimg.com/is/image/kohls/4317872_Olive?"} width={250} height={250} className="product-image" />
          <p className="product-image">Polyester, Litmus Backpack</p>
          <p className="product-price">$146.05 <span style={{textDecoration: 'line-through'}}>
          $202.05
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/1e23315266/62a93479-b377-4dcb-86c0-dd504ad183c4_1600x1600.jpeg?imageView2/2/w/800/q/70"} data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">Lightweight Outdoor, Hiking Backpack</p>
          <p className="product-price">$77.94 <span style={{textDecoration: 'line-through'}}>
          $124.94
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/888686998e249a0a174f7c2266129a7d.jpg?imageView2/2/w/800/q/70/format/webp"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Laptop Carry bag, Office Backpack</p>
          <p className="product-price">$82.66 <span style={{textDecoration: 'line-through'}}>
          $130.66
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/open/2023-08-19/1692416560286-1c61a62c1d474d4d8d6b8fe0ba7fe6be-goods.jpeg?imageView2/2/w/800/q/70/format/webp"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">GYM/Fitness/Sport, Military Backpack</p>
          <p className="product-price">$107.20 <span style={{textDecoration: 'line-through'}}>
          $160.20
        </span></p>

        </div>
        <div className="products-headingtwo">
        <h2>
        More..!
        </h2>
      </div>

        <div className="product-card">
          <img src={"https://i5.walmartimages.com/seo/SwissTech-Urban-Trek-18-Travel-Backpack-with-USB-Port-Unisex-Adult-ages-Green-Walmart-Exclusive_2660d1ee-c484-4002-9575-5ecc1dd6e42a.b4ca7f7fb9c2fc8e5d414e41fea31755.jpeg?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">USB Port, Trek Backpack</p>
          <p className="product-price">$100.00 <span style={{textDecoration: 'line-through'}}>
          $150.26
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/1e2331480c/7b96ed57-244d-4eb2-a8b4-f58f6916549a_800x800.jpeg?imageView2/2/w/800/q/70/format/webp"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Essential, Adventure Backpack</p>
          <p className="product-price">$91.79 <span style={{textDecoration: 'line-through'}}>
          $144.79
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6c11fa05917a5cb8419f7f164936edfd.jpg?imageView2/2/w/800/q/70"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Canvas Sling, CrossBody Backpack</p>
          <p className="product-price">$60.17 <span style={{textDecoration: 'line-through'}}>
          $80.17
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://media.kohlsimg.com/is/image/kohls/4844670_Mini_Monogram_Black?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">adidas, Sport Backpack</p>
          <p className="product-price">$86.66 <span style={{textDecoration: 'line-through'}}>
          $136.66
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://i5.walmartimages.com/seo/Outdoor-Products-Vortex-30-Ltr-Backpack-with-Bottle-Blue-Unisex-Adult-Teen_0d39c69f-989c-43f9-bb05-28d3588eec6e.0f11952f5ab8b4dc01728b7830bf81d1.jpeg?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Vortex, Unisex Backpack</p>
          <p className="product-price">$75.86 <span style={{textDecoration: 'line-through'}}>
          $120.05
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9d2b3f6e3d79b29cd240a53efe92319b.jpg?imageView2/2/w/800/q/70/format/webp"} data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">Student, Women's Backpack</p>
          <p className="product-price">$65.77 <span style={{textDecoration: 'line-through'}}>
          $115.77
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7a8333b0f01bdedb5c2e39ac31948bfa.jpg?imageView2/2/w/800/q/70"} data-was-processed="true" width={250} height={250} className="product-image" />
          <p className="product-image">Anti-theft, Travel Backpack</p>
          <p className="product-price">$72.16 <span style={{textDecoration: 'line-through'}}>
          $120.03
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://i5.walmartimages.com/seo/Ozark-Trail-20-5-Liter-Hiking-Camping-Travel-Lightweight-Backpack-Fjord-Blue-Unisex_f476d3ed-3b74-4f3f-953a-90fb98857d1a.b6cbb6b5180f8461691f7cd499f32058.jpeg?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Ozark Unisex, Camping Backpack</p>
          <p className="product-price">$67.76 <span style={{textDecoration: 'line-through'}}>
          $119.84
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://i5.walmartimages.com/seo/Cheruty-Heavy-Duty-Transparent-Clear-Backpack-Large-See-Through-Backpacks-for-School-Sports-Work-Stadium-Security-Travel-College_f2863342-e0d4-40ba-ab7e-0f9a276b27be.1c263e9107ed3bbd5c0416e57cdee462.jpeg?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Heavy Duty, Transparent Backpack</p>
          <p className="product-price">$76.99 <span style={{textDecoration: 'line-through'}}>
          $110.99
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://mms-images.out.customink.com/mms/images/catalog/abfae989b318922858601c116b989ebf/styles/956700/catalog_detail_image_large.jpg?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Winter/Heavy Duty, Thule Backpack</p>
          <p className="product-price">$230.02 <span style={{textDecoration: 'line-through'}}>
          $276.00
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://img.kwcdn.com/product/1e13cb93810/95f2f49b-237e-458e-9217-33909e948e39_800x800.jpeg?imageView2/2/w/800/q/70/format/webp"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Leisure Waterpoof, Student Backpack</p>
          <p className="product-price">$30.43 <span style={{textDecoration: 'line-through'}}>
          $80.43
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://cdn.shopify.com/s/files/1/2534/3568/products/41cmzNqaAxL_880x880.jpg?v=1554132286"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Jartop Elite, Embark Backpack</p>
          <p className="product-price">$88.39 <span style={{textDecoration: 'line-through'}}>
          $138.39
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://target.scene7.com/is/image/Target/GUEST_0f2d02ce-2853-42cc-b476-36336909059c?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">HP 15.6" Touchscreen Laptop</p>
          <p className="product-price">$1,400.99 <span style={{textDecoration: 'line-through'}}>
          $2,017.00
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://target.scene7.com/is/image/Target/GUEST_c92ff347-67da-40db-81c0-83ee2744665e?"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">Lenovo 15.6", Windows 11</p>
          <p className="product-price">$1,750.00 <span style={{textDecoration: 'line-through'}}>
          $2,476.33
        </span></p>
        </div>
        <div className="product-card">
          <img src={"https://m.media-amazon.com/images/I/71Qo3W3zXsL._AC_SX569_.jpg"} data-did-mount="1" width={250} height={250} className="product-image" />
          <p className="product-image">HP victus, Gaming Laptop 2023</p>
          <p className="product-price">$2,230.99 <span style={{textDecoration: 'line-through'}}>
          $2,776.99
        </span></p>
        </div>
      </div>

      <FooterBanner />
    </>
  ) 
};

export const generateStaticParams = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "product"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home

