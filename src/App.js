import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Views/Auth/Auth.js';
import { useState } from 'react';
import { getUser } from './services/users.js';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <Auth user={user} setUser={setUser} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
