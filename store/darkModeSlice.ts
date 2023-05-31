import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    handleDarkMode: (state, action: PayloadAction<{ isDark: boolean }>) => {
      const { isDark } = action.payload;
      state.isDark = isDark;
    },
  },
});

export const { handleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
