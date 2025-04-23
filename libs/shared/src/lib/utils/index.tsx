import { localStorageKeys } from '../enum';

export const AuthPermission = (): boolean => {
  return localStorage.getItem(localStorageKeys.AUTH_PERMISSION) === 'true'
    ? true
    : false;
};
