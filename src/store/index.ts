import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import persistReducer from './persistReducer';
import rootReducer from './modules/rootReducer';

const store = createStore(
  persistReducer(rootReducer),
  composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store);

export { store, persistor };
