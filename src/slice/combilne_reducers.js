import { combineReducers } from "@reduxjs/toolkit";


import userSlice from "./userSlice";
import homeSlice from "./homeSlice";
import searchHomeSlice from "./searchHomeSlice";

const rootReducer = combineReducers({
  user: userSlice,
  home: homeSlice,
  search:searchHomeSlice
});

export default rootReducer;
