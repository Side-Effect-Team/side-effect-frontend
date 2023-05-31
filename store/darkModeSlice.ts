import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    handleDarkMode: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { handleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
