import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Active: []
}

export const ActiveSlice = createSlice({
  name: 'Active',
  initialState,
  reducers: {
    fetchingActive(state) {
      state.loading = true;
    },
    fetchActive(state, action) {
      state.loading = false;
      state.Active = action.payload;
      state.error = '';
    },
    fetchErrorActive(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingActive, fetchActive, fetchErrorActive } = ActiveSlice.actions;
export default ActiveSlice.reducer;