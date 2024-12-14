/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  Descriptions,
  Avatar,
  Upload,
  message,
  Typography,
  Tabs,
  Tag,
  Modal,
  TabsProps
} from "antd";

import {
  VerticalAlignTopOutlined,
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined
} from "@ant-design/icons";

import "./profile.scss"

import ProfileSummary from "./profileSummary";
import ProfileProject from "./profileProject";
import ProfileResume from "./profileResume";

import facialImg from "@/assets/images/facialImg.jpg"
import profilavatar from "@/assets/images/face-1.jpg";
import convesionImg from "@/assets/images/face-3.jpg";
import convesionImg2 from "@/assets/images/face-4.jpg";
import convesionImg3 from "@/assets/images/face-5.jpeg";
import convesionImg4 from "@/assets/images/face-6.jpeg";
import convesionImg5 from "@/assets/images/face-2.jpg";


const Profile: React.FC = () => {
  const [imageURL, setImageURL] = useState<string>();
  const [, setLoading] = useState(false);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');
  const [activePage, setActivePage] = useState<string>('summaryPage');

  const { Title, Text } = Typography;

  const getBase64 = (img: File, callback: any) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl: string) => {
        setLoading(false);
        setImageURL(imageUrl);
      });
    }
  };

  const tabItems: TabsProps['items'] = [
    {
      key: 'summaryPage',
      label: 'Summary',
    },
    {
      key: 'projectPage',
      label: 'Projects',
    },
    {
      key: 'profileResume',
      label: 'Resume',
    },
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );


  const renderSubpage = () => {
    switch (activePage) {
      case 'summaryPage':
        return <ProfileSummary />;
      case 'projectPage':
        return <ProfileProject />;
      case 'profileResume':
        return <ProfileResume />;
      default:
        return <div>Select a subpage</div>;
    }
  };


  return (
    <>
      {/* <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + bgProfile + ")" }}
      ></div> */}
      <div className="profile-container">
        <div className="background-image">
        </div>
        <Card className="profile-card">
          <div className="profile-card-body">
            {/* Profile Info */}
            <div className=".profile-info">
              <Avatar size={80} icon={<UserOutlined />} src={facialImg} />
              <div className="profile-info-text">
                <Title level={3} className="profile-info-title">Jialin Liu</Title>
                <Text type="secondary">Backend / Full-stack developer</Text>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultActiveKey="1" className="profile-tabs" items={tabItems} onChange={(key: string) => { setActivePage(key) }} />
          </div>
        </Card>
      </div>
      <div>
        {renderSubpage()}
      </div>
    </>
  )
}

export default Profile;
