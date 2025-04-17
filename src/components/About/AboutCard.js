import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hey there! I'm <span className="purple">Muhammad Farel Firdaus</span> from <span className="purple">Bandung</span>.
          <br />
          Right now, I’m studying Informatics at ITENAS — just kicked off my first semester in 2024.
          <br />
          I’m super into tech stuff, especially <span className="purple">Artificial Intelligence</span> and <span className="purple">Blockchain</span>.
          <br />
          I'm always down to learn new things and grow my skills — hoping to be part of something big in the tech world someday.
          <br />
          <br />
          Outside of coding, I like to chill and do stuff that helps me relax or get inspired, like:  
        </p>
          <ul>
            <li className="about-activity">
              {/* <ImPointRight /> */} 🎵 Playing music  
            </li>
            <li className="about-activity">
              {/* <ImPointRight /> */} 🎬 Watching movies/films
            </li>
            <li className="about-activity">
              {/* <ImPointRight /> */} 📚 Reading books
            </li>
            <li className="about-activity">
              {/* <ImPointRight /> */} 🎮 Playing games
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
