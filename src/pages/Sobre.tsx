import './sobre.css';
import Header from '../components/header/header';  

const Sobre: React.FC = () => {
  return (
    <>
      <Header /> { }
      <div className="container-sobre">
        <div className="card-sobre">
          <div className="foto-perfil" />
          <h3>Roberta Nascimento</h3>
          <p>
          Me chamo Roberta Nascimento e sou graduanda em Design Gráfico e Sistemas para Internet.  
          Tenho um olhar criativo voltado para a tecnologia, com foco em experiências digitais intuitivas, acessíveis e visualmente marcantes.  
          Minha paixão pelo design começou com pequenos projetos visuais e hoje se estende ao universo do UX/UI, branding e desenvolvimento de interfaces.  
          Já participei de projetos colaborativos, hackathons e iniciativas de impacto, sempre buscando unir estética, propósito e inovação.  

          </p>
          <a
            href="https://github.com/zurannii"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Sobre;



  