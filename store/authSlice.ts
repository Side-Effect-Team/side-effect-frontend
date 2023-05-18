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
      localStorage.setItem("authenticated", "yes");
      state.token = action.payload;
    },
    removeAuthentication: (state) => {
      state.authenticated = false;
      localStorage.removeItem("authenticated");
      state.token = "";
    },
  },
});
export const { createAuthentication, removeAuthentication } = authSlice.actions;
export default authSlice.reducer;
