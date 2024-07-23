import { configureStore } from "@reduxjs/toolkit";
import { tagApi } from "./services/tagApi";

export const store = configureStore({
  reducer: {
    [tagApi.reducerPath]: tagApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagApi.middleware,
    ),
  devTools: true,
});