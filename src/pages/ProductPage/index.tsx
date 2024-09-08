import React, { useState, useEffect } from 'react';
import { Table, Button, Card } from 'antd';
import type { GetProp, TableProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { SorterResult } from 'antd/es/table/interface';
import {
  useGetProductListWithParamsQuery,
} from "@/redux/services/productApi";

import {
  useGetProductCategoryListQuery,
} from "@/redux/services/productApi";
import './index.scss';

type ColumnsType<T extends object = object> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string; // URL or Base64 string of the image
}

interface ProductCategory {
  productCategoryId: string;
  productCategoryName: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>['field'];
  sortOrder?: SorterResult<any>['order'];
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}

const ProductListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProductButtonClick = () => {
    navigate('/addProductPage'); // Replace with your actual route path
  };

  const handleProductDetailPageClick = () => {
    navigate('/productDetailPage'); // Replace with your actual route path
  };

  const handleTableChange: TableProps<Product>['onChange'] = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // // `dataSource` is useless since `pageSize` changed
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   setData([]);
    // }
  };
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const { data: baseProductListData, isLoading: productListDataLoading } = useGetProductListWithParamsQuery(tableParams)
  const { data: baseProductCategoryListData, isLoading: productCategoryListDataLoading } = useGetProductCategoryListQuery()
  const [productList, setProductList] = useState<Product[]>([])
  const [productCategoryList, setProductCategoryList] = useState<ProductCategory[]>([])



  useEffect(() => {
    //console.log("useEffect called", { baseProductListData, tableParams });
    // while (isLoading) {
    //   console.log("Loading...");
    // }
    if (baseProductListData) {
      //console.log(baseProductListData.data)
      setProductList(baseProductListData.data.productResultList);
      setProductCategoryList(baseProductCategoryListData.data);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: baseProductListData.data.count,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
      console.log(baseProductListData.data.count)
    }

  }, [
    productListDataLoading,
    productCategoryListDataLoading,
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);


  const dataSource: Product[] = [
    {
      productId: '7225017727965073408',
      productName: 'Product 1',
      productPrice: 100,
      productImage: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      productId: '7225020561393586176',
      productName: 'Product 2',
      productPrice: 150,
      productImage: 'https://via.placeholder.com/150', // Example image URL
    },
    // Add more products as needed
  ];

  const columns = [
    {
      title: 'Image',
      dataIndex: 'productImage',
      key: 'image',
      render: (text: string) => <img src={text} alt="Product" style={{ width: 50, height: 50 }} />, // Adjust size as needed
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
      render: (text: string, record: Product) => (
        <a
          onClick={() => navigate(`/productDetailPage/${record.productId}`)}
          style={{ cursor: 'pointer', color: 'blue' }}
        >
          {text}
        </a>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price}`, // Optional formatting
    },
  ];
  // Add more columns as needed
  return <>
    <Card
      style={{
        height: '8%',
        padding: '2px 2px',
        display: 'flex',            // Flexbox for alignment
        alignItems: 'center',       // Center vertically
        justifyContent: 'flex-end'
      }}>
      <Button type="primary" onClick={handleAddProductButtonClick} >
        Go to Target Page
      </Button>
      <Button type="primary" onClick={handleProductDetailPageClick} style={{ marginLeft: '8px' }}>
        Go to Target Page
      </Button>
    </Card>
    <div className="table-container">
      <Table
        // style={{ height: '90%' }}
        dataSource={productList}
        columns={columns}
        onChange={handleTableChange}
        pagination={tableParams.pagination}
      />
    </div>
  </>

}

export default ProductListPage;
