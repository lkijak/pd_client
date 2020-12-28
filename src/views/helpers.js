import Cookies from 'js-cookie';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

/**
 * backend client variables
 */
export const API_DOMAIN = `https://smart-evolution.azurewebsites.net`;
export const googleLoginURL = `${API_DOMAIN}/Login/GoogleLogin`;

export const responseGoogle = (response) => {
  console.log(response);
}

/**
 * User data
 */
export let userName = "Nati Bolesławska",
  userEmail = "nati@google.com",
  userRole = "1";


// Czy zalogowany
export const logged = Cookies.get('SMARTloggedIn');

// pretend that you log in
export const logIn = () => {
  Cookies.set('SMARTloggedIn', 'true', { expires: 1, path: '/' });
  window.location.reload();
}

// pretend that you log out
export const logOut = () => {
  Cookies.remove('SMARTloggedIn');
  window.location.reload();
}

// Real gogle login
export const logInGoogle = (event) => {
  event.preventDefault();

  axios.get(googleLoginURL).then(res => {
    console.log(res);
    console.log(res.data);
  })
}