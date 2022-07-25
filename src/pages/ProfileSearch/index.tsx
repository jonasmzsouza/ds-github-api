import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import './styles.css';

type FormData = {
  profile: string;
};

const ProfileSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    profile: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container profile-container">
      <div className="profile-card">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
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
