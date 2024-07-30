import { configureStore } from "@reduxjs/toolkit";
import { tagApi } from "./services/tagApi";
import { statusApi } from "./services/statusApi";
import { productApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    [tagApi.reducerPath]: tagApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagApi.middleware,
      statusApi.middleware,
      productApi.middleware
    ),
  devTools: true,
});