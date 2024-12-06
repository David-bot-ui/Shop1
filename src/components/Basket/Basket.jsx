import React from 'react'
import './Basket.scss'
const Basket = () => {
  return (
 <>
 <h1 className='cart__h1'>Your cart</h1>
 <div className="cart">
      <div className="cart-items">
        <div className="cart-item">
        <img src="/rainbow.png" alt="" />
          <div className="item-details">
            <h2>Gradient Graphic T-shirt</h2>
            <p>Size: Large</p>
            <p>Color: White</p>
            <span className="price">$145</span>
          </div>
          <div className="numbers">
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="remove">🗑</button>
          </div>
        </div>

        <div className="cart-item">
        <img src="/Card-3.png" alt="" />
          <div className="item-details">
            <h2>Checkered Shirt</h2>
            <p>Size: Medium</p>
            <p>Color: Red</p>
            <span className="price">$180</span>
          </div>
          <div className="numbers">
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="remove">🗑</button>
          </div>
        </div>

        <div className="cart-item">
        <img src="/Card-8.png" alt="" />
          <div className="item-details">
            <h2>Skinny Fit Jeans</h2>
            <p>Size: Large</p>
            <p>Color: Blue</p>
            <span className="price">$240</span>
          </div>
          <div className="numbers">
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="remove">🗑</button>
          </div>
        </div>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>
          Subtotal: <span>$565</span>
        </p>
        <p>
          Discount (-20%): <span className="discount">-$113</span>
        </p>
        <p>
          Delivery Fee: <span>$15</span>
        </p>
        <hr />
        <h3>
          Total: <span>$467</span>
        </h3>
        <button className="checkout">Go to Checkout</button>
      </div>
    </div>
 
 </>
  )
}

export default Basket