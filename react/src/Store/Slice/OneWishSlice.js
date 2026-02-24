import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  OneWish: []
}

export const OneWishSlice = createSlice({
  name: 'OneWish',
  initialState,
  reducers: {
    fetchingOne(state) {
      state.loading = true;
    },
    fetchOneWish(state, action) {
      state.loading = false;
      state.OneWish = action.payload;
      state.error = '';
    },
    fetchErrorOneWish(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingOne, fetchOneWish, fetchErrorOneWish } = OneWishSlice.actions;
export default OneWishSlice.reducer;