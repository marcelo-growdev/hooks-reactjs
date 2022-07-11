import { AdminPanelSettings } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/modules/user/actions';
import { IUser } from '../../store/modules/user/reducer';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(
    login({
      login: 'admin',
      name: 'Administrado do sistema',
      password: '123123',
    })
  );

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
