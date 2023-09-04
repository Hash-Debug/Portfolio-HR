import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import loan from "../../Assets/Projects/loan.jpg";
import sales from "../../Assets/Projects/sales.jpg";
import emotions from "../../Assets/Projects/emotions.jpeg";
import fuzemee from "../../Assets/Projects/fuzemee.jpg";
import tmc from "../../Assets/Projects/tmc.jpg";
import lernx from "../../Assets/Projects/lernx.jpg";
import aivirex from "../../Assets/Projects/aivirex.jpg";
import tedx from "../../Assets/Projects/tedx.jpg";
import hackerz from "../../Assets/Projects/hackerz.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my most celebrated works.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmc}
              isBlog={true}
              title="Public Relations Head at The MUN Company"
              description="My role encompassed crafting impactful communication strategies and forging meaningful connections. Nurturing relationships with key stakeholders and partners was a privilege, enhancing our network through genuine connections and collaborative growth."
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
              description="I explored the intricacies of human resources. I actively engaged in recruitment activities, interviewing candidates and identifying the stars among them.  Additionally, I provided crucial support to the HR team in daily administrative tasks, ensuring smooth operations."
              ghLink="https://drive.google.com/file/d/1-O3i3evoCH_I6x7GCMkNHZe5Hj_A_eI4/view?usp=sharing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tedx}
              isBlog={true}
              title="TEDxChennaiInstituteOfTechnology"
              description="As Vice President and Public Relations Head at TEDxChennaiInstituteOfTechnologyCountdown,I orchestrated impactful events, curated diverse speakers, and managed PR efforts, fostering innovation, inspiration, and community engagement through the power of ideas."
              ghLink="https://citchennai.edu.in/tedx/index.html"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackerz}
              isBlog={true}
              title="Hackerz Symposium"
              description="In my roles as Secretary and member of the Sponsorship and Content Writer Teams at Hackerz Symposium, I facilitated seamless operations, secured valuable sponsorships, and created compelling content, enhancing the symposium's overall impact and success."
              ghLink="https://hackerzcit.in/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few technical projects that I've worked on recently.
        </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales_Forecast"
              description="This application is a powerful tool for businesses looking to make data-driven decisions. By analyzing past sales data, the application can identify trends and patterns that can be used to forecast future sales."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="Loaner"
              description="Loan Approval Website: Discover your loan status – whether it's approved, pending, or disapproved. Simplify your financial journey with real-time updates and transparent tracking of your loan application."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotions}
              isBlog={false}
              title="Espacio_Serenite"
              description="An empathetic project for venting emotions responsibly, not a substitute for professional help. A friendly, non-judgmental space to share feelings and find comfort while respecting mental health needs."
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
