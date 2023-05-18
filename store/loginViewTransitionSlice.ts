import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageDirection: "",
  viewNumber: 0,
};

const loginViewTransitionSlice = createSlice({
  name: "pageTransition",
  initialState,
  reducers: {
    nextView: (state, action) => {
      const { viewNumber } = action.payload;
      state.viewNumber = 1 + viewNumber;
      state.pageDirection = "right";
    },
    prevView: (state, action) => {
      const { viewNumber } = action.payload;
      state.viewNumber = viewNumber - 1;
      state.pageDirection = "left";
    },
  },
});
export const { nextView, prevView } = loginViewTransitionSlice.actions;
export default loginViewTransitionSlice.reducer;
