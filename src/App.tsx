// import React from 'react';
// import logo from './logo.svg';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Icon, {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, ConfigProvider } from 'antd';
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
import InstructionListPage from './pages/InstructionPage/index';
import AddInstructionVideoPage from './pages/InstructionPage/addInstructionVideoPage';
import Profile from './pages/ProfilePage/profile';
import ProjectDetailPage from './pages/ProfilePage/profileDetailPage';
import logo from '@/assets/opweLogo.png'

const layoutStyle = {
  borderRadius: 0,
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
  const token = useSelector((state: RootState) => state.auth.token)

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          // colorPrimary: '#00b96b',
          borderRadius: 0,
          // Alias Token
          colorBgContainer: 'white',
        },
      }}
    >
      {/* <p>{token}</p> */}
      <div className="App">
        <Layout style={layoutStyle}>
          <Header style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px'
          }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
                flex: 1,
                minWidth: 0,
              }}
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
          </Header>
          <Content
            style={{
              // margin: '8px 8px',
              padding: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              backgroundColor: '#f5f5f5'
            }}
          >
            <Routes>
              <Route path="/" element={token ? <HomePage /> : <Navigate to="/loginPage" />} />
              <Route path="/blogPage" element={token ? <BlogPage /> : <Navigate to="/loginPage" />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="/consentPage" element={token ? <ConsentPage /> : <Navigate to="/loginPage" />} />
              <Route path="/consentListPage" element={token ? <BlogListPage /> : <Navigate to="/loginPage" />} />
              <Route path="/productPage" element={token ? <ProductListPage /> : <Navigate to="/loginPage" />} />
              <Route path="/addProductPage" element={token ? <AddProductPage /> : <Navigate to="/loginPage" />} />
              <Route path="/productDetailPage/:productId" element={token ? <ProductDetailPage /> : <Navigate to="/loginPage" />} />
              <Route path="/introductionPage" element={token ? <InstructionListPage /> : <Navigate to="/loginPage" />} />
              <Route path="/introductionPage/addInstructionVideoPage" element={token ? <AddInstructionVideoPage /> : <Navigate to="/loginPage" />} />
              <Route path="/testPage" element={<Profile />} />
              <Route path="/projectDetailPage" element={<ProjectDetailPage />} />

              {/* 
              <Route path="/" element={<HomePage />} />
              <Route path="/blogPage" element={<BlogPage />} />
              <Route path="/loginPage" element={<LoginPage />} />
              <Route path="/consentPage" element={<ConsentPage />} />
              <Route path="/consentListPage" element={<BlogListPage />} />
              <Route path="/productPage" element={<ProductListPage />} />
              <Route path="/addProductPage" element={<AddProductPage />} />
              <Route path="/productDetailPage/:productId" element={<ProductDetailPage />} />
              <Route path="/introductionPage" element={<InstructionListPage />} />
              <Route path="/introductionPage/addInstructionVideoPage" element={<AddInstructionVideoPage />} /> */}
            </Routes>
          </Content>

        </Layout>
      </div >
    </ConfigProvider>
  );
}

export default App;
