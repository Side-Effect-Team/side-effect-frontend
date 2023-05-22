import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: "",
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createAuthentication: (state, action) => {
      state.authenticated = true;
      state.token = action.payload;
    },
    removeAuthentication: (state) => {
      state.authenticated = false;
      state.token = "";
    },
  },
});
export const { createAuthentication, removeAuthentication } = authSlice.actions;
export default authSlice.reducer;
