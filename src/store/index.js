import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameSlise/getGameSlise'
import cartReducer from './cartSlise/getCartSlise'

export const store = configureStore({
  reducer: {
      game: gameReducer,
      cart: cartReducer,
      
  },
})