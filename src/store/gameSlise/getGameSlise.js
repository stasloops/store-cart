import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        gameState: [],
    },
    reducers: {
        setCurrentGame: (state, action) => {
            state.gameState = action.payload
          },
    },
  })

export const { setCurrentGame } = gameSlice.actions

export default gameSlice.reducer