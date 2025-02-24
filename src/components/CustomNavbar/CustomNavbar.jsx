import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaRegComment } from 'react-icons/fa';
import './Navbar.scss';

function CustomNavbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
        <span>
          <img
              src="assets/logo.png" 
              alt="Logo"
              className="logo"
          />
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleScroll('inicio')} className="nav-item">
                Início
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll('como-funciona')} className="nav-item">
                Como funciona
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll('sobre-nos')} className="nav-item">
                Sobre nós
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll('parceiros')} className="nav-item">
                Parceiros
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll('politica')} className="nav-item">
                Política de privacidade
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>

        <div>
          <Button variant="outline-light" className="contact-button">
            <FaRegComment size={'20px'} /> Fale conosco
          </Button>
        </div>
     
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
