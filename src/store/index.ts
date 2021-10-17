import { configureStore } from "@reduxjs/toolkit";

import uiStateReducer from "./slices/uiState";
import todoReducer from "./slices/todo";

const store = configureStore({
  reducer: { uiState: uiStateReducer, todo: todoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
