"use client";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userSlice";
import casesReducer from "./reducers/casesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cases: casesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
