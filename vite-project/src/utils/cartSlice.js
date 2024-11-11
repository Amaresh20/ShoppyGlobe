import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      state.items.map((elem) => {
        if (elem.id == action.payload) {
          elem.quantity += 1;
        }
        return elem;
      });
    },
    decreaseQuantity: (state, action) => {
      state.items.map((elem) => {
        if (elem.id == action.payload) {
          elem.quantity -= 1;
        }
        return elem;
      });
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
