/**
 * Create the store with dynamic reducers
 */

import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import { createReducer } from './reducers';
import catReducer from './reducers/catReducer';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return store;
}

// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// // import { composeWithDevTools } from 'redux-devtools-extension';

// import rootSaga from './saga';
// import reducer from './reducers/catReducer'

// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   reducer,
//   process.env.NODE_ENV !== 'production' ?
//     // composeWithDevTools(applyMiddleware(sagaMiddleware)) :
//     compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) :
//     applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(rootSaga);
