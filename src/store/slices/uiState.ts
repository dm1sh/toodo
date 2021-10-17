import { createSlice } from "@reduxjs/toolkit";

export const uiStateSlice = createSlice({
  name: "uiState",
  initialState: {
    addBarOpen: false,
  },
  reducers: {
    open: (state) => {
      state.addBarOpen = true;
    },
    close: (state) => {
      state.addBarOpen = false;
    },
  },
});

export const { open, close } = uiStateSlice.actions;

export default uiStateSlice.reducer;
