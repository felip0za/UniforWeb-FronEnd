import React from 'react';
import './Lendpage.css';
import Carossel from '../../components/Carossel/Carossel';  // Importa o carrossel

function Lendpage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à Nossa Landing Page</h1>
        <p>Veja nossas incríveis imagens e descubra mais!</p>

        {/* Carrossel Importado */}
        <Carossel />

        {/* Botão Call-to-Action */}
        <div className="cta">
          <p>Explore mais sobre nossos serviços incríveis!</p>
          <button className="cta-button">Saiba Mais</button>
        </div>
      </header>
    </div>
  );
}

export default Lendpage;
