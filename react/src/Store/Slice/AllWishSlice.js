import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Wish: []
}

export const WishSlice = createSlice({
  name: 'Wish',
  initialState,
  reducers: {
    fetchingWish(state) {
      state.loading = true;
    },
    fetchWish(state, action) {
      state.loading = false;
      state.Wish = action.payload;
      state.error = '';
    },
    fetchErrorWish(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingWish, fetchWish, fetchErrorWish } = WishSlice.actions;
export default WishSlice.reducer;