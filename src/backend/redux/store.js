import { configureStore } from "@reduxjs/toolkit";
import AuthSclice from "./reducers/auth";

export const store = configureStore({
  reducer: {
    auth: AuthSclice,
  },
});
