import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios } from "../api/fetchBaseQueryHelper";

export const statusApi = createApi({
  //equals to the name when we user createSlice
  reducerPath: "status",
  //config async request
  baseQuery: fetchBaseQueryByAxios,
  endpoints: builder => ({
    getAllStatusByGroup: builder.query<any[], string>({
      query: (groupName: string) =>
        `/status/statusByGroup?statusGroup=${groupName}`,
      transformResponse: (responseData: { data: any }) => {
        return responseData.data
      },
    })
  })
})

export const {
  useGetAllStatusByGroupQuery,
} = statusApi;