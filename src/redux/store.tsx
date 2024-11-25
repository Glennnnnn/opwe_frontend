import { configureStore } from "@reduxjs/toolkit";
import { tagApi } from "./services/tagApi";
import { statusApi } from "./services/statusApi";
import { productApi } from "./services/productApi";
import { fileApi } from "./services/fileApi";
import { authApi } from "./services/authApi";
import authReducer from "./slices/authSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [tagApi.reducerPath]: tagApi.reducer,
    [statusApi.reducerPath]: statusApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tagApi.middleware,
      statusApi.middleware,
      productApi.middleware,
      fileApi.middleware,
      authApi.middleware
    ),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;