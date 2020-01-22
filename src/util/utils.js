/* Fetch the user token from the local storage */
export const getUserToken = () => {

  const user = JSON.parse(localStorage.getItem('user')) || { token: '' };
  return `Bearer ${user.token}`;
}

/* Set the user token to the local storage */
export const setUserToken = (token) => {
  localStorage.setItem('user', JSON.stringify(token));
}

export const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem('user')) ? true : false;
}
