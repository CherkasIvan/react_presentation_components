import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'COUNTER',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
  }
})

export const counterActionTypes = counterSlice.actions;

export default counterSlice.reducer;