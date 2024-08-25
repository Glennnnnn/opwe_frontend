import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';


interface Product {
  productId: string;
  name: string;
  price: number;
  image: string; // URL or Base64 string of the image
}

const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddProductButtonClick = () => {
    navigate('/addProductPage'); // Replace with your actual route path
  };

  const handleProductDetailPageClick = () => {
    navigate('/productDetailPage/${productId}'); // Replace with your actual route path
  };

  const dataSource: Product[] = [
    {
      productId: '1',
      name: 'Product 1',
      price: 100,
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      productId: '2',
      name: 'Product 2',
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Product) => (
        <a
          onClick={() => navigate(`/product/${record.productId}`)}
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
    <Row>
      {/* <Space direction="vertical" size={16}> */}
      <Col span={12}>
        <Card
          // title="Default size card"
          style={{
            width: 600,
            height: 300,
            fontSize: 50
          }}>
          product name
        </Card>
      </Col>
      <Col span={12}>
        <Card
          style={{
            width: 600,
            height: 300
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              style={{
                width: '100%',
                height: '100%', // Adjust the height as needed
                objectFit: 'cover' // This ensures the image covers the area without distortion
              }}
            />
          }>
          {/* <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p> */}
        </Card>
      </Col>
      {/* </Space> */}
    </Row>
  </>

}

export default ProductDetailPage;
