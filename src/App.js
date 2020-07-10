import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import Users from './components/users';

export default function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <Route  path="/about">
                <About />
              </Route>
            <Route  path="/users">
              <Users />
            </Route>
          </Switch>
        </div>
    </Router>
  )
}
