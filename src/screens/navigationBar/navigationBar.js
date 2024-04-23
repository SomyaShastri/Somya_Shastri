import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navigationLinks } from '../../helpers/navigationLinks';
import './navigationBar.css';

function NavigationBar() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionRefs = navigationLinks.map(link => document.querySelector(`#${link.ref}`));
      
      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const sectionRef = sectionRefs[i];
        if (sectionRef.offsetTop <= scrollPosition) {
          setCurrentSection(navigationLinks[i].ref);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    const section = document.querySelector(ref);
    console.log('Scrolling to:', ref);
    if (section) {
      console.log('Found section:', section);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log('Section not found:', ref);
    }
  };

  return (
    <div className='navBar'>
    <Navbar expand="lg" bg = 'light' fixed = 'top'>
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="./logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              // alt="Somya Shastri logo"
            />
            Somya Shastri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" variant="underline" defaultActiveKey="/home">
            {navigationLinks.map((link, index) => (
              <Nav.Link 
              key={index} 
              onClick={() => scrollToSection(`#${link.ref}`)}
              className={currentSection === link.ref ? 'active' : ''}
              >{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;
