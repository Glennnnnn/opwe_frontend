import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import EDAStructure from "@/assets/images/EDAStructure.png"


import {
  Card, Typography, Col, Row, Button, Modal
} from "antd";

import "./projectDetailPage.scss"

import { ProjectOutlined } from '@ant-design/icons';

interface articleComponent {
  articleComponentId: string;
  articleComponentType: 'text' | 'image'; // Define types of content
  articleComponentContentOrUrl: string; // Adjusted to handle content types
  ariticleComponentTitle: string | null;
}

interface AriticleData {
  articleId: string;
  articleTitle: string;
  articleAuthor: string;
  articleCreatedTime: string;
  articleUpdatedTime: string;
  articleComponents: articleComponent[]
}

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

  const ariticleData: AriticleData =
  {
    "articleId": 'EDA',
    "articleTitle": "Enterprise Data Architecture (EDA) Project",
    "articleAuthor": "JiaLin Liu(Glenn)",
    "articleCreatedTime": "2024-12-11T22:25:00Z",
    "articleUpdatedTime": "2024-12-11T22:25:00Z",
    "articleComponents": [
      {
        "articleComponentId": "00000001",
        "articleComponentType": "text",
        "articleComponentContentOrUrl":
          "Our company already has ESB(Enterprise Service Bus) system which positioned for online transactions across systems in place and EDB(Enterprise Data Bus) system for file transfers across systems. Although both these systems provide asynchronous messaging capabilities, their messaging functions are relatively weak."
          +
          "Therefore, under the premise of building a new core transaction system with the fintech planning, the Enterprise Messaging Bus(EDA) is designed to handle message transmission across all bank systems. It aims to establish a highly reliable, highly available, standardized communication, well-managed, efficiently transmitted, flexibly scalable and online maintainable messaging bus.",
        "ariticleComponentTitle": "Project Background"
      },
      {
        "articleComponentId": "00000002",
        "articleComponentType": "image",
        "articleComponentContentOrUrl": EDAStructure,
        "ariticleComponentTitle": "Message Transmission Mechanism"
      },
      {
        "articleComponentId": "00000003",
        "articleComponentType": "text",
        "articleComponentContentOrUrl": "The overall EDA (Event-Driven Architecture) is divided into five parts: SDK, Management & Control Center, Configuration Center, Monitoring Center, and Message Service Center." +
          "SDK: Upstream and downstream systems interact with the RocketMQ cluster through SDK dependencies. The SDK obtains the real-time cluster configuration information from the Configuration Center," +
          "which is configured by the Management & Control Center, and caches it locally. Additionally, the SDK provides capabilities such as message re-send (based on each system’s configured retry strategy, retry count, and retry interval)," +
          "deduplication, idempotency, etc.Management & Control Center: Provides functions for managing cluster information, topic information, upstream and downstream system subscription information, configuration change notifications," +
          " and alarm prompts.Configuration Center: The cluster information, topic information, and upstream and downstream system subscription information configured by the Management & Control Center are stored in the Configuration Center," +
          "where they can be accessed by the SDK.Message Service Center: Deploys the RocketMQ cluster and integrates ELK (Elasticsearch, Logstash, and Kibana) to handle message logs." +
          "Monitoring Center: Uses Prometheus and Grafana to monitor the status of the RocketMQ cluster and push alarm status to the Management & Control Center.",
        "ariticleComponentTitle": "EDA Project Structure"
      },
      {
        "articleComponentId": "00000005",
        "articleComponentType": "image",
        "articleComponentContentOrUrl": EDAStructure,
        "ariticleComponentTitle": "Project Structure"
      },
      {
        "articleComponentId": "00000005",
        "articleComponentType": "text",
        "articleComponentContentOrUrl": "<p>Phase One:</p>" +
          "<p>Primarily responsible for the development of features related to the management control center. Key tasks included:" +
          "Setting up the project based on Spring Boot and developing backend functionalities such as system configuration management, node configuration, topic configuration, pushing configuration data to the configuration center, receiving, and processing alarm notifications from the monitoring center." +
          "Developed nearly 100 Restful APIs, The overall development adhered to standard software development principles and practices. Optimizing the project structure to enhance scalability." +
          "Designed the database according to requirements and optimized multiple database indexes.</p>" +
          "<p>Phase Two:</p>" +
          "<p>Primarily responsible for the development of the SDK project. Key tasks included:" +
          "Based on the original project, developed proxy functionality for integrating with C clients using Netty to address the partial lack of support for C client features in RocketMQ." +
          "Optimized the multithreading logic of the original project, achieving an approximate 10% improvement in daily throughput." +
          "Extended fields in the original messaging protocol to meet upstream and downstream system requirements, enhancing the ability to track message links.</p>",
        "ariticleComponentTitle": "Project Structure"
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({
      behavior: 'smooth',
      // block: 'center', // Ensure it's visible without moving the header
      inline: 'nearest',
    });
  };
  return (
    <>
      <div className="portfolio-template">
        {/* Left Column */}
        <Row gutter={16} style={{ display: "flex", height: "95vh", width: "80%" }}>
          <Col span={21}>
            <div className="main-project">
              <Card
                // bordered={false}
                className="project-card"
                style={{
                  textAlign: "justify"
                }}
              // cover={<img alt="Main Project" src={EDAStructure} />}
              >
                <div id={"title"}>
                  <Title level={2}>{ariticleData.articleTitle}</Title>
                </div>
                <Text>{ariticleData.articleAuthor}</Text>
                <br />
                <Text>{"Create at: " + convertTime(ariticleData.articleCreatedTime)}</Text>
                <hr className="my-25" />
                <br />
                {ariticleData.articleComponents.map((component, index) => {
                  if (component.articleComponentType === "text") {
                    return (
                      <div
                        id={component.articleComponentId}
                        style={{ flex: '1 1 auto', overflow: 'auto' }}
                        dangerouslySetInnerHTML={{ __html: component.articleComponentContentOrUrl }}>
                        {/* {component.articleComponentContentOrUrl.split("\n").map((line, index) => (
                          <p key={index}>{line}</p>
                        ))} */}
                      </div>
                    )
                  }
                  if (component.articleComponentType === "image") {
                    return (
                      <div id={component.articleComponentId}>
                        <figure>
                          <img
                            key={index}
                            src={component.articleComponentContentOrUrl}
                            alt="Blog Content"
                            style={{ width: "100%", cursor: 'pointer' }}
                            onClick={() => {
                              showImageModal(component.articleComponentContentOrUrl)
                            }}
                          />
                          <figcaption>{component.ariticleComponentTitle}</figcaption>
                        </figure>
                      </div>)
                  }
                  if (component.articleComponentType === "video") {
                    return (
                      <div id={component.articleComponentId}>
                        <video key={index} controls style={{ width: "100%" }}>
                          <source src={component.articleComponentContentOrUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
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
          <Col span={3} style={{
            position: 'sticky', // Makes the element sticky
            top: "10px",// Adjusts the position when it sticks
            alignSelf: 'flex-start', // Ensures proper alignment
          }}>
            <div>
              <a
                key="title"
                onClick={(e) => handleScroll(e, "title")}
                style={{ display: 'block', marginBottom: 15 }}
              >
                title
              </a>
              {/* Custom Anchor */}
              {ariticleData.articleComponents.map((component, index) => {
                if (component.ariticleComponentTitle != null) {
                  return (
                    <a
                      key={component.ariticleComponentTitle}
                      onClick={(e) => handleScroll(e, component.articleComponentId)}
                      style={{ display: 'block', marginBottom: 15 }}
                    >
                      {component.ariticleComponentTitle}
                    </a>
                  )
                }
              })}
              {/* Custom Anchor */}
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