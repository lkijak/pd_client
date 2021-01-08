import React, { Component } from 'react';
import { user } from './views/helpers';
import './scss/main.css';

// views
import Start from './views/start';
import Dashboard from './views/dashboard';

export default class App extends Component {
  state = {
    loggedIn: 0
  }

  updateLogin = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  }

  componentDidMount() {    
    // Check if user cookie exist and mark user as logged or redirect to start as logged-out  
    user && this.updateLogin();
  }

  render() {    
    return (
      <div className="App">
        { this.state.loggedIn ? <Dashboard /> : <Start updateLogin={this.updateLogin} /> }
      </div> 
    )
  }
}