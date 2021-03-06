import React, { Component } from "react";
import axios from 'axios';
import { user, getUsername, API_DOMAIN } from './helpers';
import { Survey } from "./partials/Survey";
import UserPanel from './partials/UserPanel';
import MenuTop from './partials/MenuTop';
import UserProfile from './partials/UserProfile';
import TaskBoard from './partials/TaskBoard';
import ChartsHistory from './partials/ChartsHistory';

class Dashboard extends Component {

  state = {
    user: user,
    BE: null,
    displaySurvey: null,
    displayGraph: null,
    displayHistory: null
  }

  // Check if user exist in backend
  getUserData = () => {
    let username = getUsername();

    axios.get(`${API_DOMAIN}/User`, {
      params: {
        userName: username
      }
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Zalogowano. Pobieramy dane użytkownika:', response);
          this.setState({ BE: response.data });
          if (!response.data.isLifeCircleFilled) {
            this.displaySurvey();
          }
          if (response.data.isLifeCircleFilled) {
            this.initLifeCircle();
          }
        } else {
          console.error('Brak danych użytkownika w systemie.');
          console.log('Następuje próba rejestracji użytkownika do systemu.');
          this.registerUser();
        }
      })
      .catch((error) => {
        console.error('Brak danych użytkownika w systemie.', error);
        console.log('Następuje próba rejestracji użytkownika do systemu.');
        this.registerUser();
      });
  }

  // Sends Google data to backend
  registerUser = () => {
    let userName = getUsername();
    let userEmail = user.profileObj.email;

    axios.post(`${API_DOMAIN}/User`,
      {
        userName: userName,
        email: userEmail
      },
      {
        'Content-Type': 'application/json'
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Zarejestrowano nowego użytkownika.', response);
          this.getUserData();
          this.displaySurvey();
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          console.log('Użytkownik już istnieje w systemie i nie może być ponownie zarejestrowany.', error);
          console.log('Następuje ponowna próba pobrania danych użytkownika.');
          this.getUserData();
        } else {
          console.error('Błąd rejestracji nowego użytkownika.', error);
          console.log('Brak dalszych wskazań do działania.');
        }
      });
  }

  componentDidMount() {
    this.getUserData();
  }

  initLifeCircle = () => {
    this.setState({ displayGraph: true });
  }

  displaySurvey = () => {
    this.setState({ displaySurvey: true });
  }

  displayChartHistory = () => {
    this.setState({ displayHistory: true });
  }

  hideChartHistory = () => {
    this.setState({displayHistory: null});
  }

  render() {
    return (
      <UserPanel>
        <MenuTop />
        <UserProfile 
          displayGraph={ this.state.displayGraph } 
          displaySurvey={this.displaySurvey} 
          displayChartHistory={this.displayChartHistory}
        />
        <TaskBoard 
          isUser={this.state.user ? "true" : "false"} 
        />
        {this.state.displaySurvey && <Survey />}
        {this.state.displayHistory && <ChartsHistory hideChartHistory={this.hideChartHistory}/>}
      </UserPanel>
    );
  }
}

export default Dashboard;