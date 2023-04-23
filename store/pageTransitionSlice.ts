import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "/userinfo",
  pageDirection: "",
};
const pageOrder: string[] = [
  "/userinfo",
  "/userinfo/position",
  "/userinfo/image",
];

const pageTransitionSlice = createSlice({
  name: "pageTransition",
  initialState,
  reducers: {
    pageDirectionHandler: (state, action) => {
      const { pathname } = action.payload;
      const prev = pageOrder.indexOf(state.currentPage);
      const current = pageOrder.indexOf(pathname);
      console.log("prev", prev);
      console.log("current", current);

      if (pageOrder.indexOf(state.currentPage) > pageOrder.indexOf(pathname)) {
        state.pageDirection = "left";
      } else {
        state.pageDirection = "right";
      }
      state.currentPage = pathname;
      console.log(state.currentPage);
    },
  },
});
export const { pageDirectionHandler } = pageTransitionSlice.actions;
export default pageTransitionSlice.reducer;
