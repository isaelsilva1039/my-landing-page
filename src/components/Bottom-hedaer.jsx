import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import './Header.scss';
import ProductWhitLabel from './ProductWhitLabel';
import { Cards } from './Card';

function BottomHeader() {
    return (
        <>
        <div className="feature-cards">
            {/* <Cards 
              icon='assets/personalidade.svg'
              title="Personalidade"
              text="Configure, altere e personalize plataforma para melhor representar o seu negócio."
            />

            <Cards 
              icon='assets/agilidade.svg'
              title="Agilidade"
              text="A 2WL permite iniciar um negócio do zero com rapidez, praticidade e sem burocrácia."
            />

            <Cards 
              icon='assets/gestao.svg'
              title="Gestão de negócios"
              text="Ganhe tempo para se dedicar inteiramente ao seu negócio enquanto cuidamos da tecnologia."
            /> */}
            {/* <Col md={2}>
            </Col> */}
            <Col md={2}>
                <div className='card'>
                    <div>
                        <Image src="assets/line-top.svg" className='img-line-top' alt="Pessoa usando plataforma" fluid />

                        <div className='sub-card'>
                            <div className='card-item'>
                                <div className='item'>
                                <Image src="assets/paint-brush.svg" alt="Pessoa usando plataforma" className="hero-image" fluid />
                                </div>

                            </div>

                        </div>

                        <Image src="assets/line-bottom.svg" className='img-line-botton' alt="Pessoa usando plataforma" fluid />
                    </div>
                    {/* <div className='div-quadro'></div> */}
                    <div className='titulo'>Conformidade Fiscal</div>
                    <div className='text'>Garanta que todos os seus documentos fiscais estejam em total conformidade com a legislação vigente, de forma automática e confiável.</div>
                </div>
            </Col>
            <Col md={2}>
                <div className='card'>
                    <Image src="assets/line-top.svg" className='img-line-top' alt="Pessoa usando plataforma" fluid />

                    <div className='sub-card'>
                        <div className='card-item'>
                            <div className='item'>
                             
                                <Image src="assets/time-up.svg" alt="Pessoa usando plataforma" className="hero-image" fluid />
                            </div>

                        </div>

                    </div>

                    <Image src="assets/line-bottom.svg" className='img-line-botton' alt="Pessoa usando plataforma" fluid />
                    <div className='titulo'>Agilidade</div>
                    <div className='text'>"Com o WorkCTE, emita CT-es e MDF-es em segundos, simplificando suas operações de transporte.</div>
                </div>
            </Col>
            <Col md={2}>
                <div className='card'>
                    <Image src="assets/line-top.svg" className='img-line-top' alt="Pessoa usando plataforma" fluid />

                    <div className='sub-card'>
                        <div className='card-item'>
                            <div className='item'>
                                <Image src="assets/bussiness-deal.svg" alt="Pessoa usando plataforma" className="hero-image" fluid />
                            </div>

                        </div>

                    </div>

                    <Image src="assets/line-bottom.svg" className='img-line-botton' alt="Pessoa usando plataforma" fluid />
                    {/* <div className='div-quadro'></div> */}
                    <div className='titulo'>Gestão de negócios</div>
                    <div className='text'>Dedique-se ao que importa: seu negócio. Deixe que o WorkCTE cuide da documentação e conformidade.</div>
                </div>
            </Col>
            {/* </Row> */}
        </div>

        {/* <div style={{ position: 'absolute', marginLeft: '3vw' }}>
          <Image src="assets/effects-line.svg" />
        </div>  */}
       {/* <ProductWhitLabel /> */}
       </>
    );
}

export default BottomHeader;