import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosPostWithMultiPartQuery, fetchBaseQueryByAxios } from "../api/fetchBaseQueryHelper";
import { setAuth, setError } from "../slices/authSlice";


interface Credentials {
  userName: string;
  userPassword: string;
}

interface User {
  userId: string;
  userEmail: string;
  userPhone: string;
  userRoleName: string;
  // Add any other user fields here
}

interface LoginResponse {
  code: number
  msg: string
  data: {
    loginUserResDto: User
    token: string; // Token returned from login
  }
}

export interface AuthState {
  user: User
  token: string | null
  error: string | null
  isSuccess: boolean,
  isLoading: boolean,
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQueryByAxios,
  endpoints: (builder) => ({
    userLogin: builder.mutation<LoginResponse, Credentials>({
      query: (credentials) => ({
        url: 'authService/login',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (responseData: LoginResponse) => {
        return responseData
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const responseData = await queryFulfilled;
          if (responseData.data.code == 200) {
            const authState: AuthState = {
              user: responseData.data.data.loginUserResDto,
              token: responseData.data.data.token,
              error: null,
              isSuccess: true,
              isLoading: false,
            }
            dispatch(setAuth(authState));
            localStorage.setItem('token', responseData.data.data.token);
          } else {
            dispatch(setError(responseData.data.msg))
          }
          // Dispatch an action to set the user state in your auth slice // Assuming setUser is an action from your auth slice
          // Optionally store the token in localStorage or cookies


        } catch (error) {
          dispatch(setError(error as string))
          console.error('Login failed', error);
        }
      },
    })

  })
})

export const { useUserLoginMutation } = authApi