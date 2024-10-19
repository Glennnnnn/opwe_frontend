import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other user fields here
}

export interface AuthState {
  user: User
  token: string | null
  error: string | null
  isSuccess: boolean,
  isLoading: boolean,
}

const initialState: AuthState = {
  user: localStorage.getItem('user') ?
    JSON.parse(localStorage.getItem('user') as string) :
    null,
  token: localStorage.getItem("token") || null,
  error: null,     // Initialize token as undefined
  isSuccess: false,
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
})

export default authSlice.reducer;

export const { setAuth, setError } = authSlice.actions