import React from 'react';
import './scss/main.css';
import {logged} from './views/helpers'

// views
import Start from './views/start';
import Dashboard from './views/dashboard';

function App() {
  return (
    <div className="App">
      { logged ? <Dashboard /> : <Start /> }
    </div>
  );
}

export default App;