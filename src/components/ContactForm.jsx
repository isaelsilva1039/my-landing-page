// ContactForm.jsx
import React from 'react';
import './ContactForm.scss';

function ContactForm() {
  return (
    <section className="contact-form">
      <h2>Fale conosco</h2>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;