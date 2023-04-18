import { combineReducers } from "@reduxjs/toolkit";


import userSlice from "./userSlice";
import homeSlice from "./homeSlice";

const rootReducer = combineReducers({
  user: userSlice,
  home: homeSlice,
});

export default rootReducer;
