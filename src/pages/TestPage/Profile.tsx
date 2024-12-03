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
import { useState } from "react";

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
  Tag
} from "antd";

import {
  VerticalAlignTopOutlined,
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined
} from "@ant-design/icons";

import "./profile.scss"

import facialImg from "@/assets/images/facialImg.jpg"

import profilavatar from "@/assets/images/face-1.jpg";
import convesionImg from "@/assets/images/face-3.jpg";
import convesionImg2 from "@/assets/images/face-4.jpg";
import convesionImg3 from "@/assets/images/face-5.jpeg";
import convesionImg4 from "@/assets/images/face-6.jpeg";
import convesionImg5 from "@/assets/images/face-2.jpg";
import project1 from "@/assets/images/home-decor-1.jpeg";
import project2 from "@/assets/images/home-decor-2.jpeg";
import project3 from "@/assets/images/home-decor-3.jpeg";

function Profile() {
  const [imageURL, setImageURL] = useState<string>();
  const [, setLoading] = useState(false);

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

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];

  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

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
            <Tabs defaultActiveKey="1" className="profile-tabs">
              <Tabs.TabPane tab="OVERVIEW" key="1">
                {/* Overview content here */}
              </Tabs.TabPane>
              <Tabs.TabPane tab="TEAMS" key="2">
                {/* Teams content here */}
              </Tabs.TabPane>
              <Tabs.TabPane tab="PROJECTS" key="3">
                {/* Projects content here */}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Card>
      </div>
      <Row gutter={[24, 0]} style={{
        margin: "0px 200px"
      }}>
        <Col span={24} md={8} className="mb-24 ">
          <Card
            bordered={false}
            title={<p className="font-semibold m-0">Skills & Abilities</p>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {" "}
              Programming language:
              <Tag bordered={false} color="red">
                Java
              </Tag>
              <Tag bordered={false} color="volcano">
                Javascript/Typescript
              </Tag>
              <Tag bordered={false} color="orange">
                Python
              </Tag>
              <Tag bordered={false} color="geekblue">
                C#
              </Tag> <br />
              Databases: <Tag bordered={false} color="blue">
                MySQL
              </Tag>
              <Tag bordered={false} color="cyan">
                PostgreSQL
              </Tag>
              <Tag bordered={false} color="green">
                Redis
              </Tag><br />
              Backend Technologies:
              <Tag bordered={false} color="purple">
                Springboot
              </Tag>
              <Tag bordered={false} color="magenta">
                SpringCloud
              </Tag>
              <Tag bordered={false} color="gold">
                .Net
              </Tag>
              <Tag bordered={false} color="lime">
                Fastapi
              </Tag><br />
              Frontend Technologies: <Tag bordered={false} color="gold">
                React
              </Tag>
              <Tag bordered={false} color="lime">
                Redux
              </Tag><br />
              Message-oriented middleware: <Tag bordered={false} color="gold">
                .Rabbitmq
              </Tag>
              <Tag bordered={false} color="lime">
                Rocketmq
              </Tag><br />
              Tools: <Tag bordered={false} color="purple">
                Jenkins
              </Tag>
              <Tag bordered={false} color="magenta">
                Docker
              </Tag>
              <Tag bordered={false} color="gold">
                AWS
              </Tag>
              <Tag bordered={false} color="lime">
                Nginx
              </Tag><br />
              {" "}
            </p>

          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24" >
          <Card
            bordered={false}
            title={<p className="font-semibold m-0">Profile Information</p>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {" "}
              Passionate software developer with 4
              years of experience in designing, developing, and maintaining robust applications.
              Specializing in Spring, React. Worked on a wide range of projects,
              from building scalable backend systems to developing user-friendly front-end interfaces.{" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="Contact Information">
              <Descriptions.Item label="Mobile" span={3}>
                (61) 426364586
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                ljlsjcnh649692327@gmail.com
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                Melbourne, Victoria
              </Descriptions.Item>
              <Descriptions.Item label="Social" span={3}>
                <a href="https://www.linkedin.com/in/jialin-liu-ab3585126/" className="mx-5 px-5">
                  {<LinkedinOutlined />}
                </a>
                <a href="https://github.com/Glennnnnn" className="mx-5 px-5">
                  {<GithubOutlined style={{ color: "#344e86" }} />}
                </a>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<p className="font-semibold m-0">Work Experience</p>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              <strong>
                {" "}
                2020.08 - 2023.08
                Postal Savings Bank of China <br />
                Backend Developer, Technical Manager.{" "}
              </strong>
            </p>
            Enterprise Messaging Architecture (EDA) Project.<br />
            Wealth Management Middle Platform Project.<br />
            Personal Wealth Management Project.
            <hr className="my-25" />
            <p className="text-dark">
              <strong>
                {" "}
                2023.08 - Current
                Freelance Developer <br />
                Full-Stack developer.{" "}
              </strong>
            </p>
            Pioneer Aluminium Inventory Management System.<br />
            AK Travel Backend Management System.<br />
            WeGroupCarPool Management System.

          </Card>
        </Col>
      </Row>
      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">Projects</h6>
            <p>Architects design houses</p>
          </>
        }
        style={{
          margin: "0px 20px"
        }}
      >
        <Row gutter={[24, 24]}>
          {project.map((p, index) => (
            <Col span={24} md={12} xl={6} key={index}>
              <Card
                bordered={false}
                className="card-project"
                cover={<img alt="example" src={p.img} />}
              >
                <div className="card-tag">{p.titlesub}</div>
                <h5>{p.title}</h5>
                <p>{p.disciption}</p>
                <Row gutter={[6, 0]} className="card-footer">
                  <Col span={12}>
                    <Button type="text">VIEW PROJECT</Button>
                  </Col>
                  <Col span={12} className="text-right">
                    <Avatar.Group className="avatar-chips">
                      <Avatar size="small" src={profilavatar} />
                      <Avatar size="small" src={convesionImg} />
                      <Avatar size="small" src={convesionImg2} />
                      <Avatar size="small" src={convesionImg3} />
                    </Avatar.Group>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
          <Col span={24} md={12} xl={6}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader projects-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageURL ? (
                <img src={imageURL} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Profile;
