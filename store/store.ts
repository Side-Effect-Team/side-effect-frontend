import { configureStore } from "@reduxjs/toolkit";
import pageTransitionSlice from "./pageTransitionSlice";
export const store = configureStore({
  reducer: {
    page: pageTransitionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
