import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

import { BASE_URL } from "../../../utils/urls";

const initialState = {
  list: [],
  isLoading: false
}

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkApi) => {
    try {
      const res = await axios(`${BASE_URL}/categories`)
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err)
    }
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder.addCase(getCategories.pending, (state, { payload }) => {
      state.isLoading = true;
    })
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    })
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
    })
  }
})

export default categoriesSlice.reducer;