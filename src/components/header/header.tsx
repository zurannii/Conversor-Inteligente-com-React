import React from 'react';
import './Header.css';  

const Header: React.FC = () => {
  return (
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
  );
}

export default Header;
