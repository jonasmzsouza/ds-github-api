import { Profile } from 'type/profile';
import './styles.css';

type Props = {
  profile: Profile;
}

const ResultCard = ({ profile }: Props) => {
  return (
    <div className="result-card">
      <div className="result-image-container">
        <img
          src={profile.avatar_url}
          alt={profile.name}
        />
      </div>
      <div className="result-info-container">
        <h3>Informações</h3>
        <div className="result-info-content">
          <div className="result-info-inner">
            <h4>Perfil:</h4>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{profile.url}</p>
            </a>
          </div>
          <div className="result-info-inner">
            <h4>Seguidores:</h4>
            <p>{profile.followers}</p>
          </div>
          <div className="result-info-inner">
            <h4>Localidade:</h4>
            <p>{profile.location}</p>
          </div>
          <div className="result-info-inner">
            <h4>Nome:</h4>
            <p>{profile.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
