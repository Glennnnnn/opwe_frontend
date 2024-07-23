import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios } from "@/redux/api/fetchBaseQueryHelper";

export const tagApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQueryByAxios,
  endpoints: builder => ({
    getAllTagGroups: builder.query<any[], void>({
      query: () =>
        `/tags/uniqueTags`,
      transformResponse: (responseData: { data: any }) => {
        return responseData.data;
      },
    })
  })
})

export const {
  useGetAllTagGroupsQuery,
} = tagApi;