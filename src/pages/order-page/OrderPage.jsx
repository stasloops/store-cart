import React from 'react'
import './OrderPage.css'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/order-item/OrderItem'
import { totalPrice } from '../../components/utilts'

const OrderPage = () => {
    const cart = useSelector(state => state.cart.cartState)
    return (
        <div className="order-page">
            {
                cart.map((cart)=>
                (
                    <OrderItem id={cart.id} img={cart.image} title={cart.title} price={cart.price}/>
                )
                )
            }
                <div className="cart-total__price">
                    <div>
                        Итого:
                    </div>
                    <div>
                        {totalPrice(cart)} руб
                    </div>
                </div>
                <div className="cart-length">
                    <div>
                        Товаров:
                    </div>
                    <div>
                        {cart.length} шт
                    </div>
                </div>
        </div>
    )
}
export default OrderPage;
