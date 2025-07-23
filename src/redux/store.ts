import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./globalSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
