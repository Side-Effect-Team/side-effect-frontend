import { configureStore } from "@reduxjs/toolkit";
import loginViewTransitionSlice from "./loginViewTransitionSlice";
import modalSlice from "./modalSlice";
import toastSlice from "./toastSlice";
import userInfoStoreSlice from "./userInfoStoreSlice";
export const store = configureStore({
  reducer: {
    userInfo: userInfoStoreSlice,
    loginView: loginViewTransitionSlice,
    modal: modalSlice,
    toast: toastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
