import React, { useState } from 'react'
import CartOpen from '../cart-open/CartOpen';
import './Cart.css'
import { useSelector } from 'react-redux'


const Cart = () => {
    const cart = useSelector(state => state.cart.cartState)
    const [cartToggle, setCartToggle] = useState(false)
    const toggleSwitch = () =>{
        setCartToggle(!cartToggle)
    } 
    
    return (
        <div className="cart">
            <div className="cart-icon" style={{cursor:'pointer'}} onClick={toggleSwitch}>
                cart
                <span className={cart.length > 0 ? "cart-total-price" : ''}>{cart.length > 0 ? cart.length : ''}</span>
            </div>
            {
        cartToggle &&
            <CartOpen cart={cart}/>
            }
        </div>
    )
}

export default Cart;
