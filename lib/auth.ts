import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const setAuthCookie = () => {
  auth.currentUser?.getIdToken().then((token) => {
    localStorage.setItem('token', token);
  });
};

export const removeAuthCookie = () => {
  localStorage.removeItem('token');
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const setupAuthListener = (callback: (isAuthenticated: boolean) => void) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthCookie();
      callback(true);
    } else {
      removeAuthCookie();
      callback(false);
    }
  });
};