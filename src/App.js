import React from 'react';
import './scss/main.css';
import { reportSuccess, reportError, reportLogout, reportLoading } from "./views/helpers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// views
import Start from './views/start';
import Dashboard from './views/dashboard';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/dashboard/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div> 
  );
}


export default App;