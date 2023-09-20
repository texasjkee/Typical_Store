import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

import { BASE_URL } from "../../../utils/urls";

const initialState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  formType: "signup",
  showForm: false
}

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
  state.isLoading = false;
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload)
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err)
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload)
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          "Authorization": `Bearer ${res.access_token}`
        }
      })

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err)
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, thunkApi) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload)
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err)
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(cart => cart.id === payload.id)

      if (found) {
        newCart = newCart.map(item => {
          return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        })
      } else newCart.push({ payload, quantity: 1 })

      state.cart = newCart;
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleForm: (state, { payload }) => {
      state.formType = payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder.addCase(updateUser.fulfilled, addCurrentUser);
  }
});

export const { addItemToCart, toggleForm, toggleFormType } = userSlice.actions;

export default userSlice.reducer;