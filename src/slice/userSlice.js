import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  loadding: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loadding = true;
      state.error = null;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.loadding = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.loadding = false;
      state.error = null;
      localStorage.clear()
    },
  },
});

export const { login, register, logout } = userSlice.actions;
export default userSlice.reducer;
