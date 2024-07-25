import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios, axiosBaseQueryWithBigInt } from "../api/fetchBaseQueryHelper";

export const statusApi = createApi({
  //equals to the name when we user createSlice
  reducerPath: "status",
  //config async request
  baseQuery: axiosBaseQueryWithBigInt(),
  endpoints: builder => ({
    getAllStatusByGroup: builder.query<any[], string>({
      query: (groupName: string) =>
        `/status/statusByGroup?statusGroup=${groupName}`,
      // query: (groupName: string) => ({
      //   url: `/status/statusByGroup?statusGroup=${groupName}`,
      //   method: `get`
      //   }),
      transformResponse: (responseData: { data: any }) => {
        return responseData.data
      },
    })
  })
})

export const {
  useGetAllStatusByGroupQuery,
} = statusApi;