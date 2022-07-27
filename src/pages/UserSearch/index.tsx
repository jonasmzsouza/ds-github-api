import axios from 'axios';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { User } from 'type/user';
import UserSearchLoaderMobile from './UserSearchLoaderDesk';
import UserSearchLoaderDesk from './UserSearchLoaderMobile';
import './styles.css';

type FormData = {
  user: string;
};

const UserSearch = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    user: '',
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
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setUser(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container user-container">
      <div className="user-card">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
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
          <UserSearchLoaderMobile />
          <UserSearchLoaderDesk />
        </>
      ) : (
        user && <ResultCard user={user} />
      )}
    </div>
  );
};

export default UserSearch;
