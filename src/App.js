import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Switch
} from "react-router-dom";

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
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

        </div>

    </Router>
  )
}
