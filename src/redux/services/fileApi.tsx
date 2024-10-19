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
    }),
    queryFileById: builder.query<any, string>({
      query: (fileId: string) => ({
        url: `/fileService/newFile?fileId=${fileId}`,
        method: `get`,
      }),
      transformResponse: (responseData: { data: any }) => {
        return responseData.data
      },
    })
  })
})

export const {
  useCreateNewFileMutation,
} = fileApi;