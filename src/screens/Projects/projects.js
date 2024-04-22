import React from 'react'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { projectContent } from '../../helpers/projectContent';
import Col from 'react-bootstrap/Col';
import visaLogo from 'Visa_Inc._logo.svg.png';


function Projects() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white'
    }}>
    <div className='p-2 m-3 g-4'>
        <h1>Work Experience</h1>
        <Card className='m-3' bg="dark" text="white" key="dark" border="secondary">
        <Card.Header>VISA Inc.
        </Card.Header>
        <Card.Img src={visaLogo} style={{ width: '10%', height: 'auto' }}/>
          <Card.Body>
            <Card.Text>
              Collaborated cross-functionally to provide cryptographic solutions for data protection employing agile methodology. Designed card pin translation functionality
              with REST API to ensure customer pins are securely transferred from payment devices to merchant banks, in Spring. Created a system to sign and verify
              cryptographic keys to onboard Ethereum transactions on Visa’s platform and to periodically refresh these keys stored in memory, utilizing Java Cryptographic
              Extension. Enhanced in-house Asymmetric Key Tool to accept, validate, and fetch details from a P12 file and insert RSA keys in database to enable client
              certificate sharing; utilized Bouncy Castle API. Built a dynamic POM compare tool in Java to compare different versions of Java ARchives (JARs) stored in
              POM files for version consistency, thereby reducing more than 100 manual person-hours. Conducted multiple code reviews, code analysis, and bug fixes with
              SonarQube, source code control with Bitbucket, and log analysis using Splunk
            </Card.Text>
          </Card.Body>
        </Card>

      <h1>Projects</h1>
      <Row xs={1} md={2}>
        {projectContent.map((project, index) => (
          <Col key={index}>
            <Card className='m-2' bg="dark" text="white" key="dark" border="secondary">
            <Card.Header>{project.name}</Card.Header>
              <Card.Body>
                <Card.Text>
                  {project.content}
                </Card.Text>
                <Button variant="dark" href={project.link}>Source Code</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  )
}

export default Projects
