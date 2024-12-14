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
    title: "Login Page"
    // disciption:
    //   "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: ivtOrder,
    titlesub: "Pioneer Aluminium Inventory Management System",
    title: "Orders Page",
  },
  {
    img: akDashboard,
    titlesub: "Project #3",
    title: "Minimalist",
    disciption:
      "Different people have different taste, and various types of music, Zimbali Resort",
  },
  {
    img: akAllocation,
    titlesub: "Project #3",
    title: "Minimalist",
    disciption:
      "Different people have different taste, and various types of music, Zimbali Resort",
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
      <Col lg={8} style={{ height: '400px' }}>
        <Card
          bordered={false}
          title={<p className="font-semibold m-0">Profile Information</p>}
          className="header-solid h-full card-profile-information"
          bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          style={{ height: '400px' }}
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
              <Row gutter={[6, 0]} className="card-footer">
                <Col span={12}>
                  <Button type="text">VIEW PROJECT</Button>
                </Col>
              </Row>
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