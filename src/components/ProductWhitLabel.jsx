import React from 'react';
import './ProductWhitLabel.scss';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';

function ProductWhitLabel() {


  
  return (
    <>
    <div className="product-white-label">
      <div style={{marginLeft:'128px'}}>
        <Col className='container-blue'>
         O que é um produto White Label?
        </Col>

        <Col className='container-white'>
            
            <Col className='container-white-sub' >
                Um produto White Label é uma solução criada por uma empresa que pode ser rebranded e vendida por outras empresas como se fosse sua própria. Nossa plataforma oferece a flexibilidade e a personalização necessárias para que você possa oferecer serviços de alta qualidade sob a sua marca, sem os custos e o tempo de desenvolvimento de uma solução do zero.
            </Col>

        </Col>

      </div>
    </div>
    </>
  );
}

export default ProductWhitLabel;