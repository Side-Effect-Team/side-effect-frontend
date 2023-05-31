import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthPayloadType {
  userId: string;
  token: string;
}

const initialState = {
  token: "",
  userId: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createAuthentication: (state, action: PayloadAction<AuthPayloadType>) => {
      const { userId, token } = action.payload;
      state.token = token;
      state.userId = userId;
    },
    removeAuthentication: (state) => {
      state.token = "";
      state.userId = "";
    },
  },
});
export const { createAuthentication, removeAuthentication } = authSlice.actions;
export default authSlice.reducer;
