import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import EDAStructure from "@/assets/images/EDAStructure.png"


import {
  Card, Typography, Col, Row, Button, Modal
} from "antd";

import "./projectDetailPage.scss"

import { ProjectOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const ProjectDetailPage: React.FC = () => {

  const location = useLocation();
  const { pageId } = location.state || {};

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage('');
  };

  const showImageModal = (image: string) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const blogData =
  {
    "id": 'EDA',
    "title": "Understanding Event-Driven Architecture",
    "author": "Jane Doe",
    "created_at": "2024-12-11T10:00:00Z",
    "updated_at": "2024-12-11T12:00:00Z",
    "contents": [
      {
        "type": "text",
        "content": "Event-driven architecture (EDA) is a software design pattern..."
      },
      {
        "type": "image",
        "content": EDAStructure
      },
      {
        "type": "text",
        "content": "The above diagram explains how EDA works in real-world scenarios."
      },
    ]
  }

  const convertTime = (time: string) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/New_York",
    }).format(new Date(time));

  }
  return (
    <>
      <div className="portfolio-template">
        {/* Left Column */}
        <Row gutter={16}>
          <Col span={16}>
            <div className="main-project">
              <Card
                bordered={false}
                className="project-card"
              // cover={<img alt="Main Project" src={EDAStructure} />}
              >
                <Title level={2}>{blogData.title}</Title>
                <Text>{blogData.author}</Text>
                <br />
                <Text>{"Create at: " + convertTime(blogData.created_at)}</Text>
                <hr className="my-25" />
                <br />
                {blogData.contents.map((block, index) => {
                  if (block.type === "text") {
                    return <p key={index}>{block.content}</p>;
                  }
                  if (block.type === "image") {
                    return <img
                      key={index}
                      src={block.content}
                      alt="Blog Content"
                      style={{ width: "100%", cursor: 'pointer' }}
                      onClick={() => {
                        showImageModal(block.content)
                      }}
                    />;
                  }
                  if (block.type === "video") {
                    return (
                      <video key={index} controls style={{ width: "100%" }}>
                        <source src={block.content} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    );
                  }
                  return null;
                })}
                <br />
                <Text strong>Primary Technology Stack:</Text>
                <Text> React, CSS, and HTML</Text>

              </Card>
            </div>
          </Col>
          {/* Right Column */}
          <Col span={8}>
            <div className="other-projects">
              <Title level={3}>Other Projects</Title>
              <Card
                hoverable
                cover={<img alt="Template 1" src="template1.jpg" />}
              >
                <Text>Material Design Web App</Text>
              </Card>
              <Card
                hoverable
                cover={<img alt="Template 2" src="template2.jpg" />}
              >
                <Text>Table Booking App</Text>
              </Card>
              <Card
                hoverable
                cover={<img alt="Template 3" src="template3.jpg" />}
              >
                <Text>Inventory App</Text>
              </Card>
              <Card
                hoverable
                cover={<img alt="Template 4" src="template4.jpg" />}
              >
                <Text>Quiz App</Text>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

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

    </>
  );
}

export default ProjectDetailPage