import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
  Row,
  Col,
  Anchor,
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

import './profileProject.scss'

const ProfileProject: React.FC = () => {
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
    }
  };
  return <div
    className="profile-project-body"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Aligns content at the top for scrolling
      width: '80%',
      alignItems: "center",
      height: "950px",
      margin: "0 auto",
      overflowY: "auto",
      marginTop: '20px'
    }}>
    <Row style={{ display: 'flex', width: '100%' }}>
      <Col span={20}>
        {/* <div id="part-1" style={{ height: 'calc(25vh - 20px)', paddingBottom: '20px', overflow: 'auto' }}> */}
        <div id="part-1" style={{ maxHeight: '30vh', flex: '1 1 auto', overflow: 'auto', paddingBottom: '50px' }}>
          <Card
            title="2020.08 - 2022.02 | Enterprise Data Architecture (EDA) Project"
            extra={<a onClick={() => { navigate("/projectDetailPage?", { state: { pageId: 'EDA' } }) }}>Detail</a>}
            style={{
              width: '100%',
              backgroundColor: '#FCF3EF'
            }}
          >
            <hr className="my-25" />
            <p style={{ textAlign: 'justify' }}>
              This system uses an efficient and reliable message transmission mechanism for platform-independent data message exchange. It facilitates distributed system integration based on data communication. By providing message transmission and queuing models, it enables inter-process communication in a distributed environment. It can address internal system messaging issues, achieve asynchronous invocation between systems, decouple systems, and handle traffic spikes, thereby enhancing the reliability and stability of the system.
              <br />
              <strong>Components including</strong>: SDK, Management & Control Center, Configuration Center, Monitoring Center, Message Service Center
              <br />
              <strong>Primary Technology Stack</strong>: SpringCloud + RocketMQ + PostgreSQL + Redis + Netty.
              <br />
              <strong>Project Team and Role</strong>: SDK and Management Control Center, Backend developer.
            </p>
          </Card>
        </div>
        <div id="part-2" style={{ maxHeight: '30vh', flex: '1 1 auto', overflow: 'auto', paddingBottom: '50px' }} >
          <Card
            title="2022.02 - 2022.08 | Wealth Management Middle Platform Project"
            extra={<a onClick={() => { navigate("/projectDetailPage?", { state: { pageId: 'middleP' } }) }}>Detail</a>}
            style={{
              width: '100%',
              backgroundColor: '#FCF3EF'
            }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div id="part-3" style={{ maxHeight: '30vh', flex: '1 1 auto', overflow: 'auto', paddingBottom: '50px' }} >
          <Card
            title="2022.08 - 2023.08 |  Personal Wealth Management Project"
            extra={<a onClick={() => { navigate("/projectDetailPage?", { state: { pageId: 'marketingM' } }) }}>Detail</a>}
            style={{
              width: '100%',
              backgroundColor: '#FCF3EF'
            }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div id="part-4" style={{ maxHeight: '30vh', flex: '1 1 auto', overflow: 'auto', paddingBottom: '50px' }} >
          <Card
            title="2023.12 - 2024.04 | Pioneer Aluminium Inventory Management System"
            extra={<a href="#">More</a>}
            style={{
              width: '100%',
              backgroundColor: '#FCF3EF'
            }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div id="part-5" style={{ maxHeight: '30vh', flex: '1 1 auto', overflow: 'auto', paddingBottom: '50px' }} >
          <Card
            title="2024.06 - 2024.09 | AK Travel Backend Management System"
            extra={<a href="#">More</a>}
            style={{
              width: '100%',
              backgroundColor: '#FCF3EF'
            }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </Col>
      <Col span={4} style={{
        position: 'sticky', // Makes the element sticky
        top: '10px',        // Adjusts the position when it sticks
        alignSelf: 'flex-start', // Ensures proper alignment
      }}>
        <div>
          {/* Custom Anchor */}
          <a
            href="#part-1"
            onClick={(e) => handleScroll(e, 'part-1')}
            style={{ display: 'block', marginBottom: 15 }}
          >
            Project 1. Enterprise Data Architecture Project
          </a>
          <a
            href="#part-2"
            onClick={(e) => handleScroll(e, 'part-2')}
            style={{ display: 'block', marginBottom: 15 }}
          >
            Project 2. Wealth Management Middle Platform Project
          </a>
          <a
            href="#part-3"
            onClick={(e) => handleScroll(e, 'part-3')}
            style={{ display: 'block', marginBottom: 15 }}
          >
            Project 3. Personal Wealth Management Project
          </a>
          <a
            href="#part-4"
            onClick={(e) => handleScroll(e, 'part-4')}
            style={{ display: 'block', marginBottom: 15 }}
          >
            Project 4. Pioneer Aluminium Inventory Management System
          </a>
          <a
            href="#part-5"
            onClick={(e) => handleScroll(e, 'part-4')}
            style={{ display: 'block', marginBottom: 15 }}
          >
            Project 5. AK Travel Backend Management System
          </a>
        </div>
      </Col>
    </Row>

  </div >
}

export default ProfileProject