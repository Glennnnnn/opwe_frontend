import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryByAxios, axiosBaseQueryWithBigInt, axiosPostWithMultiPartQuery } from "../api/fetchBaseQueryHelper";
import type { SorterResult } from 'antd/es/table/interface';
import type { GetProp, TableProps } from 'antd';
import qs from 'qs';

type ColumnsType<T extends object = object> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>['field'];
  sortOrder?: SorterResult<any>['order'];
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}


export const productApi = createApi({
  //equals to the name when we user createSlice
  reducerPath: "product",
  //config async request
  baseQuery: axiosPostWithMultiPartQuery,
  endpoints: builder => ({
    createNewProductWithFile: builder.mutation<any, FormData>({
      query: (formData) => {
        return {
          url: `/productService/product/newProductWithImg`,
          method: `post`,
          body: formData
        }
      }
    }),
    getSingleProductWithImg: builder.query<any, string>({
      query: (productId) =>
        `/productService/product/singleProductWithImg?productId=${productId}`,
    }),
    getProductListWithParams: builder.query<any, TableParams>({
      query: (tableParams) => {
        //const queryString = qs.stringify(tableParams, { addQueryPrefix: true });
        const queryString = "?pageSize=" + tableParams.pagination?.pageSize + "&currentPageIndex=" + tableParams.pagination?.current
        console.log()
        return `/productService/product/productListWithParams${queryString}`;
      }

    }),
    getProductCategoryList: builder.query<any, void>({
      query: () =>
        `/productCategory/allProductCategory`,
    }),
  })
})

export const {
  useCreateNewProductWithFileMutation,
  useGetSingleProductWithImgQuery,
  useGetProductListWithParamsQuery,
  useGetProductCategoryListQuery
} = productApi;