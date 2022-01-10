import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './Views/Auth/Auth.js';
import { useState } from 'react';
import { getUser, logout } from './services/users.js';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? (
              <>
                <h1>You are logged in</h1>
                <button onClick={handleLogout}>Log Out</button>
              </>
            ) : (
              <Auth user={user} setUser={setUser} />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
