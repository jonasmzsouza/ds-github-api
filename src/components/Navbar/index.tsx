import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <Link to={'/'} className="nav-logo-text">
        <h1>Github API</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
