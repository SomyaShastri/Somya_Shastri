import React from 'react';
import './App.css'; // Import CSS file for styling
import NavigationBar from './screens/navigationBar/navigationBar';
import Contact from './screens/contact/contactme.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Tech from './screens/Tech/tech.js'
import About from './screens/About/about.js'
import Projects from './screens/Projects/projects.js'
import Intro from './screens/Intro/intro.js'


function App() {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <div className="App">
        <NavigationBar />
        <Row id = "home">
          <div className='background d-flex flex-column justify-content-center align-items-center'>
          <Container>
            <Intro />
          </Container>
          </div>
          <div
          style = {{height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          onClick={scrollToNextSection}>
            <FontAwesomeIcon icon={faChevronDown} className="iconss"
            style = {{cursor: 'pointer'}}
            />
          </div>

        </Row>
        {/* <div id = 'home' className='section'>
          <Home />
        </div> */}
        <Row id = 'about' className='section'>
          <h1>About me</h1>
          <About />
        </Row>
        <Row id = 'projects' className='section p-0 m-0'>
          <Projects />
        </Row>
        <Row id = 'tech' className='section'>
          <h1>Technologies</h1>
          <Tech />
        </Row>
        <div className="p-0 m-0">
          <Contact />
        </div>
      </div>
    );
}

export default App;
