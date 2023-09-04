import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! I am <span className="purple">Hrithika R </span>
            from <span className="purple"> Chennai, India.</span>
            <br /> I am a final year student pursuing a Bachelors degree 
            in Computer Science and Engineering at Chennai Institute of Technology.
            <br />
            
            <br />
            <br />
            Apart from coding, content creation and event management, I have a few other activities that interest me. They are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Reading</span> to expand my knowledge,
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> Writing poems</span> as a creative outlet,
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> traveling</span> to experience different cultures.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work to express, not to impress; let your actions speak volumes and your passion shine!"{" "}
          </p>
          <footer className="blockquote-footer">Hrithika R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
