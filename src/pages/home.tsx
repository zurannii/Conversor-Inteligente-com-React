import './Home.css';
import logo from '../assets/image-removebg-preview 1.png';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <a href="/" className="header-item">Home</a>
        </div>
        <div className="header-right">
          <a href="/temperatura" className="header-item">Temperatura</a>
          <a href="/moeda" className="header-item">Moeda</a>
          <a href="/medidas" className="header-item">Medidas</a>
          <a href="/sobre" className="header-item">Sobre</a>
        </div>
      </header>
      <div className="home-content">
        <h1>Bem-vindo ao Conversor Inteligente</h1>
        <p>Este aplicativo simples e direto permite converter dólar para real, temperaturas e medidas com atualização automática. Escolha uma opção abaixo:</p>
        <div className="buttons">
          <a href="/moeda">Conversor de Moeda</a>
          <a href="/temperatura">Conversor de Temperatura</a>
          <a href="/medidas">Conversor de Medidas</a>
        </div>
      </div>
      <img className="home-image" src={logo} alt="" />
    </div>
  );
}

export default Home;

