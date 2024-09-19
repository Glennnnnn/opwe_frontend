import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosPostWithMultiPartQuery } from "../api/fetchBaseQueryHelper";


export const fileApi = createApi({
  reducerPath: "file",
  baseQuery: axiosPostWithMultiPartQuery,
  endpoints: builder => ({
    createNewFile: builder.mutation<any, FormData>({
      query: (formData) => {
        return {
          url: `/fileService/newFile`,
          method: `post`,
          body: formData
        }
      }
    })
  })
})

export const {
  useCreateNewFileMutation,
} = fileApi;