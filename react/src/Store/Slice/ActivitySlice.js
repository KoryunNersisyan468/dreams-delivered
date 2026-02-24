import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  loading: false,
  error: "",
  Activity: []
}


export const ActivitySlice = createSlice({
  name: 'Activity',
  initialState,
  reducers: {
    fetchingActivity(state) {
      state.loading = true;
    },
    fetchActivity(state, action) {
      state.loading = false;
      state.Activity = action.payload;
      state.error = '';
    },
    fetchErrorActivity(state, action ) {
      state.loading = false;
      state.error = action.payload.message;
    },
    
  }
})

export const { fetchingActivity, fetchActivity, fetchErrorActivity } = ActivitySlice.actions;
export default ActivitySlice.reducer;