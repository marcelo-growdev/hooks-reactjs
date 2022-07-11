import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'hooks-reactjs',
      storage,
      whitelist: ['user', 'products'],
    },
    reducers
  );

  return persistedReducer;
};
