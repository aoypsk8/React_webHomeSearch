import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: [],
  loadding: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addHome: (state, action) => {
      state.home = action.payload;
    },
  },
});

export const { addHome } = homeSlice.actions;
export default homeSlice.reducer;
