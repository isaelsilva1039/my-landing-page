import React from 'react';
import './Header.scss';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

function Header() {
  return (
    <>
      <CustomNavbar />
      <div className="hero-section" id='inicio'>
        <Container>
          <Row className="align-items-center" >
            <Col md={7}  className="text-section">
              <h1>Transforme a emissão de CT-es, MDF-es e a averbação de seguros com o WorkCTE</h1>
              <p>
                O WorkCTE é a solução ideal para automatizar o processo de emissão de documentos fiscais e averbação de seguros. 
                Reduza erros, otimize tempo e tenha total conformidade com a legislação.
              </p>
              <Button variant="light" className="cta-button"> <Image src="assets/check.svg" />  Começar agora</Button>
            </Col>
            <Col  md={5}  className="image-section">
              <Image src="assets/image@2x.png" alt="Pessoa usando plataforma" className="hero-image" fluid />
            </Col>
            <div className='quadro-top'></div>
            <div className='hero-image-bottom-left'></div>
          </Row>

          <Image src="assets/line-top-hedaer.png" alt="Pessoa usando plataforma" className="hero-image-top" fluid />
          <Image src="assets/line-bottom.svg" alt="Pessoa usando plataforma" className="hero-image-bottom" fluid />
        </Container>
      </div>
    </>
  );
}

export default Header;