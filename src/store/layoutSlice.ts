import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  darkMode: boolean;
}

const initialState: LayoutState = {
  darkMode: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = layoutSlice.actions;

export default layoutSlice.reducer;
