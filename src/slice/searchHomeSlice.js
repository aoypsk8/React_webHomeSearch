import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchHome: [],
  loadding: false,
  error: null,
};

const searchHomeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchHome: (state, action) => {
      state.searchHome = action.payload;
    },
  },
});

export const { addSearchHome } = searchHomeSlice.actions;
export default searchHomeSlice.reducer;
