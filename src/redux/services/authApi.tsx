import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { axiosPostWithMultiPartQuery } from "../api/fetchBaseQueryHelper";
import { setAuth, setError } from "../slices/authSlice";


interface Credentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    // Add any other user fields expect from the response
  };
  token: string; // Token returned from login
}

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: axiosPostWithMultiPartQuery,
  endpoints: (builder) => ({
    userLogin: builder.mutation<LoginResponse, Credentials>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (responseData: { data: any }) => {
        return responseData.data
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Dispatch an action to set the user state in your auth slice
          dispatch(setAuth(data.user)); // Assuming setUser is an action from your auth slice
          // Optionally store the token in localStorage or cookies
          localStorage.setItem('token', data.token);
        } catch (error) {
          dispatch(setError(error as string))
          console.error('Login failed', error);
        }
      },
    })

  })
})