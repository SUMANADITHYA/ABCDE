import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Login Route */}
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>

          {/* ItemList Route (only accessible after login) */}
          <Route path="/items">
            {token ? <ItemList token={token} /> : <Redirect to="/login" />}
          </Route>

          {/* Cart Route */}
          <Route path="/cart">
            {token ? <Cart token={token} /> : <Redirect to="/login" />}
          </Route>

          {/* Default Route */}
          <Route path="/">
            {token ? <Redirect to="/items" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
