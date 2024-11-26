import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header>
      <nav>
        <Link to='/'></Link>
      </nav>
     <div className="menu">
      <Link to={'/sale'} className='dropdown'>Shop
      <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="" />
      <div>
        <Link to={'/'}>Man</Link>
        <Link to={'/'}>Women</Link>
        <Link to={'/'}>Kids</Link>
      </div>
      </Link>
      <a href="/#selling">On Sale</a>
      <a href="/#arrivals">New Arrivals</a>
      <Link to={'/'}>Brands</Link>
     </div>
    </header>
    
    </>
  )
}

export default Header