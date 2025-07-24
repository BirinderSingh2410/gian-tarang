import { createSlice } from "@reduxjs/toolkit";

const dashboardStates = createSlice({
  name: "dashboard",
  initialState: {
    loader: false,
  },
  reducers: {
    isLoader(state, action) {
      state.loader = action.payload;
    },
  },
});

export const { isLoader } = dashboardStates.actions;
export default dashboardStates.reducer;
