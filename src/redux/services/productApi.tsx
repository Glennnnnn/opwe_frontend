import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios, axiosBaseQueryWithBigInt, axiosPostWithMultiPartQuery } from "../api/fetchBaseQueryHelper";

export const productApi = createApi({
  //equals to the name when we user createSlice
  reducerPath: "status",
  //config async request
  baseQuery: axiosPostWithMultiPartQuery,
  endpoints: builder => ({
    sendNewProductWithFile: builder.mutation<any, FormData>({
      query: (initialPost) => {
        return {
          url: `/productService/product/newProductWithImg`,
          method: `post`,
          body: initialPost
        }
      }
    })
  })
})

export const {
  useSendNewProductWithFileMutation
} = productApi;