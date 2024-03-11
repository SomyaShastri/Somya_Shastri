import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function About() {
  return (
    <div id="about">
      <h2 style={{ margin: "40px 0px" }}>Education</h2>
      <Row>
        <Col sm={6}>
          <Card className="m-3">
            <Card.Header>Masters</Card.Header>
            <Card.Body>
              <Card.Img src='USC.png' style={{ width: '20%', height: 'auto' }} />
              <Card.Text>
                <a
                 href="https://viterbischool.usc.edu/"
                 style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}
                 >
                  <h3>University of Southern California</h3>
                </a>
                Computer Science <br/>
                Los Angeles
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className="m-3">
            <Card.Header>Undergraduate</Card.Header>
            <Card.Body>
            <Card.Img src='VIT.svg.png' style={{ width: '10%', height: 'auto' }}/>
              <Card.Text>
              <a
                 href="https://vit.ac.in/"
                 style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}
                 >
                <h4>Vellore Institute of Technology</h4>
                </a>
                  Information Technology <br />
                  Vellore India
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
        </Col>
      </Row>
      <h3>A software engineer and a full stack developer</h3>
      <span>
        During my two years as a Software Engineer at Visa Inc., India, I honed
        my software development skills by providing cryptographic solutions for
        data protection. This experience allowed me to collaborate
        cross-functionally, contributing significantly to onboarding clients to
        Visa’s ecosystem and developing secure payment solutions. My proficiency
        extends to creating scalable and efficient systems, conducting code
        testing across agile cycles, and optimizing RESTful APIs. I optimized
        Splunk logs, and developed in-house tools s aving 100 man-hours,
        demonstrating efficiency and innovation. In my academic projects, I have
        created web and mobile applications using front-end and back-end
        languages and various frameworks, giving me in-depth knowledge of the
        subject.
        <br />
        <br />
        Having taken many leadership roles during my undergrads and working at
        Visa, I enhanced my leadership skills and became a better orator.
        Communicating with senior leaders in the company taught me how to be a
        better version of myself. Being a regular Toastmaster has helped me
        improve my speaking skills. Serving as an executive committee member of
        two clubs has further enhanced my ability to collaborate and lead
        effectively
      </span>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
