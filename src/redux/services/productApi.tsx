import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios } from "@/redux/api/fetchBaseQueryHelper";

// export const productApi = createApi({
//   reducerPath: "product",
//   baseQuery: fetchBaseQueryByAxios,
//   endpoints: builder => ({
//     getProduct
//   })
// })