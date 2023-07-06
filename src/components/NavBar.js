import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => { 



  return (
       <Navbar expand="lg" className="header justify-content-center fixed-top">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll"> 
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home" className='navbar-link'>Accueil</Nav.Link>
              <Nav.Link href="#presentation" className='navbar-link'>Presentation</Nav.Link>
              <Nav.Link href="#portfolio" className='navbar-link'>Portfolio</Nav.Link>
              <Nav.Link href="#competence" className='navbar-link'>Competences</Nav.Link>
              <Nav.Link href="#experience" className='navbar-link'>Experiences</Nav.Link>
              <Nav.Link href="#contact" className='navbar-link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        </Container>
    </Navbar>
  );
}

