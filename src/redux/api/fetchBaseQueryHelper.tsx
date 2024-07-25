import { fetchBaseQuery, FetchBaseQueryArgs, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import JSONbig from 'json-bigint'
import BigNumber from 'bignumber.js';
import { Result } from "antd";

export const baseURL = "http://localhost:8081"

export const baseQuery = fetchBaseQuery({ baseUrl: baseURL });

const convertLongsToBigInts = (data: any): any => {
  try {
    return JSONbig.parse(data);
  } catch (err) {
    console.error("Error parsing data with JSONbig:", err);
    return data;
  }
};

const serializeBigNumbers = (data: any): any => {
  if (data instanceof BigNumber) {
    return data.toString();
  }
  if (Array.isArray(data)) {
    return data.map(serializeBigNumbers);
  }
  if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, serializeBigNumbers(value)])
    );
  }
  return data;
};

export const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  transformResponse: [function (data) {
    try {
      return JSONbig.parse(data)
    } catch (err) {
      return data
    }
  }],
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


export const axiosBaseQueryWithBigInt = (): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  return async (args, api, extraOptions) => {
    const { url, method = 'GET', body = null, params = {}, headers = {} } = typeof args === 'string' ? { url: args } : args;

    try {
      const config: AxiosRequestConfig = {
        url: `${baseURL}${url}`,
        method,
        data: body,
        params,
        headers: {
          'Content-Type': 'application/json',
          ...headers as Record<string, string>,
        },
        transformResponse: [(data) => convertLongsToBigInts(data)],
      };

      const response: AxiosResponse = await axios(config);
      const serializedData = serializeBigNumbers(response.data);
      console.log(serializedData)
      return { data: serializedData };
    } catch (axiosError) {
      let err = axiosError as any;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        }
      };
    }
  };
};