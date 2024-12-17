import React, { useEffect } from 'react';
import './Hero.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: 'ease-in-out', // Плавная анимация
      once: true, // Анимация запускается один раз
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div
              className="hero__box"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button data-aos="zoom-in" data-aos-delay="400">Shop Now</button>
              <div
                className="hero__costumers"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="costumer1" data-aos="fade-up" data-aos-delay="700">
                  <h3>200+</h3>
                  <p>International Brands</p>
                </div>
                <hr />
                <div className="costumer1" data-aos="fade-up" data-aos-delay="800">
                  <h3>2,000+</h3>
                  <p>High-Quality Products</p>
                </div>
                <hr />
                <div className="costumer1" data-aos="fade-up" data-aos-delay="900">
                  <h3>30,000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div
              className="hero__img"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img src="/hero-img.png" alt="Hero" />
            </div>
          </div>
        </div>
        <div className="logo__images" data-aos="fade-up" data-aos-delay="1000">
          <img src="/versage.png" alt="Versage" data-aos="zoom-in" data-aos-delay="1100" />
          <img src="/zara.png" alt="Zara" data-aos="zoom-in" data-aos-delay="1200" />
          <img src="/gucci.png" alt="Gucci" data-aos="zoom-in" data-aos-delay="1300" />
          <img src="/prada.png" alt="Prada" data-aos="zoom-in" data-aos-delay="1400" />
          <img src="/calvin.png" alt="Calvin Klein" data-aos="zoom-in" data-aos-delay="1500" />
        </div>
      </section>
    </>
  );
};

export default Hero;


