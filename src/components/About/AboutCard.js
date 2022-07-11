import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Mobeen </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />I am a 3rd year <span className="purple">BS Computer Science Student</span> in&nbsp;
            <a href="https://www.ist.edu.pk/" class="text-decoration-none text-reset" target="_blank">Institute of Space Technology, Islamabad.</a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Foosball
            </li>
            <li className="about-activity">
              <ImPointRight /> Youtube n Chill
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hunger for Knowledge and the Pursuit of Intellect!"{" "}
          </p>
          <footer className="blockquote-footer">Mobeen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
