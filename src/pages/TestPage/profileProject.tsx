import { useState } from 'react';

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
        <div id="part-1" style={{ height: '20vh' }}>
          <Card
            title="2020.08 - 2022.02 | Enterprise Messaging Bus (EDA) Project"
            extra={<a href="#">More</a>}
            style={{
              width: '100%',
              backgroundColor: '#FCF3EF'
            }}
          >
            <hr className="my-25" />
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div id="part-2" style={{ height: '20vh' }} >
          <Card
            title="2020.08 - 2022.02 | Enterprise Messaging Bus (EDA) Project"
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
        <div id="part-3" style={{ height: '20vh' }} >
          <Card
            title="2020.08 - 2022.02 | Enterprise Messaging Bus (EDA) Project"
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
        <div id="part-4" style={{ height: '20vh' }} >
          <Card
            title="2020.08 - 2022.02 | Enterprise Messaging Bus (EDA) Project"
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
            style={{ display: 'block', marginBottom: 10 }}
          >
            Part 1
          </a>
          <a
            href="#part-2"
            onClick={(e) => handleScroll(e, 'part-2')}
            style={{ display: 'block', marginBottom: 10 }}
          >
            Part 2
          </a>
          <a
            href="#part-3"
            onClick={(e) => handleScroll(e, 'part-3')}
            style={{ display: 'block', marginBottom: 10 }}
          >
            Part 3
          </a>
          <a
            href="#part-4"
            onClick={(e) => handleScroll(e, 'part-4')}
            style={{ display: 'block', marginBottom: 10 }}
          >
            Part 4
          </a>
        </div>
      </Col>
    </Row>

  </div>
}

export default ProfileProject