import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "/userinfo",
  pageDirection: "",
};
const pageOrder: string[] = [
  "/userinfo",
  "/userinfo/position",
  "/userinfo/success",
];

const pageTransitionSlice = createSlice({
  name: "pageTransition",
  initialState,
  reducers: {
    pageDirectionHandler: (state, action) => {
      const { pathname } = action.payload;
      const prevPage = pageOrder.indexOf(state.currentPage);
      const nextPage = pageOrder.indexOf(pathname);
      if (prevPage > nextPage) {
        state.pageDirection = "left";
      } else {
        state.pageDirection = "right";
      }
      state.currentPage = pathname;
    },
  },
});
export const { pageDirectionHandler } = pageTransitionSlice.actions;
export default pageTransitionSlice.reducer;
