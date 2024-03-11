// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { navigationLinks } from '../../helpers/navigationLinks';
// import './navigationBar.css'

// function NavigationBar() {

//     const scrollToSection = (ref) => {
//         const section = document.querySelector(ref);
//         console.log('Scrolling to:', ref);
//         if (section) {
//           console.log('Found section:', section);
//           section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         } else {
//           console.log('Section not found:', ref);
//         }
//       };
  

//   return (
//     <Navbar expand="lg" className="frosty-bg">
//       <Container>
//         <Navbar.Brand href="#home">Somya Shastri</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             {navigationLinks.map((link, index) => (
//               <Nav.Link key={index} onClick={() => scrollToSection(`#${link.ref}`)}>{link.name}</Nav.Link>
//               ))}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navigationLinks } from '../../helpers/navigationLinks';
import './navigationBar.css';

function NavigationBar() {

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
    <Navbar expand="lg" className="frosty-bg">
      <Container>
        <Navbar.Brand href="#home">Somya Shastri</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navigationLinks.map((link, index) => (
              <Nav.Link key={index} onClick={() => scrollToSection(`#${link.ref}`)}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavigationBar;
