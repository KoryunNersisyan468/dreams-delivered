import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  loading: false,
  error: "",
  Benevolent: []
}

export const BenevolentSlice = createSlice({
  name: 'Benevolent',
  initialState,
  reducers: {
    fetchingBenevolent(state) {
      state.loading = true;
    },
    fetchBenevolent(state, action) {
      state.loading = false;
      state.Benevolent = action.payload;
      state.error = '';
    },
    fetchBenevolentUbdate(state) {
      state.loading = false;
      state.Benevolent = [];
      state.error = '';
    },
    fetchErrorBenevolent(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingBenevolent, fetchBenevolent, fetchErrorBenevolent,fetchBenevolentUbdate } = BenevolentSlice.actions;
export default BenevolentSlice.reducer;