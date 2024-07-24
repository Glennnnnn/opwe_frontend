import { configureStore } from "@reduxjs/toolkit";
import { tagApi } from "./services/tagApi";
import { statusApi } from "./services/statusApi";

export const store = configureStore({
  reducer: {
    [tagApi.reducerPath]: tagApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagApi.middleware,
      statusApi.middleware
    ),
  devTools: true,
});