import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { Profile } from 'type/profile';
import ProfileSearchLoaderMobile from './ProfileSearchLoaderDesk';
import ProfileSearchLoaderDesk from './ProfileSearchLoaderMobile';
import './styles.css';

type FormData = {
  profile: string;
};

const ProfileSearch = () => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.profile}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container profile-container">
      <div className="profile-card">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="profile"
              value={formData.profile}
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

      {isLoading ? (
        <>
          <ProfileSearchLoaderMobile />
          <ProfileSearchLoaderDesk />
        </>
      ) : (
        profile && <ResultCard profile={profile} />
      )}
    </div>
  );
};

export default ProfileSearch;
