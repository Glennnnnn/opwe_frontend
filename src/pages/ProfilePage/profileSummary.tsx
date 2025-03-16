import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Tag,
  Descriptions,
  Modal,
  Button
} from 'antd';

import {
  LinkedinOutlined,
  GithubOutlined
} from "@ant-design/icons";

import ivtLogin from "@/assets/images/ivt_login.png";
import ivtOrder from "@/assets/images/ivt_order.png";
import akAllocation from "@/assets/images/ak_allocation.png";
import akDashboard from "@/assets/images/ak_dashboard.png";

const project = [
  {
    img: ivtLogin,
    // titlesub: "Pioneer Aluminium Inventory Management System",
    titlesub: "Pioneer Aluminium Inventory Management System",
    title: "Login Page",
    project: "EDA",
    // disciption:
    //   "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: ivtOrder,
    titlesub: "Pioneer Aluminium Inventory Management System",
    title: "Orders Page",
    project: "EDA",
  },
  {
    img: akDashboard,
    titlesub: "AK Travel Management System",
    title: "Dashboard Page",
    disciption:
      "A dashboard for displaying the number of tourists and the number of different tour groups across different dimensions of year, month, and day.",
    project: "EDA",
  },
  {
    img: akAllocation,
    titlesub: "AK Travel Management System",
    title: "Allocation Page",
    // disciption:
    //   "Page for ",
    project: "EDA",
  },
];

const ProfileSummary: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const showImageModal = (image: string) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage('');
  };

  return <div>
    <Row gutter={[24, 0]} style={{
      margin: '0px 5%'
    }}>
      <Col span={8} style={{ height: '400px' }}>
        <Card
          bordered={false}
          title={<p className="font-semibold m-0">Skills & Abilities</p>}
          className="header-solid h-full card-profile-information"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          style={{ height: '400px' }}
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
            </Tag>
            <Tag bordered={false} color="gold">
              MongoDB
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
              RabbitMQ
            </Tag>
            <Tag bordered={false} color="lime">
              RocketMQ
            </Tag>
            <Tag bordered={false} color="purple">
              GraphQL
            </Tag>
            <Tag bordered={false} color="magenta">
              Netty
            </Tag><br />
            Frontend Technologies: <Tag bordered={false} color="gold">
              React
            </Tag>
            <Tag bordered={false} color="lime">
              Redux
            </Tag>
            <Tag bordered={false} color="cyan">
              SASS
            </Tag>
            <Tag bordered={false} color="green">
              Ant Design
            </Tag><br />
            Cloud: <Tag bordered={false} color="gold">
              AWS
            </Tag>
            <Tag bordered={false} color="lime">
              Docker
            </Tag>
            <Tag bordered={false} color="purple">
              Jenkins
            </Tag>
            <Tag bordered={false} color="magenta">
              JIRA
            </Tag>
            <Tag bordered={false} color="gold">
              Confluence
            </Tag>
            <Tag bordered={false} color="lime">
              GitHub
            </Tag><br />
            {" "}
          </p>

        </Card>
      </Col>
      <Col lg={8} style={{ height: '400px' }}>
        <Card
          bordered={false}
          title={<p className="font-semibold m-0">Profile Information</p>}
          className="header-solid h-full card-profile-information"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          style={{ height: '400px' }}
        >
          <div
            style={{
              height: '320px',       // Fixed height for the scrollable area
              overflowY: 'auto',     // Enable vertical scrolling
              paddingTop: 0,
              paddingBottom: 16,
            }}
          >
            <p className="text-dark">
              {" "}
              Passionate Full-Stack Developer with 4 years of experience in designing and developing scalable, high-performance backend solutions using
              Java, Spring Boot, Python, React, Redux, MySQL, PostgreSQL and Redis.
              Skilled in microservices architecture, efficient database design, system performance optimization and modern frontend technologies.
              Eager to leverage my expertise to drive innovation and efficiency in full-stack development.{" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="Contact Information">
              <Descriptions.Item label="Mobile" span={3}>
                0426364586
              </Descriptions.Item>
              <Descriptions.Item label="Email" span={3}>
                glenn.jialin@gmail.com
              </Descriptions.Item>
              <Descriptions.Item label="Location" span={3}>
                Clayton South, Melbourne, Victoria
              </Descriptions.Item>
              {/* <Descriptions.Item label="Social" span={3}>
              <a href="https://www.linkedin.com/in/jialin-liu-ab3585126/" className="mx-5 px-5">
                {<LinkedinOutlined />}
              </a>
              <a href="https://github.com/Glennnnnn" className="mx-5 px-5">
                {<GithubOutlined style={{ color: "#344e86" }} />}
              </a>
            </Descriptions.Item> */}
            </Descriptions>
            <Tag icon={<LinkedinOutlined />}
              color="#55acee"
              onClick={() => { window.location.href = "https://www.linkedin.com/in/jialin-liu-ab3585126/" }}
              style={{
                cursor: 'pointer',  // Hand cursor on hover
                transition: 'background-color 0.3s',
              }}
            >
              LinkedIn
            </Tag>
            <Tag icon={<GithubOutlined />}
              color="#344e86"
              onClick={() => { window.location.href = 'https://github.com/Glennnnnn' }}
              style={{
                cursor: 'pointer',  // Hand cursor on hover
                transition: 'background-color 0.3s',
              }}
            >
              GitHub
            </Tag>
          </div>
        </Card>
      </Col>
      <Col lg={8} className="mb-24" style={{ height: '400px' }}>
        <Card
          bordered={false}
          title={<p className="font-semibold m-0">Work Experience</p>}
          className="header-solid h-full card-profile-information"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          style={{ height: '400px' }}
        >
          <div
            style={{
              height: '320px',       // Fixed height for the scrollable area
              overflowY: 'auto',     // Enable vertical scrolling
              paddingTop: 0,
              paddingBottom: 16,
            }}
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
            AK Travel Management System.<br />
            WeGroupCarPool Management System.
          </div>
        </Card>
      </Col>
    </Row>
    <Card
      bordered={false}
      className="project-card"
      title={
        <>
          <p style={{ height: '25px', margin: '0px' }}>Projects</p>
        </>
      }
      style={{
        margin: "0px 5%"
      }}
    >
      <Row gutter={[24, 24]}>
        {project.map((p, index) => (
          <Col span={24} md={12} xl={6} key={index}>
            <Card
              bordered={false}
              className="card-project"
              cover={<img
                alt="example"
                src={p.img}
                onClick={() => {
                  showImageModal(p.img)
                }}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover', /* Options: cover, contain, fill, etc. */
                  cursor: 'pointer'
                }}
              />}
            >
              <div className="card-tag"><strong>{p.titlesub}</strong></div>
              <h5>{p.title}</h5>
              <p>{p.disciption}</p>
              {/* <Row gutter={[6, 0]} className="card-footer">
                <Col span={12}>
                  {<a onClick={() => { navigate("/projectDetailPage?", { state: { pageId: 'EDA' } }) }}>See Detail</a>}
                </Col>
              </Row> */}
            </Card>
          </Col>
        ))}
      </Row>
    </Card>

    <Modal
      open={isModalVisible}
      onCancel={handleModalClose}
      footer={null} // Remove default footer
      centered // Center the modal
      width={2400} // Set custom width
      style={{ padding: 0 }}
    >
      <img
        alt="Detailed"
        src={selectedImage}
        style={{ width: '100%' }}
      />
    </Modal>

  </div>
}

export default ProfileSummary