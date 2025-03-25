"use client";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userSlice";
import casesReducer from "./reducers/casesSlice";
import dataReducer from "./reducers/dataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cases: casesReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
