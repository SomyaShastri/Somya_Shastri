import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faJava,
  faPython,
  faSwift,
  faHtml5,
  faCss3,
  faGit,
  faAngular,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./tech.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Technology() {
  return (
    <Container className="p-5 m-2" id="tech">
      <h3><u>Languages:</u></h3>
      <Row className="image-gallery">
          <br />
          <Row>
            <Col sm={2}>
              <FontAwesomeIcon icon={faJs} className="icon" />
              <p className="caption">JavaScript</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faJava} className="icon" />
              <p className="caption">Java</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faPython} className="icon" />
              <p className="caption">Python</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faSwift} className="icon" />
              <p className="caption">Swift</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faHtml5} className="icon" />
              <p className="caption">HTML</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faCss3} className="icon" />
              <p className="caption">CSS</p>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <FontAwesomeIcon icon={faDatabase} className="icon" />
              <p className="caption">SQL</p>
            </Col>
            <Col sm={2} className="tech-text">
              C++
            </Col>
            <Col sm={2} className="tech-text">
              PHP
            </Col>
          </Row>

        <h3><u>Frameworks:</u></h3><br />
          {/* <Row>
            <u>Frameworks:</u><br/>
          </Row> */}
          <br />
          <Row>
            <Col sm={2}>
              <FontAwesomeIcon icon={faAngular} className="icon" />
              <p className="caption">AngularJs</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faNodeJs} className="icon" />
              <p className="caption">NodeJs</p>
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faBootstrap} className="icon" />
              <p className="caption">Bootstrap</p>
            </Col>
            <Col sm={2} className="tech-text">
              Spring
            </Col>
          </Row>
        <br/>
            <h3><u>Tools:</u></h3><br />
          {/* <Row>
            <u>Tools:</u>
          </Row> */}
          <Row>
            <Col sm={2} className="tech-text">
              Postman
            </Col>
            <Col sm={2} className="tech-text">
              Apache Maven
            </Col>
            <Col sm={2}>
              <FontAwesomeIcon icon={faGit} className="icon" />
            </Col>
            <Col sm={2} className="tech-text">
              Jenkins
            </Col>
            <Col sm={2} className="tech-text">
              Bitbucket
            </Col>
            <Col sm={2} className="tech-text">
              Jira
            </Col>
          </Row>
          <Row>
            <Col sm={2} className="tech-text">
              Splunk
            </Col>
            <Col sm={2} className="tech-text">
              Apache JMeter
            </Col>
          </Row>
      </Row>
    </Container>
  );
}

export default Technology;
