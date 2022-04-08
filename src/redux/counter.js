import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: false,
}
export const counterSlice = createSlice({
  name: 'changed',
  initialState,
  reducers: {
    makeTrue: (state) => {
      state.value=true
    },
    makeFalse: (state) => {
      state.value=false
    }
  },
})
export const { makeTrue, makeFalse } = counterSlice.actions
export default counterSlice.reducer