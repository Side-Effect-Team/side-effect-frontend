import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
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
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
