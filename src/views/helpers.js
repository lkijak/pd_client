import React from 'react';
import { render } from '@testing-library/react';

/**
 * Libraries
 */
import axios from 'axios';

/**
 * backend client variables
 */
export const API_DOMAIN = `https://smart-evolution.azurewebsites.net`;
export const clientId = `850157239961-g16l5ifn3btccslaogvpicf7umrbrubd.apps.googleusercontent.com`;

export const user = JSON.parse(localStorage.getItem('user'));

// define username
export const getUsername = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let username = user.profileObj.email;
    username = username.slice(0, username.indexOf('@'));
  return username
}

// Check if user exist in backend
export const getUserData = () => {
  let username = getUsername();

  axios.get(`${API_DOMAIN}/User`, {
    params: {
      userName: username
    }
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
}

// Sends Google data to backend
export const registerUser = () => {
  let userName = getUsername();
  let user = JSON.parse(localStorage.getItem('user'));
  let userEmail = user.profileObj.email;

  axios.post(`${API_DOMAIN}/User`, 
  {
    userName: userName,
    email: userEmail
  },
  {
    'Content-Type': 'text/plain'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


/**
 * Google login functions
 */
export const reportSuccess = response => {
  if(window.location.href !== '/dashboard/'){window.location.href = '/dashboard/'}
  localStorage.setItem('user', JSON.stringify(response));
  registerUser();
  getUserData();
}

export const reportError = response => {
  console.error(response); // eslint-disable-line
  if(window.location.href !== '/'){window.location.href = '/'}
}

export const reportLoading = () => {
  console.log('loading') // eslint-disable-line
}

export const reportLogout = () => {
  localStorage.clear('user');
  if(window.location.href !== '/'){window.location.href = '/'}
}