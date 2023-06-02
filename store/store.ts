import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import darkModeSlice from "./darkModeSlice";
import loginViewTransitionSlice from "./loginViewTransitionSlice";
import modalSlice from "./modalSlice";
import toastSlice from "./toastSlice";
import userInfoStoreSlice from "./userInfoStoreSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "darkMode"],
};
// 여러개의 reducer 를 하나로 합쳐준다.
const reducer = combineReducers({
  userInfo: userInfoStoreSlice,
  loginView: loginViewTransitionSlice,
  modal: modalSlice,
  toast: toastSlice,
  auth: authSlice,
  darkMode: darkModeSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
