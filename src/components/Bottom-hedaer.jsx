import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import './Header.scss';
import ProductWhitLabel from './ProductWhitLabel';

function BottomHeader() {



    return (
        <>
        <div className="feature-cards ">
            <Col md={2}>
            </Col>
            {/* <Row className='quadros'> */}
            <Col md={2}>
                <div className='card'>
                    <Image src="assets/line-top.svg" className='img-line-top' alt="Pessoa usando plataforma" fluid />

                    <div className='sub-card'>
                        <div className='card-item'>
                            <div className='item'>
                            <Image src="assets/paint-brush.svg" alt="Pessoa usando plataforma" className="hero-image" fluid />
                            </div>

                        </div>

                    </div>

                    <Image src="assets/line-bottom.svg" className='img-line-botton' alt="Pessoa usando plataforma" fluid />
                    <div className='div-quadro'></div>
                    <div className='titulo'>Personalidade</div>
                    <div className='text'>Configure, altere e personalize plataforma para melhor representar o seu negócio.</div>
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
                    <div className='div-quadro'></div>
                    <div className='titulo'>Agilidade</div>
                    <div className='text'>A 2WL permite iniciar um negócio do zero com rapidez, praticidade e sem burocracia.</div>
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
                    <div className='div-quadro'></div>
                    <div className='titulo'>Gestão de negócios</div>
                    <div className='text'>Ganhe tempo para se dedicar inteiramente ao seu negócio enquanto cuidamos da tecnologia.</div>
                </div>
            </Col>


           
            {/* </Row> */}
        </div>
       {/* <ProductWhitLabel /> */}
       </>
    );
}

export default BottomHeader;