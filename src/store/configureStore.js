/* eslint global-require: 0 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reducers from '../reducers';
import sagas from '../sagas';

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  middlewares.push(routerMiddleware(history));

  const createStoreWithMiddleware = applyMiddleware(...middlewares);

  const finalCreateStore = createStoreWithMiddleware(createStore);
  const store = finalCreateStore(
    connectRouter(history)(reducers),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  );
  sagaMiddleware.run(sagas);

  return store;
}
