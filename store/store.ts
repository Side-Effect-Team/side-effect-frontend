import { configureStore } from "@reduxjs/toolkit";
import pageTransitionSlice from "./pageTransitionSlice";
import modalSlice from "./modalSlice";
import toastSlice from "./toastSlice";
export const store = configureStore({
  reducer: {
    page: pageTransitionSlice,
    modal: modalSlice,
    toast: toastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
