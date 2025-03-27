import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Card, Row, Col, Alert } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetSingleProductWithImgQuery,
} from "@/redux/services/productApi";

interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string; // URL or Base64 string of the image
}

const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { data: data, error, isLoading } = useGetSingleProductWithImgQuery(productId || ''); // Provide a fallback for productId

  const [productData, setProductData] = useState<Product>()
  useEffect(() => {
    if (data) {
      console.log(data.data.productImage)
      setProductData(data.data);
    }
  }, [productData, isLoading]);

  const handleAddProductButtonClick = () => {
    navigate('/addProductPage'); // Replace with your actual route path
  };

  const handleProductDetailPageClick = () => {
    navigate('/productDetailPage/${productId}'); // Replace with the actual route path
  };

  const dataSource: Product[] = [
    {
      productId: '1',
      productName: 'Product 1',
      productPrice: 100,
      productImage: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      productId: '2',
      productName: 'Product 2',
      productPrice: 150,
      productImage: 'https://via.placeholder.com/150', // Example image URL
    },
    // Add more products as needed
  ];
  // Add more columns as needed
  return <>
    <Row>

      {/* <Space direction="vertical" size={16}> */}
      <Col span={12}>
        <Card
          title="Product Name"
          style={{
            width: 600,
            height: 300,
            fontSize: 50
          }}>
          {productData?.productName}
        </Card>
      </Col>
      <Col span={12}>
        <Card
          title='Product Image'
          style={{
            width: 600,
            height: 300
          }}
          cover={
            <img
              alt="example"
              src={productData?.productImage}
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
