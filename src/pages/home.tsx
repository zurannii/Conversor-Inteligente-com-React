import React from 'react';
import './Home.css';
import logo from '/assets/image-removebg-preview 1.png';
import Header from '../components/header/header';  

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1>Bem-vindo ao Conversor Inteligente</h1>
        <p>Este aplicativo simples e direto permite converter dólar para real, temperaturas e medidas com atualização automática. Escolha uma opção abaixo:</p>
        <div className="buttons">
          <a href="/moeda">Conversor de Moeda</a>
          <a href="/temperatura">Conversor de Temperatura</a>
          <a href="/medidas">Conversor de Medidas</a>
        </div>
      </div>
      <img className="home-image" src={logo} alt="Ilustração do app" />
    </div>
  );
}

export default Home;

