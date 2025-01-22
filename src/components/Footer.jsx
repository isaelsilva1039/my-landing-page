// Footer.jsx
import React from 'react';
import './Footer.scss';
import { Image } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer" id='politica'>
      <div className='logo-routes'>
        <div>
          <Image src='assets/logo.svg' />
        </div>
        <ul className='list-routes'>
          <li>Início</li>
          <li>Como funciona</li>
          <li>Sobre nós</li>
          <li>Parceiros</li>
          <li>Política de privacidade</li>
        </ul>
      </div>

      <div className='social-midia'>
        <span>&copy; 2024 Sua Empresa. Todos os direitos reservados.</span>

        <div>
          <Image src='assets/social-midia.svg' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;