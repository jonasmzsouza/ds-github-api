import './styles.css';

const ResultCard = () => {
  return (
    <div className="result-card">
      <div className="result-image-container">
        <img
          src="https://avatars.githubusercontent.com/u/61324433?v=4"
          alt="Nome do pefil github"
        />
      </div>
      <div className="result-info-container">
        <h3>Informações</h3>
        <div className="result-info-content">
          <div className="result-info-inner">
            <h4>Perfil:</h4>
            <a
              href="https://api.github.com/users/jonasmzsouza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>https://api.github.com/users/jonasmzsouza</p>
            </a>
          </div>
          <div className="result-info-inner">
            <h4>Seguidores:</h4>
            <p>123</p>
          </div>
          <div className="result-info-inner">
            <h4>Localidade:</h4>
            <p>São Paulo</p>
          </div>
          <div className="result-info-inner">
            <h4>Nome:</h4>
            <p>Jonas Souza</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
