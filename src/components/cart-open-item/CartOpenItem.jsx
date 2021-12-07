import React from 'react'
import './CartOpenItem.css'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../store/cartSlise/getCartSlise'

const CartOpenItem = ({price, title, id}) => {
    const dispatch = useDispatch()

    const removeCartOpenItem = () =>{
        dispatch(deleteItemFromCart(id))
    }
    return (
        <div className="cart-open__item">
                    <h3 className="cart-open__title">
                        {title}
                    </h3>
                    <span className="cart-open__price">{price} руб</span>
                    <button onClick={removeCartOpenItem} className="cart-open__deleted">x</button>
        </div>
    )
}
export default CartOpenItem
