import React from 'react';
import './Parceirias.scss'; // Importando o arquivo SCSS
import { Col, Image } from 'react-bootstrap';

const Parceirias = () => {
  return (
    <div className="contact-container" id='parceiros'>

      <Col md={1} className="contact-image">
        <Image className='app-png' src="assets/image-container.svg"/>
      </Col>

      <Col md={11} className="contact-form">
        <h2>Parcerias</h2>
        <p>Gostou do nosso produto? Quer fazer parte do nosso time? Entre em contato conosco agora mesmo</p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome..." required />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contato</label>
            <input type="tel" id="contact" placeholder="Digite um número de celular..." required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Ex: exemplo@gmail.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="contactType">Tipo de contato</label>
            <select id="contactType">
              <option>Solicitação de parceria</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem de texto</label>
            <textarea id="message" placeholder="Diga 'Oi' e comece a falar conosco..." required />
          </div>

          <div className="form-check">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">
              Ao marcar esta caixa e enviar seus dados, você nos dá permissão para enviar e-mails. Não se preocupe, você pode cancelar a qualquer momento.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Enviar mensagem
          </button>
        </form>
      </Col>

      {/* <div style={{ position: 'absolute', marginTop: '168vh', marginLeft: '4vw' }}>
          <Image src='assets/effects-line-3.svg' />
      </div> */}
    </div>
  );
};

export default Parceirias;
