import React from 'react';
import './Beneficios.scss';
import CustomNavbar from './CustomNavbar/CustomNavbar';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import ProductWhitLabel from './ProductWhitLabel';

function Beneficios() {

  return (
    <>
      {/* <div style={{ position: 'absolute', top: '90vh', left: '3vw'}}>
        <Image src="assets/effects-line.svg" />
        {/* <Image className='linha-98' src="assets/Vector3.png" />
        <Image className='linha-97' src="assets/Vector2.png" />
        <Image className='linha-96' src="assets/Vector1.png" />
      </div> */}

     <>
      {/* <div>
        <ProductWhitLabel />
      </div> */}


      <div className="container-beneficios">
        <Col md={10} className='container-beneficios-col1'>

          <text> Benefícios da nossa plataforma </text>

          <div className='container-quadros1'>
            
            <Col className='card-1' md={7}>
              <div className='card-text'>
                <text> Flexibilidade total </text>
                <div>
                  Personalize cada módulo para atender às necessidades específicas do seu negócio. Escolha entre uma variedade de soluções, como financeiro, PDV, contabilidade, e muitos outros, todos integrados em uma plataforma coesa.
                </div>
              </div>
            </Col>

            <Col className='card-imagem' md={5}>
              <Image className='app-png' src="assets/apps.png" />
            </Col>
          </div>

          <div className='container-quadros1' >
            <Col className='card-imagem' style={{background:'#DBEAFE'}} md={5}>
              <Image className='app-png' src="assets/clock.png" />         
            </Col>

            <Col className='card-2' md={7}>
              <div className='card-text'>
                  <text> Economia de Tempo e Recursos </text>
                  <div>
                      Evite os altos custos e o tempo envolvidos no desenvolvimento de software. Nossa plataforma White Label permite que você lance rapidamente novos serviços sob sua marca.
                  </div>
                </div>
            </Col>
          </div>


          <div className='container-quadros1'>
            
            <Col className='card-1' md={7}>
              <div className='card-text'>
                <text> Foco no Seu Negócio </text>
                <div>
                Concentre-se no crescimento e na gestão do seu negócio enquanto nós cuidamos da tecnologia. Ofereça aos seus clientes uma solução robusta e confiável, sem a necessidade de se preocupar com o desenvolvimento e a manutenção.
                </div>
              </div>
            </Col>

            <Col className='card-imagem' md={5}>
              <Image className='app-png' src="assets/chart-up.svg" />
            </Col>
          </div>


          <div className='container-quadros1' >
            <Col className='card-imagem' style={{background:'#DBEAFE'}} md={5}>
              <Image className='app-png' src="assets/helpdesk.svg" />         
            </Col>

            <Col className='card-2' md={7}>
              <div className='card-text'>
                  <text> Suporte e Atualizações Contínuas </text>
                  <div>
                  Nossa equipe dedica-se a garantir que sua plataforma esteja sempre atualizada e funcionando perfeitamente. Receba suporte técnico contínuo e atualizações regulares para manter seu serviço no topo do mercado.
                  </div>
                </div>
            </Col>
          </div>
        
        </Col>

      </div>

          {/* <div style={{ position: 'absolute', right: '2%', marginTop: '229%' }}>
            <Image src='assets/effects-line-2.svg' />
          </div> */}
      </>
    </>
  );
}

export default Beneficios;