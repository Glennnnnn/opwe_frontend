import { configureStore } from "@reduxjs/toolkit";
import { tagApi } from "./services/tagApi";
import { statusApi } from "./services/statusApi";
import { productApi } from "./services/productApi";
import { fileApi } from "./services/fileApi";

export const store = configureStore({
  reducer: {
    [tagApi.reducerPath]: tagApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagApi.middleware,
      statusApi.middleware,
      productApi.middleware,
      fileApi.middleware
    ),
  devTools: true,
});