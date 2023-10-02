import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state,action) => {
       const product = state.products.find(item=>item.id === action.payload.id) 
    !product &&  state.products.push(action.payload)
    },
    removefromcart: (state,action) => {
     state.products = state.products.filter(item=> item.id !== action.payload.id)
   },
   resetcart:(state)=>{
     state.products =[];
   }
  },
})

export const { addtocart , removefromcart , resetcart} = CartSlice.actions

export default CartSlice.reducer