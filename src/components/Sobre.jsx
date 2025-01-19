import React from 'react';
import './Sobre.scss';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

function Sobre() {


  
  return (
    <>
    <div className="sobre-product-white-label">
      <div style={{marginLeft:'128px'}}>
        <Col className='container-blue'>
          Sobre nós
        </Col>

        <Col className='container-white'>
            
            <Col className='container-white-sub' >
            Na Work Innovation, nosso compromisso é impulsionar seu negócio através da tecnologia avançada. Somos especialistas em integrar sistemas e criar soluções de software personalizadas que otimizam a gestão de seu ERP, fortalecem o controle financeiro e potencializam seu ponto de venda (PDV).

Oferecemos mais do que simplesmente produtos: proporcionamos parceria. Com uma equipe dedicada de especialistas em tecnologia, garantimos soluções robustas e inovadoras que se adaptam às necessidades únicas de sua empresa.

Na vanguarda da inovação, buscamos constantemente novas formas de aprimorar nossos serviços e desenvolver novas funcionalidades que elevam sua eficiência operacional e sua competitividade no mercado.
            </Col>

        </Col>

      </div>
    </div>
    </>
  );
}

export default Sobre;