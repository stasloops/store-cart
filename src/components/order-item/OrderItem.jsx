import React from 'react'
import './OrderItem.css'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../store/cartSlise/getCartSlise'


const OrderItem = ({id, title, price, img}) =>{
    const dispatch = useDispatch()

    const removeCartOpenItem = () =>{
        dispatch(deleteItemFromCart(id))
    }
    return (
        <div className="order-item">
            <img className="order-item__img" src={img} alt="" />
            <h3 className="order-item__title">
                        {title}
                    </h3>
                    <span className="order-item__price">{price} руб</span>
                    <button onClick={removeCartOpenItem} className="cart-open__deleted">x</button>
        </div>
    )
}

export default OrderItem
