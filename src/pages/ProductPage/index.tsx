import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';


interface Product {
  productId: string;
  productName: string;
  price: number;
  image: string; // URL or Base64 string of the image
}

const ProductListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProductButtonClick = () => {
    navigate('/addProductPage'); // Replace with your actual route path
  };

  const handleProductDetailPageClick = () => {
    navigate('/productDetailPage'); // Replace with your actual route path
  };

  const dataSource: Product[] = [
    {
      productId: '1',
      productName: 'Product 1',
      price: 100,
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      productId: '2',
      productName: 'Product 2',
      price: 150,
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    // Add more products as needed
  ];

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
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
    <Button type="primary" onClick={handleAddProductButtonClick}>
      Go to Target Page
    </Button>
    <Button type="primary" onClick={handleProductDetailPageClick}>
      Go to Target Page
    </Button>
    <Table dataSource={dataSource} columns={columns} />;

  </>

}

export default ProductListPage;
