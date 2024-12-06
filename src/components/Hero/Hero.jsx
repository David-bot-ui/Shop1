import React from 'react'
import './Hero.scss'
const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
        <div className="hero__box">
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button>Shop Now</button>
          <div className="hero__costumers">
            <div className="costumer1">
            <h3>200+</h3>
            <p>International Brands</p>
            </div>
            <hr/>
            <div className="costumer1">
            <h3>2,000+</h3>
            <p>High-Quality Products</p>
            </div>
            <hr/>
            <div className="costumer1">
            <h3>30,000+</h3>
            <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="hero__img">
        <img src="/hero-img.png" alt="" />
        </div>
        </div>
      </div>
      <div className="logo__images">
        <img src="/versage.png" alt="" />
        <img src="/zara.png" alt="" />
        <img src="/gucci.png" alt="" />
        <img src="/prada.png" alt="" />
        <img src="/calvin.png" alt="" />
      </div>

    </section>
    
    
    </>
  )
}

export default Hero