import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  InActive: []
}

export const InActiveSlice = createSlice({
  name: 'InActive',
  initialState,
  reducers: {
    fetchingInActive(state) {
      state.loading = true;
    },
    fetchInActive(state, action) {
      state.loading = false;
      state.InActive = action.payload;
      state.error = '';
    },
    fetchErrorInActive(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingInActive, fetchInActive, fetchErrorInActive } = InActiveSlice.actions;
export default InActiveSlice.reducer;