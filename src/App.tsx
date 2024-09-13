// import React from 'react';
// import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import ConsentPage from './pages/ConsentPage';
import BlogListPage from './pages/BlogListPage';
import AddProductPage from './pages/ProductPage/addProductPage';
import ProductListPage from './pages/ProductPage/index';
import ProductDetailPage from './pages/ProductPage/productDetailPage';
import InstructionListPage from './pages/InstructionPage/index'
import AddInstructionVideoPage from './pages/InstructionPage/addInstructionVideoPage'


const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Header, Sider, Content } = Layout;
  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to="/">Homepage</Link>,
              },
              {
                key: '2',
                icon: <ShoppingOutlined />,
                label: <Link to="/productPage">Product</Link>,
              },
              {
                key: '3',
                icon: <ShoppingOutlined />,
                label: <Link to="/introductionPage">Introduction</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                marginLeft: 16
              }}
            />
          </Header>
          <Content
            style={{
              margin: '8px 8px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogPage" element={<BlogPage />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="/consentPage" element={<ConsentPage />} />
              <Route path="/consentListPage" element={<BlogListPage />} />
              <Route path="/productPage" element={<ProductListPage />} />
              <Route path="/addProductPage" element={<AddProductPage />} />
              <Route path="/productDetailPage/:productId" element={<ProductDetailPage />} />
              <Route path="/introductionPage" element={<InstructionListPage />} />
              <Route path="/introductionPage/addInstructionVideoPage" element={<AddInstructionVideoPage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div >
  );
}

export default App;
