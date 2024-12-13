import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ResumeNew from "../Resume/ResumeNew";

function ComingSoon() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1 style={{
            fontSize: "4rem",
            fontWeight: "bold",
            textAlign: "center",
          }}>
            Coming Soon
          </h1>
        </Row>
      </Container>
    </div>
  );
}

export default ComingSoon;
