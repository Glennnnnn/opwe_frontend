/**
 * All data that should be fetched from backend is now set to fix values until the backend functions with query data from database is finished.
 */


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import EDAStructure from "@/assets/images/EDAStructure.png"
import EDATech from "@/assets/images/EDATech.png"
import middlePStructure from "@/assets/images/MiddleP.png"
import marketingMFlow from "@/assets/images/marketingM.png"

import {
  Card, Typography, Col, Row, Button, Modal
} from "antd";

import "./projectDetailPage.scss"

import { ProjectOutlined, SoundTwoTone } from '@ant-design/icons';

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

const EDAAriticleData: AriticleData =
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
        "<br /><strong>SDK</strong>: Upstream and downstream systems interact with the RocketMQ cluster through SDK dependencies. The SDK obtains the real-time cluster configuration information from the Configuration Center," +
        "which is configured by the Management & Control Center, and caches it locally. Additionally, the SDK provides capabilities such as message re-send (based on each system’s configured retry strategy, retry count, and retry interval), deduplication, idempotency, etc." +
        "<br /><strong>Management & Control Center</strong>: Provides functions for managing cluster information, topic information, upstream and downstream system subscription information, configuration change notifications and alarm prompts." +
        "<br /><strong>Configuration Center</strong>: The cluster information, topic information, and upstream and downstream system subscription information configured by the Management & Control Center are stored in the Configuration Center," +
        "where they can be accessed by the SDK." +
        "<br /><strong>Message Service Center</strong>: Deploys the RocketMQ cluster and integrates ELK (Elasticsearch, Logstash, and Kibana) to handle message logs." +
        "<br /><strong>Monitoring Center</strong>: Uses Prometheus and Grafana to monitor the status of the RocketMQ cluster and push alarm status to the Management & Control Center.",
      "ariticleComponentTitle": "EDA Project Structure"
    },
    {
      "articleComponentId": "00000005",
      "articleComponentType": "image",
      "articleComponentContentOrUrl": EDATech,
      "ariticleComponentTitle": "Project Tech Architecture "
    },
    {
      "articleComponentId": "00000005",
      "articleComponentType": "text",
      "articleComponentContentOrUrl": "<h2>Resposibilities:</h2>" +
        "<ul>" +
        " <li>Participated in architectural design and technical stack selection, influencing system scalability, performance, and long-term maintainability.</li>" +
        " <li>Built a management control center with Java and Spring Cloud to manage RocketMQ producers, consumers, and topics across multiple systems.</li>" +
        " <li>Developed and optimized RESTful APIs for configuration management, ensuring efficient and reliable data exchange.</li>" +
        "<li>Optimized web performance. Improved API response time by 20% through query optimization and caching strategies, enhancing system performance and scalability.</li>" +
        "<li>Supported CI/CD deployment pipelines with Jenkins, ensuring quality control and enabling trunk-based releases in a monorepo environment.</li>" +
        "<li>Demonstrated experience in concurrency for high-volume messaging by implementing multi-threaded services, resulting in a 10% improvement in daily throughput.</li>" +
        "<li>Implemented a monitoring system using Prometheus and Grafana with RocketMQ, enhancing system debugging and monitoring capabilities by providing real-time insights into message queues, performance metrics, and overall system health.</li>" +
        "</ul>" +
        "<p><strong>Technology Stack:</strong> SpringBoot, React, PostgreSql, Redis, RocketMq</p>",
      "ariticleComponentTitle": "Project Structure"
    },
  ]
}

const middlePAriticleData: AriticleData =
{
  "articleId": 'Personal Wealth Middle-Platform',
  "articleTitle": "Personal Wealth Middle-Platform Project",
  "articleAuthor": "JiaLin Liu(Glenn)",
  "articleCreatedTime": "2025-01-15T21:30:00Z",
  "articleUpdatedTime": "2025-01-15T21:30:00Z",
  "articleComponents": [
    {
      "articleComponentId": "00000001",
      "articleComponentType": "text",
      "articleComponentContentOrUrl":
        "To optimize the existing personal wealth project, provide foundational support for future wealth-related initiatives, and enhance system scalability, our department designed a personal wealth middle-platform. The primary focus in the project's initial phase is to establish the end-to-end process for receiving, processing, and persisting foundational data in the persistence layer. </p>" +
        "Incremental data will be retrieved via RPC communication from the ESB system, compared with existing data using a multi-threaded approach, and stored in PostgreSQL. Full data will be received through a file reception service integrated with the EDB system SDK(Receiving notifications via RabbitMQ and fetch files using FastDFS based on the details in the notifications), enabling complete data replacement.",
      "ariticleComponentTitle": "Project Background"
    },
    {
      "articleComponentId": "00000002",
      "articleComponentType": "image",
      "articleComponentContentOrUrl": middlePStructure,
      "ariticleComponentTitle": "Service Workflow"
    },
    {
      "articleComponentId": "00000003",
      "articleComponentType": "text",
      "articleComponentContentOrUrl":
        "Development efforts will include providing services that support multiple upstream interface invocation modes to retrieve data, optimizing data processing and persistence and offering foundational functionalities for data access. The service makes daily calls to the ESB system to query multiple datasets, including transaction code datasets, customer category code datasets, and identity category code datasets. " +
        "The service will also handle multiple files distributed daily by the EDB system, including customer, merchant, and product information. Using a multi-threaded approach, the service will process data volumes reaching tens of millions daily.",
      "ariticleComponentTitle": "EDA Project Structure"
    },
    {
      "articleComponentId": "00000004",
      "articleComponentType": "text",
      "articleComponentContentOrUrl": "<h3>Resposibilities:</h3>" +
        `<ul>
      <li>Played a key role in architectural design and technical stack selection for the project.</li>
      <li>Designed and implemented workflows for file processing and database integration in collaboration with upstream systems.</li>
      <li>Developed and tested 80+ API communication with upstream systems, ensuring reliable data exchange.</li>
      <li>Designed and implemented a multi-threaded data storage solution to address the high data volume issue, improving database performance by 15%.</li> 
      <li>Improved API response times by 20% through optimized database queries and caching strategies.</li>
        </ul>`+
        "<br />",
      "ariticleComponentTitle": "Resposibilities"
    },
    {
      "articleComponentId": "00000005",
      "articleComponentType": "text",
      "articleComponentContentOrUrl": "<h3>Technology Stack:</h3>" +
        "<p> Java, Spring Cloud, Redis, PostgreSql, RabbitMQ, React, CSS, and HTML</p>",
      "ariticleComponentTitle": "Technology Stack"
    }
  ]
}

const marketingMapAriticleData: AriticleData =
{
  "articleId": 'Marketing Map System',
  "articleTitle": "Marketing Map System",
  "articleAuthor": "JiaLin Liu(Glenn)",
  "articleCreatedTime": "2025-01-20T11:20:00Z",
  "articleUpdatedTime": "2025-01-20T11:20:00Z",
  "articleComponents": [
    {
      "articleComponentId": "00000001",
      "articleComponentType": "text",
      "articleComponentContentOrUrl":
        `<body>
        <header>
            <h1>Marketing Map System Overview</h1>
        </header>
        <section>
            <h2>Introduction</h2>
            <p>
                Under the support of the Personal Wealth Middle Platform System, a marketing map system was designed and developed to enable customer managers to:
            </p>
            <ul>
                <li>Interact with customers</li>
                <li>Record interaction history</li>
                <li>Compile and summarize customer interaction data</li>
            </ul>
            <p>
                The primary challenge in the overall design lies in accommodating multiple business lines within the system, including consumer loans, credit loans, and small business loans.
            </p>
            <p>
                Core data queries and API calls include accessing basic data stored in the Personal Wealth Middle Platform System, such as:
            </p>
            <ul>
                <li>Customer and product information</li>
                <li>Upstream system APIs for identity verification and credit ratings</li>
            </ul>
            <p>
                These functionalities are used across all business lines and were extracted into common services to reduce code redundancy.
            </p>
            <p>
                Additionally, the system stores a large amount of CRM-delivered customer visit information from other channels. Given the substantial data volume and the differing categories of visit information accessed by various business lines, table partitioning was implemented during the design phase to enhance query efficiency. Since the requirements for visit functions differ significantly between business lines, each was custom-designed and developed accordingly.
            </p>
        </section>`,
      "ariticleComponentTitle": "Project Background"
    },
    {
      "articleComponentId": "00000002",
      "articleComponentType": "image",
      "articleComponentContentOrUrl": marketingMFlow,
      "ariticleComponentTitle": "Service Workflow"
    },
    {
      "articleComponentId": "00000003",
      "articleComponentType": "text",
      "articleComponentContentOrUrl": `<section>
      <h2>Responsibilities</h2>
      <h3>Requirement Analysis</h3>
      <p>
          Communicated and implemented business requirements across multiple business lines, including consumer loans, credit loans, small business loans, and agricultural business.
      </p>
      <h3>System Architecture Design</h3>
      <p>
          The project was developed based on Spring Cloud, with services registered within the Personal Wealth Middle Platform System to ensure seamless interaction.
      </p>
      <ul>
          <li>ShardingSphere was used for database partitioning.</li>
          <li>Zookeeper was utilized for distributed task scheduling to handle multi-server data reception and persistence.</li>
      </ul>
      <h3>Team Management</h3>
      <p>
          Expanded the initial team of 3 back-end developers and 1 front-end developer to a team of 18 members:
      </p>
      <ul>
          <li>11 back-end developers</li>
          <li>5 front-end developers</li>
          <li>1 product manager</li>
          <li>1 tester</li>
      </ul>
      <h3>Project Iteration and Delivery</h3>
      <p>
          Over 12 months, completed 18 iterations. By August 2023, the project was fully developed, tested (functional and technical), and launched. Key highlights include:
      </p>
      <ul>
          <li>Over 500 APIs were developed.</li>
          <li>The system supports a daily user base of tens of thousands post-launch.</li>
      </ul>
  </section>`,
      "ariticleComponentTitle": "Project Structure"
    },
    {
      "articleComponentId": "00000004",
      "articleComponentType": "text",
      "articleComponentContentOrUrl":
        `<p><strong>Technology Stack:</strong></p> 
        <p> React, CSS, and HTML</p>`,
      "ariticleComponentTitle": "EDA Project Structure"
    },
  ]
}


const { Title, Text } = Typography;
const ProjectDetailPage: React.FC = () => {

  const location = useLocation();
  const { pageId } = location.state || {};

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentAriticleData, setCurrentAriticleData] = useState<AriticleData>(EDAAriticleData);


  useEffect(() => {
    console.log(pageId)
    switch (pageId) {
      case 'EDA':
        setCurrentAriticleData(EDAAriticleData);
        break;
      case 'middleP':
        setCurrentAriticleData(middlePAriticleData);
        break;
      case 'marketingM':
        setCurrentAriticleData(marketingMapAriticleData);
        break;
      default:
        setCurrentAriticleData(EDAAriticleData);
    }
  })

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage('');
  };

  const showImageModal = (image: string) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

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
                  <Title level={2}>{currentAriticleData.articleTitle}</Title>
                </div>
                <Text>{currentAriticleData.articleAuthor}</Text>
                <br />
                <Text>{"Create at: " + convertTime(currentAriticleData.articleCreatedTime)}</Text>
                <hr className="my-25" />
                <br />
                {currentAriticleData.articleComponents.map((component, index) => {
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
              {currentAriticleData.articleComponents.map((component, index) => {
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