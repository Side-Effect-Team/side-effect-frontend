import { configureStore } from "@reduxjs/toolkit";
import pageTransitionSlice from "./pageTransitionSlice";
import modalSlice from "./modalSlice";
export const store = configureStore({
  reducer: {
    page: pageTransitionSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
