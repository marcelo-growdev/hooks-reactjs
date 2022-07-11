import { USER_SESSION } from './constants';
import { IUser } from './reducer';

export function login(payload: IUser) {
  return {
    type: USER_SESSION.LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: USER_SESSION.LOGOUT,
  };
}
