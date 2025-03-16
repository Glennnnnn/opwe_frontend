import React from "react";
import { Card, Typography, List, Divider, Col, Row } from "antd";

const { Title, Text } = Typography;


const ProfileResume: React.FC = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start", // Aligns content at the top for scrolling
      height: "70vh",
      maxWidth: "90%",
      margin: "0 auto",
      overflowY: "auto",
      //boxSizing: "border-box",
    }}>
      <Card style={{ background: "#E9E9E9", width: "100%" }}>

        <Title level={3} style={{ marginTop: "20px" }}>
          Work Experience
        </Title>
        <Divider />
        <List
          dataSource={[
            {
              company: "Postal Savings Bank of China",
              roles: [
                {
                  period: "2020.08 - 2022.02",
                  project: "Enterprise Messaging Bus (EDA) Project",
                  role: "Backend Developer",
                  techStack: "Java, Spring Cloud, MySQL, Jenkins, RocketMQ, Netty",
                  responsibilities: [
                    "Participated in architectural design and technical stack selection, influencing system scalability, performance, and long-term maintainability.",
                    "Built a management control center with Java and Spring Cloud to manage RocketMQ producers, consumers, and topics across multiple systems.",
                    "Developed and optimized RESTful APIs for configuration management, ensuring efficient and reliable data exchange. optimized web performance. Improved API response time by 20% through query optimization and caching strategies, enhancing system performance and scalability.",
                    "Supported CI/CD deployment pipelines with Jenkins, ensuring quality control and enabling trunk-based releases in a monorepo environment.",
                    "Demonstrated experience in concurrency for high-volume messaging by implementing multi-threaded services, resulting in a 10% improvement in daily throughput.",
                    "Implemented a monitoring system using Prometheus and Grafana with RocketMQ, enhancing system debugging and monitoring capabilities by providing real-time insights into message queues, performance metrics, and overall system health.",
                  ],
                },
                {
                  period: "2022.02 - 2022.08",
                  project: "Wealth Management Middle Platform Project",
                  role: "Backend Developer",
                  techStack: "Java, Spring Cloud, PostgreSQL, RabbitMQ, Redis",
                  responsibilities: [
                    "Played a key role in architectural design and technical stack selection for the project.",
                    "Designed and implemented workflows for file processing and database integration in collaboration with upstream systems.",
                    "Developed and tested 80+ API communication with upstream systems, ensuring reliable data exchange.",
                    "Designed and implemented a multi-threaded data storage solution to address the high data volume issue, improving database performance by 15%.",
                    "Improved API response times by 20% through optimized database queries and caching strategies.",
                  ],
                },
                {
                  period: "2022.08 - 2023.08",
                  project: "Personal Wealth Management Project",
                  role: "Backend Tech Lead",
                  techStack: "Java, Spring Cloud, PostgreSQL, ZooKeeper, Redis, Minio, React",
                  responsibilities: [
                    "Served as a tech lead, supporting three teams in designing and delivering scalable architectures for customer engagement system, processing millions of user and merchant records daily.",
                    "Spearheaded requirement analysis in cross-functional teams across multiple divisions, driving efficient system integration and alignment with business goals.",
                    "Designed and developed technical solutions aligned with business objectives while leading the strategic road mapping.",
                    "Integrated microservices with existing wealth management systems, enhancing scalability, interoperability, and performance.",
                    "Designed and implemented table partitioning strategies using ShardingSphere for scalable data storage, resulting in a 20% improvement in query performance.",
                    "Led the development of modular backend solutions, navigating ambiguities across multiple divisions to extract and share key modules. Resulting in 50% increase in usability and a 20% reduction in code redundancy.",
                    "Leveraged Spring Cloud Gateway for service routing, enabling dynamic and efficient routing of requests between microservices while ensuring improved scalability and load balancing.",
                    "Integrated Nacos for service registration and discovery, enabling efficient communication with fundamental tech support services.",
                    "Implemented Zookeeper for dispatching daily data processing tasks across multiple services, ensuring effective task coordination, high availability, and fault tolerance.",
                    "Refined attention to detail by conducting peer reviews, ensuring adherence to coding standards and best practices.",
                  ],
                },
              ],
            },
            {
              company: "Freelance Developer",
              roles: [
                {
                  period: "2023.12 - 2024.04",
                  project: "Pioneer Aluminium Inventory Management System",
                  role: "Full-Stack Developer",
                  techStack: "Java, React, Spring Boot, MySQL, Redis",
                  responsibilities: [
                    "Developed item management, order processing, and record tracking features for a web-based platform using Java, Spring Boot, React, Redux.",
                    "Efficiently managed API calls using Redux Toolkit Query, optimizing data fetching, caching, and synchronization while reducing redundant requests between the frontend and backend.",
                    "Designed and implemented an user-friendly frontend using JavaScript/Typescript, React, Ant Design, and SASS, enhancing UI consistency, maintainability and user experience.",
                    "Demonstrated expertise in session management and authentication by designing and delivering an authentication system using Spring Security and Redis.",
                    "Designed and implemented reusable and maintainable RESTful APIs, ensuring scalability and ease of integration. Collaborated closely with frontend developers to optimize frontend/backend communication.",
                    "Led the development of complex database solutions using MySQL and PostgreSQL, delivering high-frequency inventory system with daily query over 100k, ensuring efficient data processing and reliability.",
                    "Proven experience in cloud engineering, setting up AWS infrastructure and configuring Nginx for secure and efficient deployment.",
                    "Demonstrated strong attention to detail through comprehensive unit testing, ensuring full coverage of critical business logic using JUnit and Mockito.",
                    "Led the product discovery process with critical clients, gathering business requirements and translating them into clear, actionable technical stories.",
                  ],
                },
                {
                  period: "2024.06 - 2024.09",
                  project: "AK Travel Backend Management System",
                  role: "Full-Stack Developer",
                  techStack: "Python, FastAPI, React, Redux, MySQL",
                  responsibilities: [
                    "Developed travel plan management, travel group management, and vehicle allocation features for a web-based platform using Python, FastAPI, React, Redux.",
                    "Efficiently managed API calls using Redux Toolkit Query, optimizing data fetching, caching, and synchronization while reducing redundant requests between the frontend and backend.",
                    "Designed and implemented an user-friendly frontend using JavaScript/Typescript, React, Ant Design, and SASS, enhancing UI consistency, maintainability and user experience.",
                    "Proven experience in cloud engineering, setting up AWS infrastructure and configuring Nginx for secure and efficient deployment.",
                    "Demonstrated strong attention to detail through comprehensive unit testing, ensuring full coverage of critical business logic using JUnit and Mockito.",
                    "Led the product discovery process with critical clients, gathering business requirements and translating them into clear, actionable technical stories.",
                  ],
                },
                {
                  period: "2024.12 - Present",
                  project: "WeGroupCarPool Management System",
                  role: "Full-Stack Developer",
                  techStack: "React, Redux, C#, .NET, PostgreSQL",
                  responsibilities: [
                    "Implemented role-based permission management in the backend.",
                    "Designed scalable backend features.",
                  ],
                },
              ],
            },
          ]}
          renderItem={(item: any) => (
            <Row gutter={16} style={{ width: "100%" }}> {/* Gutter for spacing */}
              {item.roles.map((role: any, index: number) => (
                <Col key={index} xs={24} sm={12} md={8}> {/* Ensures 3 equal columns on medium screens */}
                  <div style={{ background: "#FFF", padding: "10px", borderRadius: "5px", minHeight: "100%" }}>
                    <Title level={4}>{item.company}</Title>
                    <Text strong>{role.period}</Text>
                    <br />
                    <Text>{role.project}</Text> - <Text italic>{role.role}</Text>
                    <br />
                    <Text type="secondary">Tech Stack: {role.techStack}</Text>
                    <ul>
                      {role.responsibilities.map((resp: string, idx: number) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        />
        <Title level={3}>Education Background</Title>
        <Divider />
        <List
          dataSource={[
            {
              date: "Feb 2018 - Dec 2019",
              degree: "Master of Information Technology",
              university: "MONASH UNIVERSITY - Melbourne, Australia",
            },
            {
              date: "Sep 2012 - Jun 2016",
              degree: "Bachelor of Resource Exploration Engineering",
              university: "JILIN UNIVERSITY - Changchun, China",
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <Text strong>{item.date}</Text>
              <br />
              <Text>{item.degree}</Text>
              <br />
              <Text type="secondary">{item.university}</Text>
            </List.Item>
          )}
        />
        <Title level={3} style={{ background: "#E9E9E9", width: "100%" }}>
          Skills & Abilities
        </Title>
        <Divider />
        <List
          dataSource={[
            "Programming language: Java, Python, C#, Javascript, Typescript",
            "Databases: MySQL, PostgreSQL, Redis, MongoDB",
            "Backend Technologies: Spring Boot, Spring Cloud (Eureka, OpenFeign, Hystrix, Gateway, etc.), Minio, Netty, RabbitMQ, RocketMQ, GraphQL",
            "Frontend Technologies: React, Redux, HTML, CSS, SASS, Tailwind CSS, Ant Design, Bootstrap",
            "Cloud: AWS, Docker, Jenkins, Nginx, JIRA, Confluence, GitHub, GitLab, Swagger "
          ]}
          renderItem={(item) => (
            <List.Item>
              <Text>- {item}</Text>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default ProfileResume