import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./combilne_reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
