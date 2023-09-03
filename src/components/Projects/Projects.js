import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aivirex from "../../Assets/Projects/aivirex.png";
import loan from "../../Assets/Projects/loan.jpeg";
import sales from "../../Assets/Projects/sales.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import fuzemee from "../../Assets/Projects/fuzemee.jpeg";
import tmc from "../../Assets/Projects/tmc.png";
import lernx from "../../Assets/Projects/lernx.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few internship that I have done.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmc}
              isBlog={true}
              title="Public Relations Head at The MUN Company"
              description=" My role involved creating effective communication strategies and establishing meaningful connections. Nurturing relationships with key stakeholders and partners was a privilege, strengthening our network organically.
              "
              ghLink="https://themuncompany.com/about/#team"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fuzemee}
              isBlog={true}
              title="Marketing Intern at FuzeMee"
              description="I embarked on an exhilarating marketing journey. Working side by side with talented professionals, I copiloted various marketing campaigns spanning email marketing, social media promotions, and content creation aimed at boosting revenue and refining customer acquisition tactics."
              ghLink="https://drive.google.com/file/d/1Cntg5PA2LbWrvkrzrdHVoFILmXuOIYu-/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aivirex}
              isBlog={true}
              title="Content Writer Intern at Aivirex Innovations LLP"
              description="My tenure as a Content Writer Intern transformed my writing skills. I crafted captivating content for a variety of marketing materials, from blog posts to articles and promotional pieces. I also assisted in optimizing website content to enhance SEO performance."
              ghLink="https://drive.google.com/file/d/187pn8jfvyje1TSAUicAhzPJSTd6AquX1/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lernx}
              isBlog={true}
              title="HRM Intern at Lernx"
              description=", I explored the intricacies of human resources. I actively engaged in recruitment activities, interviewing candidates and identifying the stars among them.  Additionally, I provided crucial support to the HR team in daily administrative tasks, ensuring smooth operations."
              ghLink="hhttps://drive.google.com/file/d/1-O3i3evoCH_I6x7GCMkNHZe5Hj_A_eI4/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few technical projects I've worked on recently.
        </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales_Forecast"
              description=" This application is a powerful tool for businesses looking to make data-driven decisions. By analyzing past sales data, the application can identify trends and patterns that can be used to forecast future sales."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="Loaner"
              description="Loan Approval Website - A website that provides a loan approved, pending or disapproved status."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Espacio_Serenite"
              description=" Artificial Intelligence based project that can be used to as a buddy to rant out emotions but not to be used as an alternative to professional help."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
