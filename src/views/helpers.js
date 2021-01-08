
/**
 * Libraries
 */
import axios from 'axios';

/**
 * backend client variables
 */
export const API_DOMAIN = `https://smart-evolution.azurewebsites.net`;
export const googleClientId = `850157239961-g16l5ifn3btccslaogvpicf7umrbrubd.apps.googleusercontent.com`;

export const user = JSON.parse(localStorage.getItem('user'));

// define username
export const getUsername = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let username = user.profileObj.email;
    username = username.slice(0, username.indexOf('@'));
  return username
}

// // Check if user exist in backend
// export const getUserData = () => {
//   let username = getUsername();

//   axios.get(`${API_DOMAIN}/User`, {
//     params: {
//       userName: username
//     }
//   })
//   .then((response) => {
//     if (response.status === 200) {
//       console.log('Zalogowano. Pobieramy dane użytkownika:', response);
//       return response.data;
//     }
//   })
//   .catch((error) => {
//     console.error('Brak danych użytkownika w systemie.', error);
//     console.log('Następuje próba rejestracji użytkownika do systemu.');
//     registerUser();
//   });
// }

// // Sends Google data to backend
// export const registerUser = () => {
//   let userName = getUsername();
//   let user = JSON.parse(localStorage.getItem('user'));
//   let userEmail = user.profileObj.email;

//   axios.post(`${API_DOMAIN}/User`, 
//   {
//     userName: userName,
//     email: userEmail
//   },
//   {
//     'Content-Type': 'application/json'
//   })
//   .then(function (response) { 
//     if (response.status === 200) {
//       console.log('Zarejestrowano nowego użytkownika.', response);
//       getUserData();
//     }
//   })
//   .catch(function (error) {
//     if(error.response.status === 409){
//       console.log('Użytkownik już istnieje w systemie i nie może być ponownie zarejestrowany.', error);
//       console.log('Następuje ponowna próba pobrania danych użytkownika.');
//       getUserData();
//     } else {
//       console.error('Błąd rejestracji nowego użytkownika.', error);
//       console.log('Brak dalszych wskazań do działania.');
//     }
//   });
// }

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