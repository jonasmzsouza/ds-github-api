import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import UserSearch from 'pages/UserSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/usersearch">
        <UserSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
