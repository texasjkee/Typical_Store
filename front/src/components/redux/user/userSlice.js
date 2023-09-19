import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

import { BASE_URL } from "../../../utils/urls";

const initialState = {
  currentUser: [],
  cart: [],
  isLoading: false,
}

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (_, thunkApi) => {
//     try {
//       const res = await axios(`${BASE_URL}/users`)
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkApi.rejectWithValue(err)
//     }
//   }
// );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addIteamToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(cart => cart.id === payload.id)

      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        }) 
      } else newCart.push({payload, quantity: 1})

      state.cart = newCart;
    },
  },
  extraReducers: builder => {
    // builder.addCase(getProducts.pending, (state, { payload }) => {
    //   state.isLoading = true;
    // })
    // builder.addCase(getProducts.fulfilled, (state, { payload }) => {
    //   state.list = payload;
    //   state.isLoading = false;
    // })
    // builder.addCase(getProducts.rejected, (state) => {
    //   state.isLoading = false;
    // })
  }
});

export const { addIteamToCart } = userSlice.actions;

export default userSlice.reducer;