import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartState: [],
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.cartState.push(action.payload)
          },
        deleteItemFromCart: (state, action) => {
            state.cartState = state.cartState.filter(game => game.id !== action.payload)
          },
    },
  })

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions

export default cartSlice.reducer