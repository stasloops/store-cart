import React from 'react'
import './Button.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../store/cartSlise/getCartSlise'

const Button = ({id, item}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cartState)
    const haveIdItem = cart.some((some) => some.id === item.id)

    const changeItemInCart = () =>{
        if(haveIdItem){
            dispatch(deleteItemFromCart(id))
        }
        else{
            dispatch(setItemInCart(item))
        }
    }
    return (
        <button onClick={changeItemInCart} className={`game-item__add-cart ${haveIdItem? 'grey' : 'purple'}`}>{haveIdItem? 'удалить из корзины' : 'В корзину'}</button>
    )
}
export default Button; 
