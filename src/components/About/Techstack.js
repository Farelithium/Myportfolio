import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
  DiHtml5,
  DiPhp,
  DiMysql,
  DiCodeigniter,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiLaravel,
  SiTailwindcss,
  SiPostgresql,

} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
