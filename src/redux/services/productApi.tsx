import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios, axiosBaseQueryWithBigInt, axiosPostWithMultiPartQuery } from "../api/fetchBaseQueryHelper";

export const productApi = createApi({
  //equals to the name when we user createSlice
  reducerPath: "product",
  //config async request
  baseQuery: axiosPostWithMultiPartQuery,
  endpoints: builder => ({
    sendNewProductWithFile: builder.mutation<any, FormData>({
      query: (formData) => {
        return {
          url: `/productService/product/newProductWithImg`,
          method: `post`,
          body: formData
        }
      }
    }),
    getSingleProductWithImg: builder.query<any, string>({
      query: (productId) =>
        `/productService/product/singleProductWithImg?productId=${productId}`,
    }),
  })
})

export const {
  useSendNewProductWithFileMutation,
  useGetSingleProductWithImgQuery
} = productApi;