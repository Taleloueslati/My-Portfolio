import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oueslati Talel </span>
            from <span className="purple"> Tunisia, Siliana.</span>
            <br />
            I have completed the RBK training program, where I obtained a certificate as a Full Stack JavaScript developer 
              from ReBootKamp.
            <br />
            Additionally,I am currently seeking opportunities as a Full Stack JavaScript developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create solutions that have a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Oueslati Talel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
