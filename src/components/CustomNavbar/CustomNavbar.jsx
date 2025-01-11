// Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaRegComment } from 'react-icons/fa';
import './Navbar.scss';

function CustomNavbar() {
  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="assets/logo.png" // Substitua pelo caminho correto da imagem do logo
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" className="nav-item">Início</Nav.Link>
            <Nav.Link href="#como-funciona" className="nav-item">Como funciona</Nav.Link>
            <Nav.Link href="#sobre-nos" className="nav-item">Sobre nós</Nav.Link>
            <Nav.Link href="#parceiros" className="nav-item">Parceiros</Nav.Link>
            <Nav.Link href="#politica" className="nav-item">Política de privacidade</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="contact-button">
            <FaRegComment size={'20px'} /> Fale conosco
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
