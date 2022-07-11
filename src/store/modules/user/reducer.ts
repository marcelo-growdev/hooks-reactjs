import { USER_SESSION } from './constants';
import { IAction } from '../types';

export interface IUser {
  name: string;
  login: string;
  password: string;
}

const initialState: IUser = {
  name: '',
  login: '',
  password: '',
};

const userReducer = (
  state: IUser = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case USER_SESSION.LOGIN:
      return payload;

    case USER_SESSION.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
