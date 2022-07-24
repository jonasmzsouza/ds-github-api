import ResultCard from 'components/ResultCard';
import './styles.css';

const ProfileSearch = () => {
  return (
    <div className="container profile-container">
      <div className="profile-card">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={() => {}}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      <ResultCard />      
    </div>
  );
};

export default ProfileSearch;
