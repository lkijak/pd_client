import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login';
import { googleClientId, reportLogout, getUsername, API_DOMAIN } from '../helpers';
import axios from 'axios';

export class UserPanel extends Component {

  deleteUser = () => {
    let userName = getUsername();

    let r = window.confirm("Dupka");
    if(r === true){
      axios.delete(`${API_DOMAIN}/User`, {
        params: {
          userName: userName
        }
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Usunięto użytkownika ' + userName, response);
            reportLogout();
            localStorage.removeItem("user");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log('Błąd usuwania użytkownika.', error);
        });
    }
  }

  render() {
    return (
      <div className="u-flex-12/12 u-padding-big u-padding-horizontal-great u-text--right u-text--smallest u-bg-color--6 u-font-color--3 c-menu-top">
        <a className="o-link u-margin-right-great" onClick={this.deleteUser}>Usuń konto</a>
        <GoogleLogout
          clientId={googleClientId}
          buttonText="Wyloguj"
          onLogoutSuccess={reportLogout}
          render={renderProps => (
            <a className="o-link" onClick={renderProps.onClick} disabled={renderProps.disabled}>Wyloguj</a>
          )}
        >
        </GoogleLogout>
      </div>
    )
  }
}

export default UserPanel
