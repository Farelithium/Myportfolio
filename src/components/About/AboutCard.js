import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Farel Firdaus </span>
            from <span className="purple"> Bandung.</span>
            <br />
            Currently, I am studying at ITENAS with a major in Informatics, and I am currently in my first semester.
            <br />
            I have a great interest in technology, especially in <span className="purple"> Machine Learning </span> and <span className="purple"> Blockchain. </span> 
            <br />
            I am very enthusiastic to learn and develop my skills in this field, and hope to contribute to technological innovation in the future.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Light Novel
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "There is nothing impossible to him who will try."{" "}
          </p>
          <footer className="blockquote-footer">Alexander the Great</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
