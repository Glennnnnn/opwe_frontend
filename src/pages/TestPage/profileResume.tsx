import React from "react";
import { Card, Typography, List, Divider } from "antd";

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
      <Card style={{ height: "2000px", background: '#E9E9E9' }}>
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
                  techStack: "Spring Cloud, MySQL, Jenkins, RocketMQ, Netty",
                  responsibilities: [
                    "Built a management control center for RocketMQ producers, consumers, and topics.",
                    "Implemented role-based access control (RBAC) for secure operations.",
                    "Developed RESTful APIs for configuration management.",
                    "Optimized system throughput, achieving a 10% improvement.",
                  ],
                },
                {
                  period: "2022.02 - 2022.08",
                  project: "Wealth Management Middle Platform Project",
                  role: "Backend Developer",
                  techStack: "Spring Cloud, PostgreSQL, Redis",
                  responsibilities: [
                    "Designed workflows for file processing and database integration.",
                    "Developed and tested API communication with upstream ESB systems.",
                    "Improved API response times by 20% through optimized database queries.",
                  ],
                },
                {
                  period: "2022.08 - 2023.08",
                  project: "Personal Wealth Management Project",
                  role: "Technical Manager/Backend Developer",
                  techStack: "Spring Cloud, PostgreSQL, Redis, Minio, React",
                  responsibilities: [
                    "Led a team of 18 developers in scalable architecture design.",
                    "Integrated mobile and web requirements for four business lines.",
                    "Achieved a 30% increase in daily visits by customer managers.",
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
                  techStack: "React, Spring Boot, MySQL, Redis",
                  responsibilities: [
                    "Developed inventory management and order processing features.",
                    "Built RESTful APIs and authentication systems with Spring Security.",
                    "Set up AWS infrastructure and Nginx configuration.",
                  ],
                },
                {
                  period: "2024.06 - 2024.09",
                  project: "AK Travel Backend Management System",
                  role: "Full-Stack Developer",
                  techStack: "React, Redux, FastAPI, MySQL",
                  responsibilities: [
                    "Delivered travel package and order management system.",
                    "Built APIs for scheduling, vehicle assignments, and notifications.",
                    "Deployed on AWS with Nginx.",
                  ],
                },
                {
                  period: "2024.12 - Present",
                  project: "WeGroupCarPool Management System",
                  role: "Full-Stack Developer",
                  techStack: "React, Redux, .NET, PostgreSQL",
                  responsibilities: [
                    "Implemented role-based permission management in the backend.",
                    "Designed scalable backend features.",
                  ],
                },
              ],
            },
          ]}
          renderItem={(item: any) => (
            <List.Item>
              <Title level={4}>{item.company}</Title>
              {item.roles.map((role: any, index: number) => (
                <div key={index} style={{ marginBottom: "10px" }}>
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
              ))}
            </List.Item>
          )}
        />

        <Title level={3} style={{ marginTop: "20px" }}>
          Skills & Abilities
        </Title>
        <Divider />
        <List
          dataSource={[
            "Java (Advanced), JavaScript/TypeScript (Intermediate), Python (Intermediate), C# (Intermediate)",
            "Databases: MySQL, PostgreSQL, Redis",
            "Backend: Spring Boot, Spring Cloud (Eureka, OpenFeign, Gateway, etc.), Minio, Netty",
            "Frontend: React, Redux",
            "Message Middleware: RabbitMQ, RocketMQ",
            "Tools: Jenkins, Docker, AWS, Nginx",
            "Other: System design, Database design, Microservices Architecture",
          ]}
          renderItem={(item) => <List.Item>- {item}</List.Item>}
        />
      </Card>
    </div>
  );
}

export default ProfileResume