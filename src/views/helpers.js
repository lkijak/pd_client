
/**
 * Libraries
 */
import axios from 'axios';

/**
 * backend client variables
 */
export const API_DOMAIN = `https://smart-evolution.azurewebsites.net`;
export const googleClientId = `850157239961-g16l5ifn3btccslaogvpicf7umrbrubd.apps.googleusercontent.com`;

// local storage
export const user = JSON.parse(localStorage.getItem('user'));

// define username
export const getUsername = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let username = user.profileObj.email;
    username = username.slice(0, username.indexOf('@'));
  return username
}

/**
 * Google login functions
 */
export const reportSuccess = response => {
  localStorage.setItem('user', JSON.stringify(response));
  window.location.reload();
}

export const reportError = response => {
  console.error('Błąd logowania:', response); // eslint-disable-line
}

export const reportLoading = () => {
  console.log('Ładowanie...') // eslint-disable-line
}

export const reportLogout = () => {
  localStorage.clear('user');
  console.log('Pomyślnie wylogowano.')
  window.location.reload();
}