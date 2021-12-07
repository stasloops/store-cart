import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'

function Header() {
    return (
    <header className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          GAMEEE
        </Link>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
      <Cart />
      </div>
  </header>
    )
}
export default Header
