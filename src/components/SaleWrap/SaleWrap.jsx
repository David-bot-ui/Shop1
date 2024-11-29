import React from 'react'
import './SaleWrap.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
const SaleWrap = () => {
  return (
  <>
  <section className="salewrap">
    <div className="container">
        <div className="salewrap__wrap">
            <div className="salewrap__card">
                <h2>Casual</h2>
            </div>
            <div className="salewrap__card">
                <h2>Formal</h2>
            </div>
            <div className="salewrap__card">
                <h2>Party</h2>
            </div>
            <div className="salewrap__card">
                <h2>Gym</h2>
            </div>
        </div>
    </div>
  </section>
  

  <div className="app">
    <div className="elements">
      <h1>All Reviews (451)</h1>
      <button className="elements__btn">Write a Review</button>
    </div>
      <div className="conainer">
      <div className="reviews">
        <div className="review-card">
          <div className="rating">★★★★★</div>
          <h3>Samantha D.</h3>
          <p className="date">Posted on August 14, 2023</p>
          <p className="review">
            I absolutely love this t-shirt! The design is unique and the fabric
            feels so comfortable. As a fellow designer, I appreciate the
            attention to detail. It's become my favorite go-to shirt.
          </p>
        </div>
        <div className="review-card">
          <div className="rating">★★★★★</div>
          <h3>Alex M.</h3>
          <p className="date">Posted on August 15, 2023</p>
          <p className="review">
            The t-shirt exceeded my expectations! The colors are vibrant and
            the print quality is top-notch. Being a UI/UX designer myself, I'm
            quite picky about aesthetics, and this t-shirt definitely gets a
            thumbs up from me.
          </p>
        </div>
        <div className="review-card">
          <div className="rating">★★★★½</div>
          <h3>Ethan R.</h3>
          <p className="date">Posted on August 16, 2023</p>
          <p className="review">
            This t-shirt is a must-have for anyone who appreciates good design.
            The minimalistic yet stylish pattern caught my eye, and the fit is
            perfect. I can see the designer's touch in every aspect of this
            shirt.
          </p>
        </div>
        <div className="review-card">
          <div className="rating">★★★★★</div>
          <h3>Olivia P.</h3>
          <p className="date">Posted on August 17, 2023</p>
          <p className="review">
            As a UI/UX enthusiast, I value simplicity and functionality. This
            t-shirt not only represents those principles but also feels great
            to wear. It's evident that the designer poured their creativity
            into making this t-shirt stand out.
          </p>
        </div>
        <div className="review-card">
          <div className="rating">★★★★½</div>
          <h3>Liam K.</h3>
          <p className="date">Posted on August 18, 2023</p>
          <p className="review">
            This t-shirt is a fusion of comfort and creativity. The fabric is
            soft, and the design speaks volumes about the designer's skill.
            It's like wearing a piece of art that reflects my passion for both
            design and fashion.
          </p>
        </div>
        <div className="review-card">
          <div className="rating">★★★★★</div>
          <h3>Ava H.</h3>
          <p className="date">Posted on August 19, 2023</p>
          <p className="review">
            I'm not just wearing a t-shirt; I'm wearing a piece of design
            philosophy. The intricate details and thoughtful layout of the
            design make this shirt a conversation starter.
          </p>
        </div>
      <button className="load-btn">Load More Reviews</button>
      </div>
      </div>
    </div>
  
<SectionTitle/>
<Card/>

    <SectionTitle position='center'>You might also like</SectionTitle>
    <div className="category__wrapper">
        <Card image={'/blue.png'} name='Polo with Contrast Trims' rate='4.0' price='212' stars="⭐⭐⭐⭐"/>
        <Card image={'/rainbow.png'} name='Gradient Graphic T-shirt' rate='3.5' price='145' stars="⭐⭐⭐"/>
        <Card image={'/pink.png'} name='Polo with Tipping Details' rate='4.5' price='180' stars="⭐⭐⭐⭐"/>
        <Card image={'/blackwh.png'} name='Black Striped T-shirt' rate='5.0' price='120' stars="⭐⭐⭐⭐⭐"/>
     </div>

  
  </>
  )
}

export default SaleWrap