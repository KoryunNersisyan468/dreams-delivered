import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  OneWishById: []
}

export const OneWishByIdSlice = createSlice({
  name: 'OneWishById',
  initialState,
  reducers: {
    fetchingOneWishById(state) {
      state.loading = true;
    },
    fetchOneWishById(state, action) {
      state.loading = false;
      state.OneWishById = action.payload;
      state.error = '';
    },
    fetchErrorOneWishById(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingOneWishById, fetchOneWishById, fetchErrorOneWishById } = OneWishByIdSlice.actions;
export default OneWishByIdSlice.reducer;