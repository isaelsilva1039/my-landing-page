import React from 'react';
import './Header.scss';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

function Header() {


  
  return (
    <>
    <CustomNavbar />
    <div className="hero-section" id='inicio'>
      <Container style={{flexDirection:'column'}}>
        <Row className="align-items-center">
          <Col md={7}  className="text-section">
            <h1>Controle o seu negócio, ganhe tempo e inove com a plataforma 2WL</h1>
            <p>
              Com a Work White Label é simples automatizar dados, visualizar resultados e economizar tempo para
              tomar as melhores decisões.
            </p>
            <Button variant="light" className="cta-button"> <Image src="assets/check.svg" />  Começar agora</Button>
          </Col>
          <Col  md={5}  className="image-section">
            <Image src="assets/image-call.svg" alt="Pessoa usando plataforma" className="hero-image" fluid />
          </Col>
          {/* <div className='quadro-top'></div>
          <div className='hero-image-bottom-left'></div> */}
        </Row>
        
        <div className='div-linha'>
          <Image className='linha' src="assets/top-line-effect.svg" />
          <div className="quadro"></div>
        </div>

        {/* <Image src="assets/line-top-hedaer.png" alt="Pessoa usando plataforma" className="hero-image-top" fluid />
        <Image src="assets/line-bottom.svg" alt="Pessoa usando plataforma" className="hero-image-bottom" fluid /> */}

      </Container>
    </div>
    </>
  );
}

export default Header;