import React from 'react'
import './contactme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import SomyaShastriResume from './SomyaShastri_resume.pdf'; // Import the PDF file
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:somyabrijesh.shastri@gmail.com';
  };

  const handleGithubClick = () => {
      window.open('https://github.com/SomyaShastri', '_blank');
    };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/somya-shastri/', '_blank');
  };

  const openPdf = () => {
    window.open(SomyaShastriResume, '_blank');
    };

  return (
    <div className='contact'>
      <p className='fs-4'>Contact me:</p>
      <Row>
        <Col sm={4}><FontAwesomeIcon icon={faLinkedin} className="iconintro" onClick={handleLinkedInClick} /></Col>
        <Col sm={4}><FontAwesomeIcon icon={faEnvelope} className="iconintro" onClick={handleEmailClick} /></Col>
        <Col sm={4}><FontAwesomeIcon icon={faGithub} className="iconintro" onClick={handleGithubClick} /></Col>
      </Row>
      <Row>
        <button className="buttonDesign" onClick={openPdf}>View Resume <FontAwesomeIcon icon={faFile} /></button>
      </Row>
    </div>
  )
}

export default Contact