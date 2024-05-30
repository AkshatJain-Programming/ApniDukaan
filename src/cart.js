import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  quantity: 0,
  cartproducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementPrice: (state, action) => {
      state.price += action.payload;
    },
    incrementQuantity: (state) => {
      state.quantity += 1;
    },
    incrementProduct: (state, action) => {
      state.cartproducts.push(action.payload);
    },
    decrementPrice: (state, action) => {
      state.price -= action.payload;
    },
    decrementQuantity: (state) => {
      state.quantity -= 1;
    },
    decrementProduct: (state, action) => {
        state.cartproducts = state.cartproducts.filter(item=> item.id !== action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementPrice, incrementQuantity, incrementProduct, decrementPrice, decrementQuantity ,  decrementProduct} =
  cartSlice.actions;

export default cartSlice.reducer;
