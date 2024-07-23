import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Axios from "axios";

export const baseURL = "http://localhost:8081"

export const baseQuery = fetchBaseQuery({ baseUrl: baseURL });

export const api = Axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export const axiosBasePostQuery = async ({ url, data }: { url: string; data: any }) => {
  const response = await api.post(url, data);
  return response;
};

export const fetchBaseQueryByAxios = fetchBaseQuery({
  baseUrl: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
  // },
  // prepareHeaders: (headers, { getState } : { getState: () => RootState }) => {
  // 	const token = getState().auth.token;

  // 	// If we have a token set in state, let's assume that we should be passing it.
  // 	if (token) {
  // 		headers.set("authorization", `Bearer ${token}`);
  // 	}

  // 	return headers;
  // },
});

export const fetchBaseQueryByAxiosFormData = fetchBaseQuery({
  baseUrl: baseURL,
  // prepareHeaders: (headers, { getState }) => {
  // 	const token = getState().auth.token;

  // 	// If we have a token set in state, let's assume that we should be passing it.
  // 	if (token) {
  // 		headers.set("authorization", `Bearer ${token}`);
  // 	}

  // 	return headers;
  // },
});