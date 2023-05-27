import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createAuthentication: (state) => {
      state.authenticated = true;
    },
    removeAuthentication: (state) => {
      state.authenticated = false;
    },
  },
});
export const { createAuthentication, removeAuthentication } = authSlice.actions;
export default authSlice.reducer;
