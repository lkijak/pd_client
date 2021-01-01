import React from 'react';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

/**
 * Libraries
 */
import axios from 'axios';

/**
 * backend client variables
 */
export const API_DOMAIN = `https://smart-evolution.azurewebsites.net`;
export const googleLoginURL = `${API_DOMAIN}/Login/GoogleLogin`;
export const clientId = '617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com';

export const reportSuccess = response => {
  console.info(response); // eslint-disable-line
  if(window.location.href != '/dashboard/'){window.location.href = '/dashboard/'}
}

export const reportError = response => {
  console.error(response); // eslint-disable-line
  if(window.location.href != '/'){window.location.href = '/'}
}

export const reportLoading = () => {
  console.log('loading') // eslint-disable-line
}

export const reportLogout = () => {
  console.info('logout') // eslint-disable-line
}
