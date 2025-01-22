import { Col, Image } from "react-bootstrap";
import './Teste.scss'

export function Teste() {
    return (
        <div className="teste-container">
            <span className="title">Ficou em dúvida... que tal um teste?</span>

            <Col className="texts-content">
                <span className="text-information">Experimente a flexibilidade e a personalização que sua empresa merece. Contrate os módulos que você precisa – Financeiro, PDV, Contabilidade e muito mais – tudo em uma única plataforma. Não perca tempo, inicie agora e veja como podemos ajudar a impulsionar seu sucesso!</span>

                <Col className="start-now">
                    <Image src="assets/card-group.svg"/>

                    <div className="start-content">
                        <span className="start-title">Comece Agora!</span>

                        <p>Descubra como nossa solução White Label pode transformar seu negócio. Converse conosco para uma demonstração gratuita!</p>

                        <button className="btn-demonstration">Quero minha demonstração</button>
                    </div>
                </Col>
            </Col>
        </div>
    )
}