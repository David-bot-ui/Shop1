import React, { useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const { isActive, toggleBurger, user, isAuth, logout } = useAppContext();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: 'ease-out', // Плавная анимация
      once: true, // Анимация запускается один раз
    });
  }, []);

  return (
    <>
      <header className="header" data-aos="zoom-in" data-aos-delay="200">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__wrap" data-aos="zoom-in" data-aos-delay="300">
              <div className="header__header" data-aos="zoom-in" data-aos-delay="400">
                <Link to={'/'}>
                  <img
                    className="logo__img"
                    src="/shop.png"
                    alt="Logo"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  />
                </Link>
                <div
                  className={`header__menu ${isActive ? 'active' : ''}`}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <Link to={'/sale'} className="dropdown" data-aos="zoom-in" data-aos-delay="700">
                    Shop
                    <img
                      src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
                      alt="Arrow"
                    />
                    <div>
                      <Link to={'/'}>Men</Link>
                      <Link to={'/'}>Women</Link>
                      <Link to={'/'}>Kids</Link>
                    </div>
                  </Link>
                  <a href="/#selling" data-aos="zoom-in" data-aos-delay="800">
                    On Sale
                  </a>
                  <a href="/#arrivals" data-aos="zoom-in" data-aos-delay="900">
                    New Arrivals
                  </a>
                  <Link to={'/brands'} data-aos="zoom-in" data-aos-delay="1000">
                    Brands
                  </Link>
                </div>
              </div>

              <div
                onClick={toggleBurger}
                className={`burger ${isActive ? 'active' : ''}`}
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                <div className="div"></div>
                <div className="div"></div>
                <div className="div"></div>
              </div>
            </div>

            <div className="header__search" data-aos="zoom-in" data-aos-delay="1200">
              <div className="header__input">
                <img src="/search-icon.svg" alt="Search" />
                <p>Search for products...</p>
              </div>
              <Link to={'/basket'} data-aos="zoom-in" data-aos-delay="1300">
                <img src="/icon-1.svg" alt="Basket" />
              </Link>

              {isAuth ? (
                <div data-aos="zoom-in" data-aos-delay="1400">
                  <b>{user.username}</b>
                  <button onClick={logout}>logout</button>
                </div>
              ) : (
                <Link to={'/login'} data-aos="zoom-in" data-aos-delay="1400">
                  <img src="/icon-2.svg" alt="Login" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
