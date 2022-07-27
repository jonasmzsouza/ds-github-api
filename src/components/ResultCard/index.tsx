import { User } from 'type/user';
import './styles.css';

type Props = {
  user: User;
}

const ResultCard = ({ user }: Props) => {
  return (
    <div className="result-card">
      <div className="result-image-container">
        <img
          src={user.avatar_url}
          alt={user.name}
        />
      </div>
      <div className="result-info-container">
        <h3>Informações</h3>
        <div className="result-info-content">
          <div className="result-info-inner">
            <h4>Perfil:</h4>
            <a
              href={user.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{user.url}</p>
            </a>
          </div>
          <div className="result-info-inner">
            <h4>Seguidores:</h4>
            <p>{user.followers}</p>
          </div>
          <div className="result-info-inner">
            <h4>Localidade:</h4>
            <p>{user.location}</p>
          </div>
          <div className="result-info-inner">
            <h4>Nome:</h4>
            <p>{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
