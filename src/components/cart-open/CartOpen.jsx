import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartOpenItem from '../cart-open-item/CartOpenItem';
import { totalPrice } from '../utilts';
import './CartOpen.css'

function CartOpen({cart}) {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/place');
      }
      console.log(cart);
    return (
    <div className="cart-open">
        <div className="cart-open__wrap">
        {cart.length > 0 
            ?
                cart.map((item, id) =>(
                    <CartOpenItem id={item.id} title={item.title} price={item.price} key={`${item.title}_${id}`}/>
                )
                )
                :
                <h3 className="cart-open__empty">
                            корзина пуста
                </h3>
                }
        {cart.length > 0 
            ?
            <div>
                 <span>
                    ИТОГО:
                </span>
                <span>
                {totalPrice(cart)} руб
                </span>
                <button onClick={handleClick} className="cart-open__place-order">
                    оформить
                </button>
            </div>
                :
               null
                }
        
        </div>
    </div>
    )
}

export default CartOpen
