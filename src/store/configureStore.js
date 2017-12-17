/* eslint global-require: 0 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export default function configureStore(initialState = {}, browserHistory) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  let createStoreWithMiddleware = applyMiddleware(...middlewares);

  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(
    reducers, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  sagaMiddleware.run(sagas);

  return store;
}
