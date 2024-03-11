import React from 'react'
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faSwift, faAngular} from '@fortawesome/free-brands-svg-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Home() {
  return (
    <div>
      <Container className='p-5'>
        <h1>About me</h1><br/>
        I am a software developer pursuing my masters in Computer Science. I find front end development fun, back end 
        rewarding and full stack fulfiling.<br/><br/>
        <h2>Favourite Technologies</h2>
        <Row>
        <Col sm={2}><FontAwesomeIcon icon={faJava} className="icon"/><p className='caption'>Java</p></Col>
        <Col sm={2}><FontAwesomeIcon icon={faPython} className="icon"/><p className='caption'>Python</p></Col>
        <Col sm={2}><FontAwesomeIcon icon={faSwift} className="icon"/><p className='caption'>Swift</p></Col>
        <Col sm={2}><FontAwesomeIcon icon={faAngular} className="icon"/><p className='caption'>AngularJs</p></Col>
        <Col sm={2} className='tech-text'>SQL</Col>
        </Row>

      </Container>
    </div>
  );
}

export default Home;
