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
    <Container className="p-5" id="tech">
      {/* <h1><u>Languages:</u></h1> */}
      <Row className="image-gallery">
        <Col>
          <Row>
            <u>Languages:</u>
          </Row>
          <br />
          <Row>
            <Col sm={3}>
              <FontAwesomeIcon icon={faJs} className="icon" />
              <p className="caption">JavaScript</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faJava} className="icon" />
              <p className="caption">Java</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faPython} className="icon" />
              <p className="caption">Python</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faSwift} className="icon" />
              <p className="caption">Swift</p>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <FontAwesomeIcon icon={faHtml5} className="icon" />
              <p className="caption">HTML</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faCss3} className="icon" />
              <p className="caption">CSS</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faDatabase} className="icon" />
              <p className="caption">SQL</p>
            </Col>
            <Col sm={3} className="tech-text">
              C++
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="tech-text">
              PHP
            </Col>
          </Row>
        </Col>

        {/* <h1><u>Frameworks:</u></h1><br /> */}
        <Col>
          <Row>
            <u>Frameworks:</u><br/>
          </Row>
          <br />
          <Row>
            <Col sm={3}>
              <FontAwesomeIcon icon={faAngular} className="icon" />
              <p className="caption">AngularJs</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faNodeJs} className="icon" />
              <p className="caption">NodeJs</p>
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faBootstrap} className="icon" />
              <p className="caption">Bootstrap</p>
            </Col>
            <Col sm={3} className="tech-text">
              Spring
            </Col>
          </Row>
        </Col>
        {/* <br/>
            <h1><u>Tools:</u></h1><br /> */}
        <Col>
          <Row>
            <u>Tools:</u>
          </Row>
          <Row>
            <Col sm={3} className="tech-text">
              Postman
            </Col>
            <Col sm={3} className="tech-text">
              Apache Maven
            </Col>
            <Col sm={3}>
              <FontAwesomeIcon icon={faGit} className="icon" />
            </Col>
            <Col sm={3} className="tech-text">
              Jenkins
            </Col>
          </Row>
          <Row>
            <Col sm={3} className="tech-text">
              Bitbucket
            </Col>
            <Col sm={3} className="tech-text">
              Jira
            </Col>
            <Col sm={3} className="tech-text">
              Splunk
            </Col>
            <Col sm={3} className="tech-text">
              Apache JMeter
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Technology;
